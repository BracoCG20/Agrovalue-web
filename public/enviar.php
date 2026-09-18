<?php
session_start();

// ========================================================================
// 1. CONFIGURACIÓN UNIVERSAL DEL HOSTING
// ========================================================================
$config = [
    // Cambia 'localhost' por 'smtp.tudominio.com' si tu hosting lo requiere
    'smtp_host' => 'localhost', 
    'smtp_user' => 'noreply@agrovalue.org',
    'smtp_pass' => 'TU_CONTRASEÑA_AQUI',
    'smtp_port' => 587, // Intenta 587, 465 o 25 dependiendo del plan
    'destinatario'=> 'cbraco@gruposp.pe',
    'allowed_origins' => ['https://agrovalue.org', 'https://www.agrovalue.org', 'http://localhost:4321']
];
// ========================================================================

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, $config['allowed_origins'])) {
    header("Access-Control-Allow-Origin: $origin");
} else {
    header("Access-Control-Allow-Origin: https://agrovalue.org");
}

header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200); exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); echo json_encode(["error" => "Método no permitido"]); exit;
}

// Rate Limiting
if (isset($_SESSION['last_submit_time']) && (time() - $_SESSION['last_submit_time'] < 30)) {
    http_response_code(429); echo json_encode(["error" => "Espera 30 segundos."]); exit;
}

$data = json_decode(file_get_contents("php://input"), true) ?: $_POST;

// Honeypot
if (!empty($data['bot_field'])) {
    http_response_code(400); echo json_encode(["error" => "Rechazado."]); exit;
}

// Sanitización
$nombre = htmlspecialchars(strip_tags(trim($data['nombre'] ?? '')));
$email = filter_var(trim($data['email'] ?? ''), FILTER_SANITIZE_EMAIL);
$perfil = htmlspecialchars(strip_tags(trim($data['perfil'] ?? '')));
$mensaje = htmlspecialchars(strip_tags(trim($data['mensaje'] ?? '')));
$mensaje_br = nl2br($mensaje);

if (empty($nombre) || empty($email) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400); echo json_encode(["error" => "Datos inválidos"]); exit;
}

$_SESSION['last_submit_time'] = time();

// --- CARGA MANUAL DE PHPMAILER (Compatible con cualquier hosting sin Composer) ---
require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true; // Ponlo en false si usas el puerto 25 localmente en un hosting muy restrictivo
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = ($config['smtp_port'] == 465) ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = $config['smtp_port'];

    // Si tu hosting tiene certificados SSL autofirmados (común en planes muy básicos)
    $mail->SMTPOptions = [
        'ssl' => [
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true
        ]
    ];

    $mail->setFrom($config['smtp_user'], 'Web Agrovalue');
    $mail->addAddress($config['destinatario']); 
    $mail->addReplyTo($email, $nombre);

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = 'Nuevo contacto: ' . $nombre;
    
    // Plantilla
    $logoUrl = "https://agrovalue.org/Logo_Agrovalue.svg";
    $mail->Body = "
    <div style='font-family: Arial, sans-serif; max-width: 600px; margin: 20px auto; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; color: #0f172a;'>
        <h1 style='font-size: 20px; color: #184c2f;'>Nuevo contacto recibido</h1>
        <p><strong>Perfil:</strong> {$perfil}</p>
        <p><strong>Nombre:</strong> {$nombre}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Mensaje:</strong><br/>{$mensaje_br}</p>
    </div>";

    $mail->send();
    http_response_code(200); echo json_encode(["success" => true]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error interno. Contacta al administrador."]);
}
?>