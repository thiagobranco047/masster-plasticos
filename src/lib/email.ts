import nodemailer from 'nodemailer';

// Configuração do transporter do Nodemailer
// As credenciais devem ser configuradas via variáveis de ambiente
export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true para 465, false para outras portas
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Função para verificar se o transporter está configurado
export function isEmailConfigured(): boolean {
  return !!(
    process.env.SMTP_USER &&
    process.env.SMTP_PASS &&
    process.env.SMTP_HOST
  );
}

// Função auxiliar para enviar email
export async function sendEmail({
  to,
  subject,
  html,
  text,
}: {
  to: string | string[];
  subject: string;
  html: string;
  text?: string;
}) {
  if (!isEmailConfigured()) {
    console.warn('Email não configurado. Verifique as variáveis de ambiente SMTP_*');
    return { success: false, error: 'Email não configurado' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Masster Plásticos" <${process.env.SMTP_USER}>`,
      to: Array.isArray(to) ? to.join(', ') : to,
      subject,
      text: text || html.replace(/<[^>]*>/g, ''), // Remove HTML tags para versão texto
      html,
    });

    console.log('Email enviado:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erro desconhecido' };
  }
}

