# 📧 Configuração do Sistema de Email (Resend)

## 🚀 Passos para Ativar o Envio de Emails

### 1. Criar Conta no Resend
1. Vá para [resend.com](https://resend.com)
2. Crie uma conta gratuita
3. Verifique o seu email

### 2. Obter API Key
1. No dashboard do Resend, vá para **API Keys**
2. Clique em **Create API Key**
3. Dê um nome (ex: "RefugioMar")
4. Copie a chave gerada (começa com `re_`)

### 3. Configurar Domínio (Opcional mas Recomendado)
1. No Resend, vá para **Domains**
2. Adicione o domínio `refugionomar.com`
3. Configure os registros DNS conforme instruções
4. Aguarde verificação

### 4. Atualizar Configuração Local
1. Abra o arquivo `.env.local` na pasta do projeto
2. Substitua `re_123456789_SUBSTITUA_PELA_SUA_CHAVE_REAL` pela sua chave real do Resend
3. Salve o arquivo

```env
RESEND_API_KEY=re_SuaChaveRealAqui
```

### 5. Testar o Sistema
1. Acesse o website em `http://localhost:3001`
2. Vá para a secção de reservas
3. Preencha e envie um pedido de teste
4. Verifique se recebeu o email em `refugionomar2025@gmail.com`

## ✅ Funcionalidades Implementadas

- **Formulário de Reservas**: Envia dados diretamente para o email
- **Email HTML Formatado**: Template profissional com dados da reserva
- **Validação de Dados**: Campos obrigatórios verificados
- **Mensagens de Erro/Sucesso**: Feedback visual ao utilizador
- **Multi-idioma**: Suporte para PT, EN, ES, FR, DE

## 🛡️ Segurança

- **API Key Protegida**: Nunca é enviada para o cliente
- **Validação Server-side**: Todos os dados são verificados no servidor
- **Rate Limiting**: Resend tem proteção contra spam automática

## 💰 Custos

- **Plano Gratuito**: 3,000 emails/mês
- **Plano Pago**: $20/mês para 50,000 emails
- **Sem domínio próprio**: Emails enviados de `onboarding@resend.dev`
- **Com domínio próprio**: Emails enviados de `noreply@refugionomar.com`

## 🔧 Resolução de Problemas

### Email não chega
1. Verifique se a API key está correta
2. Verifique a pasta de spam
3. Confirme se o email de destino existe

### Erro "API key inválida"
1. Gere uma nova API key no Resend
2. Atualize o arquivo `.env.local`
3. Reinicie o servidor de desenvolvimento

### Erro "Domain not verified"
1. Complete a verificação do domínio no Resend
2. Ou use o domínio padrão do Resend (emails de `onboarding@resend.dev`)

## 📞 Suporte

- **Resend Docs**: [resend.com/docs](https://resend.com/docs)
- **Status**: Formulário está totalmente funcional e pronto para produção