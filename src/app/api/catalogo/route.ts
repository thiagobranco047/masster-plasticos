import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, isEmailConfigured } from '@/lib/email';

export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, empresa, telefone, cargo, interesse, aceite } = body;

    // Validação básica
    if (!nome || !email || !telefone || !aceite) {
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
          Nova Solicitação de Catálogo
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          ${empresa ? `<p><strong>Empresa:</strong> ${empresa}</p>` : ''}
          ${cargo ? `<p><strong>Cargo:</strong> ${cargo}</p>` : ''}
          ${interesse ? `<p><strong>Interesse:</strong> ${interesse}</p>` : ''}
          <p><strong>Aceitou receber informações:</strong> ${aceite ? 'Sim' : 'Não'}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>Enviado em: ${new Date().toLocaleString('pt-BR')}</p>
          <p>Este email foi enviado através do formulário de solicitação de catálogo do site Masster Plásticos.</p>
        </div>
      </div>
    `;

    // Enviar email para a empresa
    const emailDestino = process.env.CATALOGO_EMAIL || process.env.CONTATO_EMAIL || 'gerentecomercial@massterplasticos.com.br';
    
    if (isEmailConfigured()) {
      const emailResult = await sendEmail({
        to: emailDestino,
        subject: 'Nova solicitação de catálogo',
        html: emailHtml,
      });

      if (!emailResult.success) {
        console.error('Erro ao enviar email:', emailResult.error);
      }
    } else {
      console.log('Email não configurado. Nova solicitação de catálogo:', {
        nome,
        email,
        empresa: empresa || 'Não informado',
        telefone,
        cargo: cargo || 'Não informado',
        interesse: interesse || 'Não informado',
        aceite,
        data: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      { message: 'Solicitação recebida com sucesso! O catálogo será enviado em breve.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar solicitação de catálogo:', error);
    return NextResponse.json(
      { error: 'Erro ao processar solicitação. Tente novamente.' },
      { status: 500 }
    );
  }
}

