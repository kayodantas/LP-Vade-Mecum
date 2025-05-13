# Vade Mecum Grifado - Landing Page

Este é um projeto Next.js que implementa uma landing page sofisticada para o produto "Vade Mecum Grifado", um material de estudo para concursos jurídicos.

## Configuração

### URL de Checkout

Para alterar a URL de checkout do Hotmart, edite o arquivo `lib/constants.ts`:

\`\`\`typescript
export const CHECKOUT_URL = "https://pay.hotmart.com/X62593391K?off=ih4y93v4&checkoutMode=10&ref=M99355689C";
\`\`\`

### Scripts de Marketing

Os scripts de marketing, incluindo Google Tag Manager e manipulação de UTMs, estão localizados em `scripts/marketing.tsx`. Para atualizar o ID do GTM, modifique a constante:

\`\`\`typescript
export const GTM_ID = 'GTM-NZS6993V';
\`\`\`

## Atualização da Copy

Para atualizar o texto da página, você deve modificar diretamente os componentes em `/components`. Cada seção da página está em seu próprio arquivo:

- `Hero.tsx` - Headline e subheadline principal
- `PainPoints.tsx` - Pontos de dor dos concurseiros
- `Method.tsx` - Método de estudo e vídeo explicativo
- `WhatYouGet.tsx` - O que o cliente recebe ao comprar
- `Testimonials.tsx` - Depoimentos em vídeo e texto
- `Offer.tsx` - Oferta, preço e garantia
- `FAQ.tsx` - Perguntas frequentes
- `FinalCTA.tsx` - Chamada final para ação

## Imagens

Substitua as imagens de placeholder em `/public/images/` pelos arquivos reais:

- `livro.png` - Mockup do Vade Mecum para a seção Hero
- `1.jpg`, `2.jpg` - Detalhes internos do livro
- `constitucional-preview.png` - Livro de Direito Constitucional
- `stf.png` - E-book de súmulas
- `gerson.jpg` - Foto do autor
- `gerson.png` - Autor estudando

## Tecnologias Utilizadas

- Next.js 13 (App Router)
- Tailwind CSS
- Framer Motion
- React Countup
- Lucide React Icons

## Desenvolvimento

\`\`\`bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Iniciar servidor de produção
npm start
\`\`\`

## Segurança

A página implementa as seguintes medidas de segurança:

- Content Security Policy (CSP)
- Strict Transport Security
- URL de checkout hardcoded para evitar manipulação

## Performance

- Preload de scripts do PandaVideo
- Imagens otimizadas com Next.js Image
- Lazy loading para conteúdo abaixo da dobra
