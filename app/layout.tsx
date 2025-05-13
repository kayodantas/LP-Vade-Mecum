import type React from "react";
import type { Metadata } from "next";
import { Inter, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { MarketingScripts } from "@/scripts/marketing";
import { UtmTrackerInline } from "@/scripts/utmTrackerInline";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

// Configuração do viewport separada (corrige os avisos do build)
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: "no",
};

export const metadata: Metadata = {
  title: "Vade Mecum Grifado | Método de Aprovação",
  description:
    "Ultrapasse a barreira dos 70% de acertos nas provas de legislação. 71% das questões copiam a lei literal – aprenda onde as bancas grifam.",
  openGraph: {
    title: "Vade Mecum Grifado | Método de Aprovação",
    description:
      "Ultrapasse a barreira dos 70% de acertos nas provas de legislação. 71% das questões copiam a lei literal – aprenda onde as bancas grifam.",
    url: "https://cursos.metododeaprovacao.com.br",
    siteName: "Método de Aprovação",
    images: [
      {
        url: "https://cursos.metododeaprovacao.com.br/images/vade-mecum-cover.png",
        width: 1200,
        height: 630,
        alt: "Vade Mecum Grifado e Anotado pelas Bancas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vade Mecum Grifado | Método de Aprovação",
    description:
      "Ultrapasse a barreira dos 70% de acertos nas provas de legislação. 71% das questões copiam a lei literal – aprenda onde as bancas grifam.",
    images: ["https://cursos.metododeaprovacao.com.br/images/vade-mecum-cover.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/ico" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/ico" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  generator: "v0.dev",
};

// Componente para o script do Mautic
function MauticScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
    (function(w,d,t,u,n,a,m){w['MauticTrackingObject']=n;
        w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)},a=d.createElement(t),
        m=d.getElementsByTagName(t)[0];a.async=1;a.src=u;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://email.metododeaprovacao.com.br/mtc.js','mt');

    mt('send', 'pageview');
    `,
      }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${dmSerifDisplay.variable}`}
    >
      <Head>
        {/* Content Security Policy para GTM, Stape, PandaVideo, Facebook, Mautic e seu domínio */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';

            /* Scripts: GTM, PandaVideo, Stape e Facebook */
            script-src
              'self'
              'unsafe-inline'
              https://www.googletagmanager.com
              https://player.pandavideo.com.br
              https://cdn.stape.io
              https://connect.facebook.net;

            /* Styles: inline (next/font) + externos */
            style-src
              'self'
              'unsafe-inline'
              https://player.pandavideo.com.br;

            /* Fontes Google (Next.js Fonts) */
            font-src
              'self'
              https://fonts.googleapis.com
              https://fonts.gstatic.com;

            /* Conexões (fetch, XHR): Stape, GTM, GA4 e seus domínios/subdomínios */
            connect-src
              'self'
              https://cdn.stape.io
              https://www.googletagmanager.com
              https://www.google-analytics.com
              https://*.metododeaprovacao.com.br
              https://data.metododeaprovacao.com.br;

            /* Imagens/pixels: self, data, blob, YT, BlobStorage, Vercel, GTM, e seu domínio */
            img-src
              'self'
              data:
              blob:
              https://i.ytimg.com
              https://v0.blob.com
              https://*.vercel-storage.com
              https://*.blob.vercel-storage.com
              https://www.googletagmanager.com
              https://*.metododeaprovacao.com.br;
          `}
        />
        <meta
          httpEquiv="Strict-Transport-Security"
          content="max-age=31536000; includeSubDomains; preload"
        />
        <link
          rel="preload"
          href="https://player.pandavideo.com.br/api.v2.js"
          as="script"
        />
        <link
          rel="preload"
          href="https://player.pandavideo.com.br/styles.css"
          as="style"
        />
        <MarketingScripts />
      </Head>

      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        <div className="overflow-x-hidden w-full">{children}</div>
        <UtmTrackerInline />
        <MauticScript />
      </body>
    </html>
  );
}
