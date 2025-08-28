import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    const { name, email, phone, checkin, checkout, guests, message } = data

    // Validação básica
    if (!name || !email || !checkin || !checkout || !guests) {
      return NextResponse.json(
        { error: 'Campos obrigatórios em falta' },
        { status: 400 }
      )
    }

    // Formatação das datas
    const checkinDate = new Date(checkin).toLocaleDateString('pt-PT')
    const checkoutDate = new Date(checkout).toLocaleDateString('pt-PT')

    // Template do email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0ea5e9; margin: 0; font-size: 28px;">🏖️ Nova Reserva</h1>
            <p style="color: #64748b; margin: 10px 0 0 0;">Refúgio no Mar - Armação de Pêra</p>
          </div>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">📋 Dados da Reserva</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Nome:</td>
                <td style="padding: 8px 0; color: #64748b;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email:</td>
                <td style="padding: 8px 0; color: #64748b;">${email}</td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Telefone:</td>
                <td style="padding: 8px 0; color: #64748b;">${phone}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Check-in:</td>
                <td style="padding: 8px 0; color: #64748b;">${checkinDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Check-out:</td>
                <td style="padding: 8px 0; color: #64748b;">${checkoutDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Hóspedes:</td>
                <td style="padding: 8px 0; color: #64748b;">${guests}</td>
              </tr>
            </table>
          </div>
          
          ${message ? `
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">💬 Mensagem do Cliente</h3>
            <p style="color: #b45309; margin: 0; line-height: 1.5;">${message}</p>
          </div>
          ` : ''}
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; text-align: center;">
            <p style="color: #0277bd; margin: 0; font-weight: bold;">📞 Responda rapidamente para confirmar a disponibilidade!</p>
            <p style="color: #0288d1; margin: 10px 0 0 0; font-size: 14px;">Este email foi enviado automaticamente através do website</p>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>Refúgio no Mar | Rua da Sardinha, 3 | 8365-101 Armação de Pêra</p>
          <p>RNAL nº 163178/AL | refugionomar2025@gmail.com | +41 76 583 0782</p>
        </div>
      </div>
    `

    // Template do email de confirmação para o utilizador
    const confirmationEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9fafb; padding: 20px;">
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #0ea5e9; margin: 0; font-size: 28px;">🏖️ Reserva Recebida!</h1>
            <p style="color: #64748b; margin: 10px 0 0 0;">Obrigado pelo seu interesse no Refúgio no Mar</p>
          </div>
          
          <div style="background: #dcfce7; padding: 20px; border-radius: 8px; margin-bottom: 20px; text-align: center;">
            <p style="color: #15803d; margin: 0; font-weight: bold; font-size: 18px;">✅ Pedido de reserva enviado com sucesso!</p>
          </div>
          
          <p style="color: #374151; margin-bottom: 20px; line-height: 1.6;">
            Olá <strong>${name}</strong>,
          </p>
          
          <p style="color: #374151; margin-bottom: 20px; line-height: 1.6;">
            Recebemos o seu pedido de reserva para o <strong>Refúgio no Mar</strong> em Armação de Pêra. 
            Estamos muito entusiasmados por o receber nas nossas instalações!
          </p>
          
          <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #334155; margin: 0 0 15px 0; font-size: 18px;">📋 Resumo da sua reserva</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Check-in:</td>
                <td style="padding: 8px 0; color: #64748b;">${checkinDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Check-out:</td>
                <td style="padding: 8px 0; color: #64748b;">${checkoutDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Hóspedes:</td>
                <td style="padding: 8px 0; color: #64748b;">${guests}</td>
              </tr>
            </table>
          </div>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #92400e; margin: 0 0 10px 0; font-size: 16px;">⚡ Próximos passos</h3>
            <ul style="color: #b45309; margin: 0; padding-left: 20px; line-height: 1.6;">
              <li><strong>Resposta rápida:</strong> Entraremos em contacto consigo em menos de 2 horas</li>
              <li><strong>Confirmação:</strong> Verificaremos a disponibilidade das datas</li>
              <li><strong>Detalhes:</strong> Enviaremos informações sobre check-in e pagamento</li>
            </ul>
          </div>
          
          <div style="background: #e0f2fe; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 20px;">
            <p style="color: #0277bd; margin: 0 0 10px 0; font-weight: bold;">📞 Contactos diretos</p>
            <p style="color: #0288d1; margin: 0;">
              📧 refugionomar2025@gmail.com<br>
              📱 WhatsApp: +41 76 583 0782
            </p>
          </div>
          
          <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin-bottom: 0;">
            <strong>Dica:</strong> Adicione o nosso contacto ao WhatsApp para receber atualizações rápidas sobre a sua reserva.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; color: #9ca3af; font-size: 12px;">
          <p>Refúgio no Mar | Rua da Sardinha, 3 | 8365-101 Armação de Pêra</p>
          <p>RNAL nº 163178/AL | Vista mar e piscina a 4 minutos da praia</p>
        </div>
      </div>
    `

    // 1. Enviar email para o proprietário
    const { data: emailData, error } = await resend.emails.send({
      from: 'Refúgio no Mar <noreply@refugionomar.com>',
      to: ['refugionomar2025@gmail.com'],
      subject: `🏖️ Nova Reserva - ${name} (${checkinDate} a ${checkoutDate})`,
      html: emailHtml,
      replyTo: email, // Para poder responder diretamente ao cliente
    })

    if (error) {
      console.error('Erro ao enviar email para proprietário:', error)
      return NextResponse.json(
        { error: 'Erro ao enviar email' },
        { status: 500 }
      )
    }

    // 2. Enviar email de confirmação para o utilizador
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: 'Refúgio no Mar <noreply@refugionomar.com>',
      to: [email],
      subject: `🏖️ Reserva Recebida - Refúgio no Mar (${checkinDate} a ${checkoutDate})`,
      html: confirmationEmailHtml,
      replyTo: 'refugionomar2025@gmail.com', // Para o utilizador poder responder ao proprietário
    })

    if (confirmationError) {
      console.error('Erro ao enviar email de confirmação:', confirmationError)
      // Não falhar se o email de confirmação falhar, mas registar o erro
    }

    return NextResponse.json({
      success: true,
      message: 'Reserva enviada com sucesso!',
      emailId: emailData?.id
    })

  } catch (error) {
    console.error('Erro na API:', error)
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}