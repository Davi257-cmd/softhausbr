import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { MapPin, Smartphone, CreditCard, Wallet } from 'lucide-react'
import * as Dialog from '@radix-ui/react-dialog'

type MenuItem = { name: string; price?: string; description?: string }

type MenuGroup = { title: string; items: MenuItem[] }

const groups: MenuGroup[] = [
  {
    title: 'Sugestões do Chefe (Base Água)',
    items: [
      { name: 'Fragola Premium (Morango italiano)', price: 'R$ 24,00', description: 'Refrescante e vibrante, casca black crocante, morango liofilizado, raspas de chocolate branco, calda de amarena' },
      { name: 'Tropical Premium (Manga com maracujá)', price: 'R$ 24,00', description: 'Casquinha tradicional crocante, manga e framboesa liofilizadas, calda de maracujá e toque de manjericão' },
    ]
  },
  {
    title: 'Sugestões do Chefe (Base Leite)',
    items: [
      { name: 'Torta de pistache', price: 'R$ 39,90', description: 'Cascão verde, calda crocante de pistache, gelato de pistache, farofa salgada, merengue suíço maçaricado, pétalas de begônia, pistache com casca' },
      { name: 'Torta de limão', price: 'R$ 25,00', description: 'Casca tradicional, mousse de limão, gelato fio di latte, farofa de lotus, merengue suíço maçaricado, biscoito belga de limão e limão desidratado' },
      { name: 'Torta de maracujá', price: 'R$ 28,00', description: 'Cascão tradicional, calda de fio di latte, calda de maracujá, farofa de biscoito Lotus, merengue suíço maçaricado e manjericão' },
      { name: 'Bom bom', price: '—', description: 'Gelato Fio di Latte em cascão black, mini Oreo, praliné de castanhas de caju, calda de Nutella' },
      { name: 'Crocante', price: 'R$ 20,00 • R$ 27,00', description: 'Gelato de Chocolate Belga em cascão black, castanhas e amendoins caramelizados, pistache, biscoito Lotus, caramelo salgado' },
      { name: 'Max Ninho', price: 'R$ 24,00', description: 'Gelato Fio di Latte em cascão verde, marshmallow maçaricado, calda de caramelo, folha de trevo' },
      { name: 'Floresta negra', price: 'R$ 28,00', description: 'Fio di Latte com amarena, blossoms do leite, casquinha black e calda de amarena' },
      { name: 'Algodão doce', price: 'R$ 22,00', description: 'Fio di Latte em casquinha red, M&M’s, pipoca doce, marshmallow colorido, caldas lilás e verde' },
      { name: 'Banoffee', price: 'R$ 20,00', description: 'Fio di Latte em casquinha crocante, creme de banana, caramelo salgado, farofa de Lotus, chantilly, brownie' },
      { name: 'Brigadeiro', price: 'R$ 20,00', description: 'Chocolate belga em casca black, mix de confeitos, calda de chocolate amargo' },
    ]
  },
  {
    title: 'Softs Simples (Base Água)',
    items: [
      { name: 'Tropical especial', price: 'R$ 14,90', description: 'Manga com maracujá na casquinha crocante' },
      { name: 'Fragola especial', price: 'R$ 14,90', description: 'Morango artesanal em casca de cacau black' },
      { name: 'Tropical + Fragola', price: 'R$ 16,90', description: 'Manga com maracujá + morango em casca black' },
    ]
  },
  {
    title: 'Softs Simples (Base Leite)',
    items: [
      { name: 'Chocolate belga', price: 'R$ 14,90' },
      { name: 'Fio di latte (notas de Ninho)', price: 'R$ 14,90' },
      { name: 'Pistache', price: 'R$ 20,00' },
      { name: 'Pistache + Fio di Latte', price: 'R$ 20,00' },
    ]
  },
  {
    title: 'Monte o Seu',
    items: [
      { name: 'Base Chocolate', price: 'R$ 16,00' },
      { name: 'Base Fio di Latte', price: 'R$ 16,00' },
      { name: 'Base Manga com Maracujá', price: 'R$ 16,00' },
      { name: 'Base Morango', price: 'R$ 16,00' },
      { name: 'Base Pistache', price: 'R$ 22,00' },
      { name: 'Pipoca Caramelizada', price: 'R$ 5,00' },
      { name: 'M&M', price: 'R$ 5,00' },
      { name: 'Marshmallow', price: 'R$ 5,00' },
      { name: 'Farofa Salgada de Amendoim', price: 'R$ 5,00' },
      { name: 'Castanha de Caju Caramelizada', price: 'R$ 5,00' },
      { name: 'Castanha de Caju Natural', price: 'R$ 5,00' },
      { name: 'Amendoim Caramelizado', price: 'R$ 5,00' },
      { name: 'Framboesa Liofilizada', price: 'R$ 5,00' },
      { name: 'Manga Liofilizada', price: 'R$ 5,00' },
      { name: 'Morango Liofilizado', price: 'R$ 5,00' },
      { name: 'Blossoms ao leite', price: 'R$ 5,00' },
      { name: 'Mix de Blossoms', price: 'R$ 5,00' },
      { name: 'Farofa de Lotus', price: 'R$ 5,00' },
      { name: 'Coco queimado ralado', price: 'R$ 5,00' },
      { name: 'Kit Kat', price: 'R$ 5,00' },
      { name: 'Twix Caramelo', price: 'R$ 5,00' },
      { name: 'Wafer', price: 'R$ 5,00' },
      { name: 'Casca de Brownie', price: 'R$ 5,00' },
      { name: 'Farofa de Pistache', price: 'R$ 8,50' },
      { name: 'Pistache Caramelizado', price: 'R$ 7,00' },
      { name: 'Recheio casca grande', price: 'R$ 7,50' },
    ]
  },
  {
    title: 'Cookies e Brownie',
    items: [
      { name: 'Cookie tradicional', price: 'R$ 12,90', description: 'Chocolate amargo, caramelo, crocante de Lotus' },
      { name: 'Cookie de chocolate branco', price: 'R$ 12,90', description: 'Chocolate branco, gotas e chocolate ruby' },
      { name: 'Cookie de pistache recheado', price: 'R$ 22,90', description: 'Recheado com brigadeiro de pistache e farofa salgada' },
      { name: 'Cookie pedaços de chocolate', price: 'R$ 12,90' },
      { name: 'Meio amargo', price: 'R$ 12,90', description: 'Chocolate meio amargo em pedaços' },
      { name: 'Brownie tradicional', price: 'R$ 12,90' },
      { name: 'Lemon Curd', price: 'R$ 12,90', description: 'Casquinha de torta, merengue suíço, limão desidratado, manjericão' },
    ]
  },
  {
    title: 'MilkShakes',
    items: [
      { name: 'Cookie', price: 'R$ 32,90', description: 'Chocolate belga, calda de avelã, cookie, chantilly' },
      { name: 'Jabuticaba', price: 'R$ 45,00', description: 'Fio di latte, variegato de jabuticaba, liofilizados, chantilly' },
      { name: 'Morango', price: 'R$ 32,90', description: 'Gelato de morango, pasta de morango, chantilly' },
      { name: 'Pistache', price: 'R$ 45,00', description: 'Gelato e calda de pistache, farofa salgada, chantilly' },
    ]
  },
  {
    title: 'Bebidas',
    items: [
      { name: 'Água com gás', price: 'R$ 6,00' },
      { name: 'Água sem gás', price: 'R$ 6,00' },
      { name: 'Coca-Cola Lata', price: 'R$ 8,00' },
      { name: 'Coca-Cola Zero Lata', price: 'R$ 8,00' },
      { name: 'Guaraná São Geraldo', price: 'R$ 6,00' },
      { name: 'Café expresso 40ml', price: 'R$ 7,50' },
      { name: 'Café expresso duplo 80ml', price: 'R$ 10,50' },
      { name: 'Café latte 230ml quente', price: 'R$ 18,50' },
      { name: 'Café latte de avelã 300ml', price: 'R$ 18,50' },
      { name: 'Café latte de caramelo 300ml', price: 'R$ 18,50' },
      { name: 'Café macchiato 67ml', price: 'R$ 12,50' },
      { name: 'Café longo 160ml', price: 'R$ 11,00' },
      { name: 'Chocolate quente 230ml', price: 'R$ 19,00' },
    ]
  },
  {
    title: 'Formas de Pagamento',
    items: [
      { name: 'Pix | Débito | Crédito | Vale Refeição' },
      { name: 'Sodexo | ALELO | Ticket | VR Refeição' },
    ]
  }
]

function MenuPopup({ open, onOpenChange, groups }: { open: boolean; onOpenChange: (v: boolean) => void; groups: MenuGroup[] }) {
  const [active, setActive] = useState(0)
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[95vw] sm:w-[90vw] max-w-5xl max-h-[85vh] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-beige-50 shadow-2xl border border-sage-200 overflow-hidden">
          <div className="flex">
            <div className="hidden sm:block w-6 bg-[repeating-linear-gradient(45deg,theme(colors.sage.300),theme(colors.sage.300)_8px,transparent_8px,transparent_16px)]" />
            <div className="flex-1 p-4 sm:p-6 md:p-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl md:text-3xl font-bold text-sage-800">Cardápio Soft Haus</h3>
                <Dialog.Close className="rounded-md px-3 py-1 bg-sage-100 text-sage-700 hover:bg-sage-200">Fechar</Dialog.Close>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {groups.map((g, i) => (
                  <button
                    key={g.title}
                    onClick={() => setActive(i)}
                    className={`px-3 py-2 rounded-full text-sm font-semibold border ${active === i ? 'bg-sage-600 text-white border-sage-600' : 'bg-white text-sage-700 border-sage-300 hover:bg-sage-50'}`}
                  >
                    {g.title}
                  </button>
                ))}
              </div>
              <div className="mt-6 max-h-[70vh] sm:max-h-[65vh] md:max-h-[60vh] overflow-auto pr-2">
                {groups[active].title.toLowerCase().includes('forma') ? (
                  <div className="space-y-6">
                    {/* Cards principais */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="rounded-xl bg-beige-100 p-5 border border-sage-200 shadow-sm flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-beige-200 flex items-center justify-center">
                          <Smartphone className="w-6 h-6 text-sage-700" />
                        </div>
                        <div>
                          <p className="text-sage-800 font-semibold">PIX</p>
                          <p className="text-sage-600 text-xs">Pagamento instantâneo</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-beige-100 p-5 border border-sage-200 shadow-sm flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-beige-200 flex items-center justify-center">
                          <CreditCard className="w-6 h-6 text-sage-700" />
                        </div>
                        <div>
                          <p className="text-sage-800 font-semibold">Débito ou Crédito</p>
                          <p className="text-sage-600 text-xs">Cartões habilitados</p>
                        </div>
                      </div>
                      <div className="rounded-xl bg-beige-100 p-5 border border-sage-200 shadow-sm flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-beige-200 flex items-center justify-center">
                          <Wallet className="w-6 h-6 text-sage-700" />
                        </div>
                        <div>
                          <p className="text-sage-800 font-semibold">Vale Refeição</p>
                          <p className="text-sage-600 text-xs">Benefícios aceitos</p>
                        </div>
                      </div>
                    </div>

                    {/* Bandeiras */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-2 rounded-full bg-white border border-sage-200 text-sage-800 font-semibold">Sodexo</span>
                      <span className="px-3 py-2 rounded-full bg-white border border-sage-200 text-sage-800 font-semibold">Alelo</span>
                      <span className="px-3 py-2 rounded-full bg-white border border-sage-200 text-sage-800 font-semibold">Ticket</span>
                      <span className="px-3 py-2 rounded-full bg-white border border-sage-200 text-sage-800 font-semibold">VR Refeição</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {groups[active].items.map((item, ii) => (
                      <div key={ii} className="rounded-lg bg-white px-4 py-3 border border-sage-200">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="font-semibold text-sage-800">{item.name}</p>
                            {item.description && (
                              <p className="text-sm text-sage-600">{item.description}</p>
                            )}
                          </div>
                          {item.price && (
                            <p className="text-sage-800 font-semibold whitespace-nowrap">{item.price}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default function MenuSection() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <section id="menu" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800">Cardápio</h2>
          <p className="text-sage-600 mt-2">Seleção exclusiva de gelatos, tortas e bebidas</p>
          <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sage-100 text-sage-800">
            <MapPin className="w-4 h-4" />
            <span className="text-sm font-medium">Nossas Seleções</span>
          </div>
        </motion.div>

        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-sage-600 text-white font-semibold hover:bg-sage-700 shadow-lg"
          >
            Abrir Cardápio
          </button>
        </div>

        <MenuPopup open={modalOpen} onOpenChange={setModalOpen} groups={groups} />

        

        <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-4">
          <a href="https://www.ifood.com.br/delivery/fortaleza-ce/soft-haus---gelatos-e-cookies-aldeota/519f10f8-ea1f-4847-a5ef-f99c27306a55?utm_medium=share" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-coral-500 text-white font-semibold hover:bg-coral-600">
            <img src="/icones/ifood-ícone-normal.svg" alt="iFood" className="h-8 w-8" />
            iFood
          </a>
          <a href="https://www.tiktok.com/@softhausbr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sage-600 text-white font-semibold hover:bg-sage-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="currentColor" className="opacity-90"><path d="M168 24c8 28 30 44 56 44v32c-24 0-44-8-56-20v72c0 40-32 72-72 72s-72-32-72-72 32-72 72-72h8v32h-8c-22 0-40 18-40 40s18 40 40 40 40-18 40-40V24h32Z"/></svg>
            TikTok
          </a>
          <a href="https://www.instagram.com/softhausbr/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-sage-100 text-sage-800 font-semibold hover:bg-sage-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-90"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1-5 5a5 5 0 0 1 5-5Zm6-1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2Z"/></svg>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}