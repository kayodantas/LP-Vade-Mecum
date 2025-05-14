// File: app/scripts/injectXcod.tsx
'use client'

import { useEffect } from 'react'

export default function InjectXcod() {
  useEffect(() => {
    const COOKIE_NAME = 'user_id_mh'
    const TARGET_DOMAINS = ['payment.hotmart.com', 'pay.hotmart.com']

    const getCookie = (name: string): string | null => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
      return match ? decodeURIComponent(match[2]) : null
    }

    const injectXcodToLink = (link: HTMLAnchorElement) => {
      try {
        const url = new URL(link.href)
        const xcod = getCookie(COOKIE_NAME)
        if (!xcod) return
        if (TARGET_DOMAINS.some(domain => url.hostname.includes(domain))) {
          if (url.searchParams.get('xcod') !== xcod) {
            url.searchParams.set('xcod', xcod)
            link.href = url.toString()
          }
        }
      } catch {
        // ignore invalid URLs
      }
    }

    // Initial pass
    const initialInject = () => {
      document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach(injectXcodToLink)
    }

    // Observe added links
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node instanceof HTMLAnchorElement) {
            injectXcodToLink(node)
          } else if (node instanceof HTMLElement) {
            node.querySelectorAll('a[href]').forEach(injectXcodToLink)
          }
        })
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    // Fallback interval until cookie is set
    const intervalId = setInterval(() => {
      if (getCookie(COOKIE_NAME)) {
        initialInject()
        clearInterval(intervalId)
      }
    }, 500)

    // Intercept clicks to ensure injection
    const onClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest('a[href]') as HTMLAnchorElement
      if (anchor) injectXcodToLink(anchor)
    }
    document.body.addEventListener('click', onClick, true)

    // Run initial
    initialInject()

    return () => {
      observer.disconnect()
      clearInterval(intervalId)
      document.body.removeEventListener('click', onClick, true)
    }
  }, [])

  return null
}
