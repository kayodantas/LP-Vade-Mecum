// File: app/scripts/utmTrackerInline.tsx
'use client';
import { useEffect } from 'react';

export function UtmTrackerInline() {
  useEffect(() => {
    const domain = '.metododeaprovacao.com.br';
    const params = new URLSearchParams(location.search);
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ref','bid'].forEach((key) => {
      const value = params.get(key);
      if (value) {
        const d = new Date();
        d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
        document.cookie = `${key}=${encodeURIComponent(value)}; Expires=${d.toUTCString()}; Secure; SameSite=None; domain=${domain}; path=/`;
      }
    });
  }, []);

  return null;
}
