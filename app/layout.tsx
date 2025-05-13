import React from 'react';
import MarketingScripts from '@/scripts/marketing';
import UtmTrackerInline from '@/scripts/utmTrackerInline';
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

        {/* 2) UTM Tracker Inline */}
        <UtmTrackerInline />

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
