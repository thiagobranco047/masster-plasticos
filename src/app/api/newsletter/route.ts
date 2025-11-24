import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, isEmailConfigured } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validação básica
    if (!email) {
      return NextResponse.json(
        { error: 'Email é obrigatório' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Preparar conteúdo do email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #FCD34D; border-bottom: 2px solid #FCD34D; padding-bottom: 10px;">
          Nova Inscrição na Newsletter
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Este email foi enviado através do formulário de newsletter do site Masster Plásticos.</p>
        </div>
      </div>
    `;

    // Enviar email para a empresa
    const emailDestino = process.env.NEWSLETTER_EMAIL || process.env.CONTATO_EMAIL || 'gerentecomercial@massterplasticos.com.br';
    
    if (isEmailConfigured()) {
      const emailResult = await sendEmail({
        to: emailDestino,
        subject: 'Nova inscrição na newsletter',
        html: emailHtml,
      });

      if (!emailResult.success) {
        console.error('Erro ao enviar email:', emailResult.error);
      }
    } else {
      console.log('Email não configurado. Nova inscrição na newsletter:', {
        email,
        data: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: 'Inscrição realizada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar inscrição na newsletter:', error);
    return NextResponse.json(
      { error: 'Erro ao realizar inscrição. Tente novamente.' },
      { status: 500 }
    );
  }
}

