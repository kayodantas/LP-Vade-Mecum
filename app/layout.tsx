import React from 'react';
import { MarketingScripts } from '@/scripts/marketing';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head />
      <body>
        {children}
        <MarketingScripts />
      </body>
    </html>
  );
}


import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
