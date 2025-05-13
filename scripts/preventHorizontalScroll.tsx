// File: app/scripts/preventHorizontalScroll.tsx
'use client';
import { useEffect } from 'react';
import throttle from 'lodash.throttle';

export function PreventHorizontalScroll() {
  useEffect(() => {
    const handler = throttle(() => {
      document.documentElement.style.width = `${window.innerWidth}px`;
    }, 100);

    window.addEventListener('resize', handler, { passive: true });
    handler();

    return () => window.removeEventListener('resize', handler);
  }, []);

  return null;
}
