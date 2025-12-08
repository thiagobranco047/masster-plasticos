import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, isEmailConfigured } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, empresa, mensagem } = body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: 'Campos obrigatórios não preenchidos' },
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
          Nova Cotação - Linha Cinza Claro
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
        </div>
        
        <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #FCD34D; margin: 20px 0;">
          <h3 style="color: #1f2937; margin-top: 0;">Detalhes da Solicitação:</h3>
          <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${mensagem}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Enviado em: ${new Date().toLocaleString('pt-BR')}</p>
          <p>Este email foi enviado através do formulário de cotação da linha Cinza Claro do site Masster Plásticos.</p>
        </div>
      </div>
    `;

    // Enviar email para a empresa
    const emailDestino = process.env.LINHA_CINZA_CLARO_EMAIL || process.env.CONTATO_EMAIL || 'gerentecomercial@massterplasticos.com.br';
    
    if (isEmailConfigured()) {
      const emailResult = await sendEmail({
        to: emailDestino,
        subject: 'Nova cotação - Linha Cinza Claro',
        html: emailHtml,
      });

      if (!emailResult.success) {
        console.error('Erro ao enviar email:', emailResult.error);
      }
    } else {
      console.log('Email não configurado. Nova cotação Linha Cinza Claro:', {
        nome,
        email,
        empresa: empresa || 'Não informado',
        mensagem,
        data: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: 'Solicitação de cotação enviada com sucesso!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar cotação Linha Cinza Claro:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar solicitação. Tente novamente.' },
      { status: 500 }
    );
  }
}

