# 🏖️ Refúgio no Mar - Armação de Pêra

Site de reservas diretas para apartamento de férias no Algarve, desenvolvido com Next.js 14 e TypeScript.

## ✨ Funcionalidades

- 🎨 Design responsivo com Tailwind CSS e shadcn/ui
- ⚡ Next.js 14 com App Router
- 🎭 Animações suaves com Framer Motion
- 📝 Formulário de reservas com validação (React Hook Form + Zod)
- 🔍 SEO otimizado com meta tags e JSON-LD
- 📱 Integração WhatsApp para contacto direto
- 🗺️ Mapa Google Maps integrado com morada exata
- 🖼️ Galeria interativa com lightbox e filtros por categoria
- 📸 Imagens reais do apartamento (sala5.jpeg como principal)
- ♿ Acessibilidade otimizada
- 📊 Preparado para Google Analytics

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Configurar variáveis de ambiente:**
   ```bash
   cp .env.local.example .env.local
   ```
   Edite o arquivo `.env.local` com suas configurações.

3. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Build de produção:**
   ```bash
   npm run build
   npm start
   ```

## 🛠️ Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS + shadcn/ui
- **Animações:** Framer Motion
- **Formulários:** React Hook Form + Zod
- **SEO:** next-seo + JSON-LD
- **Imagens:** next/image com otimização

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── head.tsx
├── components/
│   ├── ui/           # Componentes shadcn/ui
│   ├── HeroSection.tsx
│   ├── AmenitiesSection.tsx
│   ├── DescriptionSection.tsx
│   ├── GallerySection.tsx
│   ├── ProximitySection.tsx
│   ├── DetailedAmenitiesSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── BookingSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
└── lib/
    ├── utils.ts
    └── validations.ts
```

## 🚀 Deploy

### Vercel (Recomendado)
1. Conecte seu repositório no Vercel
2. Configure as variáveis de ambiente
3. Deploy automático

### Outras Plataformas
O site é compatível com Netlify, Railway, e outros provedores que suportam Next.js.

## 📞 Contacto

- **Email:** refugionomar2025@gmail.com
- **WhatsApp:** +41 76 583 0782
- **Localização:** Armação de Pêra, Algarve, Portugal

## 📄 Licença

Este projeto é propriedade do Refúgio no Mar. Todos os direitos reservados.

---

Desenvolvido com ❤️ em Portugal