import React, { useState } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#hero', label: 'Início' },
  { href: '#story', label: 'História' },
  { href: '#flavors', label: 'Sabores' },
  { href: '#menu', label: 'Cardápio' },
  { href: '#social', label: 'Experiências' },
  { href: '#locations', label: 'Localizações' },
  { href: '#cta', label: 'Vamos Lá!' }
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full bg-white/80 backdrop-blur border border-sage-200 shadow-sm">
          <div className="flex items-center justify-between px-4 py-2">
            <a href="#hero" className="flex items-center gap-3">
              <img src="/logo-transparente.svg" alt="Soft Haus" className="h-10 w-auto" />
              <span className="hidden sm:block font-semibold text-sage-800">Soft Haus</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sage-700 hover:text-coral-500 font-medium transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:flex items-center gap-2">
              <a href="https://www.instagram.com/softhausbr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-full hover:opacity-80">
                <img src="/icones/instagram-ícone-3d.svg" alt="Instagram" className="h-10 w-10" />
              </a>
              <a href="https://www.tiktok.com/@softhausbr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-full hover:opacity-80">
                <img src="/icones/tiktok-ícone-3d.svg" alt="TikTok" className="h-10 w-10" />
              </a>
              <a href="https://www.ifood.com.br/delivery/fortaleza-ce/soft-haus---gelatos-e-cookies-aldeota/519f10f8-ea1f-4847-a5ef-f99c27306a55?utm_medium=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 w-12 rounded-full hover:opacity-80">
                <img src="/icones/ifood-ícone-3d.svg" alt="iFood" className="h-10 w-10" />
              </a>
            </div>

            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center rounded-full h-10 w-10 border border-sage-300 text-sage-700 hover:bg-sage-100"
            >
              <span className="text-xl">☰</span>
            </button>
          </div>

          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              transition={{ duration: 0.25 }}
              className="md:hidden px-4 pb-4"
            >
              <div className="grid grid-cols-2 gap-3">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-center bg-sage-100 text-sage-800 hover:bg-sage-200 font-medium"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </div>
      </div>
    </header>
  )
}