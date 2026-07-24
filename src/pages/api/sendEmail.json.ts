import nodemailer from 'nodemailer';

export const prerender = false;

export const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { nombre, email, perfil, mensaje } = body;

    // Extraemos dinámicamente el dominio de tu web (ej. http://localhost:4321 o https://agrovalue.com)
    const origin = new URL(request.url).origin;
    // Asegúrate de tener el logo en formato PNG en tu carpeta public
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
        
        <!-- Cabecera con Logo Dinámico -->
        <div style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #e2e8f0; text-align: center;">
          <img src="${logoUrl}" alt="Agrovalue Logo" style="height: 48px; margin-bottom: 16px; object-fit: contain;" />
          
          <h1 style="margin: 0; font-size: 20px; font-weight: 600; letter-spacing: -0.5px;">Nuevo contacto recibido</h1>
          <p style="margin: 8px 0 0 0; font-size: 14px; color: #64748b;">Tienes un nuevo mensaje desde el formulario web.</p>
        </div>

        <!-- Cuerpo y Tabla de datos -->
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

        <!-- Pie del correo (Footer) -->
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
    console.error('Error en Nodemailer:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
};
