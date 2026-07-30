<?php
// Permitir recibir JSON desde el JavaScript
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Solo aceptamos peticiones POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
    exit;
}

// Capturamos el JSON que envía Astro
$data = json_decode(file_get_contents("php://input"), true);

// Protecciones Anti-Spam (Honeypot)
if (!empty($data['bot_field'])) {
    http_response_code(400);
    echo json_encode(["error" => "Spam detectado"]);
    exit;
}

// Sanitización de variables (Anti-XSS)
$nombre = htmlspecialchars(strip_tags($data['nombre']));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$perfil = htmlspecialchars(strip_tags($data['perfil']));
$mensaje = htmlspecialchars(strip_tags($data['mensaje']));
$mensaje_br = nl2br($mensaje); // Respeta los saltos de línea

// Validaciones básicas
if (empty($nombre) || empty($email) || empty($mensaje) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["error" => "Datos inválidos"]);
    exit;
}

// --- CONFIGURACIÓN DEL CORREO ---
$destinatario = "tucorreo@agrovalue.es"; // REEMPLAZA ESTO CON EL CORREO DEL CLIENTE
$asunto = "Nuevo contacto web: " . $nombre;
$logoUrl = "https://agrovalue.es/Logo_Agrovalue.png";

// Plantilla HTML (Tu diseño exacto)
$htmlTemplate = "
<div style='font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; color: #0f172a; box-shadow: 0 1px 2px 0 rgba(0,0,0,0.05);'>
    
    <div style='padding: 32px 32px 24px 32px; border-bottom: 1px solid #e2e8f0; text-align: center;'>
        <img src='{$logoUrl}' alt='Agrovalue Logo' style='height: 48px; margin-bottom: 16px; object-fit: contain;' />
        <h1 style='margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.5px;'>Nuevo contacto recibido</h1>
        <p style='margin: 8px 0 0 0; font-size: 14px; color: #64748b;'>Tienes un nuevo mensaje desde el formulario web.</p>
    </div>

    <div style='padding: 32px;'>
        <table style='width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;'>
        <tr>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500; width: 30%;'>Perfil</td>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;'>{$perfil}</td>
        </tr>
        <tr>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;'>Nombre</td>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;'>{$nombre}</td>
        </tr>
        <tr>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;'>Email</td>
            <td style='padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;'>
            <a href='mailto:{$email}' style='color: #16a34a; text-decoration: none; font-weight: 500;'>{$email}</a>
            </td>
        </tr>
        <tr>
            <td style='padding: 14px 0; color: #64748b; font-weight: 500; vertical-align: top;'>Mensaje</td>
            <td style='padding: 14px 0; color: #0f172a; line-height: 1.6;'>{$mensaje_br}</td>
        </tr>
        </table>
    </div>

    <div style='padding: 16px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;'>
        <p style='margin: 0; font-size: 12px; color: #64748b;'>
        Este es un correo automático generado por el sistema de Agrovalue.
        </p>
    </div>

</div>
";

// Cabeceras necesarias para enviar HTML
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
// El remitente debe ser un correo del mismo dominio (IONOS) para no caer en spam
$headers .= "From: Web Agrovalue <noreply@agrovalue.es>" . "\r\n"; 
$headers .= "Reply-To: {$email}" . "\r\n";

// Enviar el correo usando la función nativa de PHP
if (mail($destinatario, $asunto, $htmlTemplate, $headers)) {
    http_response_code(200);
    echo json_encode(["success" => true]);
} else {
    http_response_code(500);
    echo json_encode(["error" => "Error interno del servidor de correo"]);
}
?>