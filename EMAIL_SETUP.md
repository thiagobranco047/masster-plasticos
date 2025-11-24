# Configuração de Email com Nodemailer

Este projeto usa Nodemailer para enviar emails através dos formulários do site.

## Variáveis de Ambiente Necessárias

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# Configurações do servidor SMTP
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=seu-email@gmail.com
SMTP_PASS=sua-senha-de-app

# Emails de destino (opcional - usa SMTP_USER como padrão se não definido)
CONTATO_EMAIL=gerentecomercial@massterplasticos.com.br
NEWSLETTER_EMAIL=gerentecomercial@massterplasticos.com.br
CATALOGO_EMAIL=gerentecomercial@massterplasticos.com.br
MASSTER_DECOR_EMAIL=gerentecomercial@massterplasticos.com.br
```

## Configuração para Gmail

1. Ative a verificação em duas etapas na sua conta Google
2. Acesse: https://myaccount.google.com/apppasswords
3. Gere uma "Senha de App" para "Email"
4. Use essa senha no campo `SMTP_PASS`

## Configuração para Outros Provedores

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
```

### Servidor SMTP Personalizado
```env
SMTP_HOST=seu-servidor-smtp.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=usuario@seudominio.com
SMTP_PASS=sua-senha
```

## Testando a Configuração

Após configurar as variáveis de ambiente, reinicie o servidor de desenvolvimento:

```bash
npm run dev
```

Os emails serão enviados automaticamente quando os formulários forem preenchidos. Se as variáveis não estiverem configuradas, os dados serão apenas logados no console.

