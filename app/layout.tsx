import React from 'react';
import { MarketingScripts } from '@/scripts/marketing';
import { UtmTrackerInline } from '@/scripts/utmTrackerInline';

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

        {/* 1) GTM */}
        <MarketingScripts />

        {/* 2) UTM inline (ativar apenas este, sem Mautic ainda) */}
        <UtmTrackerInline />
      </body>
    </html>
  );
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
