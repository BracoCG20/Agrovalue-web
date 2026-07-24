/**
 * API Endpoint: /api/sendEmail.json
 * Descripción: Maneja las solicitudes POST del formulario de contacto.
 * Incluye protección Anti-Spam nativa (Honeypot, Timing y Validaciones de longitud).
 */
import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, email, perfil, mensaje, bot_field, form_time } = body;

    // --- PROTECCIÓN ANTI-SPAM ---

    // 1. Verificación Honeypot: Si el campo trampa tiene texto, es un bot.
    if (bot_field) {
      return new Response(JSON.stringify({ error: 'Spam detectado' }), {
        status: 400,
      });
    }

    // 2. Verificación de Velocidad: Si se llenó en menos de 3 segundos, es un script automatizado.
    if (form_time) {
      const timeElapsed = Date.now() - parseInt(form_time, 10);
      if (timeElapsed < 3000) {
        return new Response(
          JSON.stringify({ error: 'Envío demasiado rápido' }),
          { status: 400 },
        );
      }
    }

    // 3. Verificación de campos y protección contra inyección masiva (Payload)
    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400 },
      );
    }

    if (nombre.length > 100 || email.length > 150 || mensaje.length > 1500) {
      return new Response(
        JSON.stringify({ error: 'Límite de caracteres excedido' }),
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: 'Email inválido' }), {
        status: 400,
      });
    }

    // --- FIN PROTECCIÓN ANTI-SPAM ---

    const origin = new URL(request.url).origin;
    const logoUrl = `${origin}/Logo_Agrovalue.png`;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: import.meta.env.SMTP_USER,
        pass: import.meta.env.SMTP_PASS,
      },
    });

    const htmlTemplate = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden; color: #0f172a; box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);">
        
        <div style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #e2e8f0; text-align: center;">
          <img src="${logoUrl}" alt="Agrovalue Logo" style="height: 48px; margin-bottom: 16px; object-fit: contain;" />
          <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.5px;">Nuevo contacto recibido</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; color: #64748b;">Tienes un nuevo mensaje desde el formulario web.</p>
        </div>

        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 14px;">
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500; width: 30%;">Perfil</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a; font-weight: 500;">${perfil}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;">Nombre</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">${nombre}</td>
            </tr>
            <tr>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-weight: 500;">Email</td>
              <td style="padding: 14px 0; border-bottom: 1px solid #f1f5f9; color: #0f172a;">
                <a href="mailto:${email}" style="color: #16a34a; text-decoration: none; font-weight: 500;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 14px 0; color: #64748b; font-weight: 500; vertical-align: top;">Mensaje</td>
              <td style="padding: 14px 0; color: #0f172a; line-height: 1.6;">${mensaje}</td>
            </tr>
          </table>
        </div>

        <div style="padding: 16px 32px; background-color: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0; font-size: 12px; color: #64748b;">
            Este es un correo automático generado por el sistema de Agrovalue.
          </p>
        </div>

      </div>
    `;

    const info = await transporter.sendMail({
      from: `"Agrovalue Web" <${import.meta.env.SMTP_USER}>`,
      to: import.meta.env.SMTP_TO,
      replyTo: email,
      subject: `Nuevo contacto web: ${nombre}`,
      html: htmlTemplate,
    });

    return new Response(
      JSON.stringify({ success: true, messageId: info.messageId }),
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Error desconocido al enviar el correo';
    console.error('Error en Nodemailer:', errorMessage);

    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
    });
  }
};
