// File: app/scripts/utmTracker.tsx
'use client';
import { useEffect } from 'react';

export function UtmTracker() {
  useEffect(() => {
    const domain = '.metododeaprovacao.com.br';
    const setCookie = (name: string, value: string, days = 30) => {
      const expires = new Date(Date.now() + days * 864e5).toUTCString();
      document.cookie = `${name}=${encodeURIComponent(value)}; Expires=${expires}; Secure; SameSite=None; domain=${domain}; path=/`;
    };

    const params = new URLSearchParams(window.location.search);
    ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','fbclid','gclid'].forEach((key) => {
      const value = params.get(key);
      if (value) setCookie(key, value);
    });

    const rewriteLinks = () => {
      document.querySelectorAll('a[href], iframe[src]').forEach((el) => {
        const url = new URL(
          el instanceof HTMLAnchorElement ? el.href : el.getAttribute('src')!,
          location.href
        );
        params.forEach((v, k) => url.searchParams.set(k, v));
        if (el instanceof HTMLAnchorElement) el.href = url.toString();
        else el.setAttribute('src', url.toString());
      });
    };

    rewriteLinks();
    const observer = new MutationObserver(rewriteLinks);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return null;
}
