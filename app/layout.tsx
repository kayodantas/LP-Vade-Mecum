import React from 'react';
import MarketingScripts from '@/scripts/marketing';
import UtmTracker from '@/scripts/utmTracker';
import MauticScript from '@/scripts/mauticScript';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        {children}

        {/* 1) Google Tag Manager */}
        <MarketingScripts />

        {/* 2) UTM Tracker: appends UTM params to all links (including checkout) */}
        <UtmTracker />

        {/* 3) Mautic Tracking Script */}
        <MauticScript />
      </body>
    </html>
  );
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
