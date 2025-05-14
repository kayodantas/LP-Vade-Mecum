import React from 'react'
import { Inter, DM_Serif_Display } from 'next/font/google'
import Script from 'next/script'

import MarketingScripts from '@/scripts/marketing'
import UtmTracker from '@/scripts/utmTracker'
import MauticScript from '@/scripts/mauticScript'
import PreventHorizontalScroll from '@/scripts/preventHorizontalScroll'
import UtmTrackerInline from '@/scripts/utmTrackerInline'
import InjectXcod from '@/scripts/injectXcod'

// Next.js Fonts
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const dmSerif = DM_Serif_Display({ weight: '400', subsets: ['latin'], display: 'swap', variable: '--font-serif' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${dmSerif.variable}`}>
      <head>
        {/* 1. Preload do PandaVideo */}
        <link rel="preload" href="https://player.pandavideo.com.br/api.v2.js" as="script" />
        <link rel="preload" href="https://player.pandavideo.com.br/styles.css" as="style" />

        {/* 2. Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' 'unsafe-inline'
              https://www.googletagmanager.com
              https://player.pandavideo.com.br
              https://cdn.stape.io
              https://connect.facebook.net
              blob:;
            style-src 'self' 'unsafe-inline' https://player.pandavideo.com.br;
            font-src 'self' https://fonts.googleapis.com https://fonts.gstatic.com;
            connect-src 'self'
              https://cdn.stape.io
              https://www.googletagmanager.com
              https://www.google-analytics.com
              https://*.metododeaprovacao.com.br
              https://data.metododeaprovacao.com.br
              https://email.metododeaprovacao.com.br;
            img-src 'self' data: blob:
              https://i.ytimg.com
              https://*.vercel-storage.com
              https://www.googletagmanager.com
              https://*.metododeaprovacao.com.br;
            frame-src 'self' https://player.pandavideo.com.br https://*.pandavideo.com.br;
            child-src 'self' https://player.pandavideo.com.br https://*.pandavideo.com.br;
          `}
        />

        {/* 3. GTM + dataLayer init */}
        <MarketingScripts />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {/* 4. Previne scroll horizontal */}
        <PreventHorizontalScroll />

        {/* 5. UTM inline + UTMs em links */}
        <UtmTrackerInline />
        <UtmTracker />

        {/* 6. Mautic */}
        <MauticScript />

        {/* 7. Injeta xcod em todos os links de checkout */}
        <InjectXcod />

        {/* 8. Conteúdo principal */}
        {children}
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
