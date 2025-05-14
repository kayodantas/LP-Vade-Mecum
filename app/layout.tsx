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
        {/* Preconnect & Prefetch for PandaVideo domain */}
        <link rel="preconnect" href="https://player.pandavideo.com.br" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://player.pandavideo.com.br" />

        {/* 1. Preload of PandaVideo script & styles */}
        <link rel="preload" href="https://player.pandavideo.com.br/api.v2.js" as="script" />
        <link rel="preload" href="https://player.pandavideo.com.br/styles.css" as="style" />

        {/* 2. Early load PandaVideo script for faster initialization */}
        <Script src="https://player.pandavideo.com.br/api.v2.js" strategy="beforeInteractive" />

        {/* 3. Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content={`
            default-src 'self';
            script-src 'self' 'unsafe-inline'
              https://www.googletagmanager.com
              https://player.pandavideo.com.br
              https://cdn.stape.io
              https://connect.facebook.net
              https://email.metododeaprovacao.com.br
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
              https://*.metododeaprovacao.com.br
              https://cursos.metododeaprovacao.com.br;
            frame-src 'self' https://player.pandavideo.com.br https://*.pandavideo.com.br;
            child-src 'self' https://player.pandavideo.com.br https://*.pandavideo.com.br;
          `}
        />

        {/* 4. GTM + dataLayer init */}
        <MarketingScripts />
      </head>
      <body className="min-h-screen bg-white font-sans antialiased overflow-x-hidden">
        {/* 5. Prevent horizontal scroll */}
        <PreventHorizontalScroll />

        {/* 6. UTM inline + append UTMs to links */}
        <UtmTrackerInline />
        <UtmTracker />

        {/* 7. Mautic tracking */}
        <MauticScript />

        {/* 8. Inject xcod into checkout links */}
        <InjectXcod />

        {/* 9. Main content */}
        {children}
      </body>
    </html>
  )
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
