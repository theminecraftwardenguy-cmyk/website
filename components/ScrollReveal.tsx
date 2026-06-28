'use client'
import { useEffect } from 'react'

export default function ScrollReveal() {
  useEffect(() => {
    // Reveal observer for [data-reveal] and [data-reveal-stagger]
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    // Divider draw-in observer
    const dividerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('draw')
            dividerObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.5 }
    )

    const attach = () => {
      document.querySelectorAll('[data-reveal], [data-reveal-stagger]').forEach((el) => {
        revealObserver.observe(el)
      })
      document.querySelectorAll('hr.divider').forEach((el) => {
        dividerObserver.observe(el)
      })
    }

    attach()
    // Re-attach on route changes (Next.js soft nav)
    const mo = new MutationObserver(attach)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      revealObserver.disconnect()
      dividerObserver.disconnect()
      mo.disconnect()
    }
  }, [])

  return null
}
