import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Phone, Mail, Clock, MapPin, ExternalLink, UtensilsCrossed } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'instagram',
      url: 'https://instagram.com/softhausbr',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    },
    {
      name: 'TikTok',
      icon: 'tiktok',
      url: 'https://www.tiktok.com/@softhausbr',
      color: 'hover:bg-black'
    },
    {
      name: 'iFood',
      icon: 'ifood',
      url: 'https://www.ifood.com.br/delivery/fortaleza-ce/soft-haus---gelatos-e-cookies-aldeota/519f10f8-ea1f-4847-a5ef-f99c27306a55?utm_medium=share',
      color: 'hover:bg-red-500'
    },
    {
      name: 'WhatsApp',
      icon: 'whatsapp',
      url: 'https://wa.me/558534567890',
      color: 'hover:bg-green-500'
    }
  ]

  const locations = [
    {
      name: 'Barbosa de Freitas',
      address: 'Rua Barbosa de Freitas, 1066 - Centro',
      hours: 'Segunda: Fechado | Ter-Qua-Qui: 12h às 21h | Sex-Sáb-Dom: 12h às 23h'
    },
    {
      name: 'Verd Mall',
      address: 'Av. Eng. Santana Jr., 2977 - Cocó',
      hours: 'Segunda: Fechado | Ter-Qua-Qui: 12h às 21h | Sex-Sáb-Dom: 12h às 23h'
    }
  ]

  const quickLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Sabores', href: '#flavors' },
    { name: 'Cardápio', href: '#menu' },
    { name: 'Horários', href: '#locations' },
    { name: 'Contato', href: '#contact' },
    { name: 'Política de Privacidade', href: '#privacy' }
  ]

  return (
    <footer className="bg-sage-800 text-white">
      {/* Main Footer */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Soft Haus</h3>
              <p className="text-sage-200 leading-relaxed">
                Criando experiências geladas desde 2024
              </p>
              <p className="text-sage-300 text-sm">
                Gelados artesanais premium com design visual sofisticado
              </p>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Redes Sociais</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-sage-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    aria-label={`Siga-nos no ${social.name}`}
                  >
                    {social.icon === 'instagram' && <Instagram className="w-5 h-5 text-white" />}
                    {social.icon === 'tiktok' && (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="18" height="18" fill="white"><path d="M168 24c8 28 30 44 56 44v32c-24 0-44-8-56-20v72c0 40-32 72-72 72s-72-32-72-72 32-72 72-72h8v32h-8c-22 0-40 18-40 40s18 40 40 40 40-18 40-40V24h32Z"/></svg>
                    )}
                    {social.icon === 'ifood' && (
                      <img src="/icones/ifood-ícone-normal.svg" alt="iFood" className="w-5 h-5" />
                    )}
                    {social.icon === 'whatsapp' && <Phone className="w-5 h-5 text-white" />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Locations Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Nossas Unidades
            </h4>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="space-y-2">
                  <h5 className="font-medium text-white">{location.name}</h5>
                  <p className="text-sage-200 text-sm">{location.address}</p>
                  <p className="text-sage-300 text-xs">{location.hours}</p>
                  <button
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                    className="inline-flex items-center gap-1 text-coral-400 hover:text-coral-300 text-sm font-medium transition-colors duration-200"
                  >
                    Ver no Mapa
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Links Rápidos</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-sage-200 hover:text-white transition-colors duration-200 py-1 text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-coral-400" />
                <div>
                  <p className="text-white font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/558534567890"
                    className="text-sage-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    (85) 3456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-coral-400" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:contato@softhaus.com.br"
                    className="text-sage-200 hover:text-white transition-colors duration-200 text-sm"
                  >
                    contato@softhaus.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-coral-400" />
                <div>
                  <p className="text-white font-medium">Atendimento</p>
                  <p className="text-sage-200 text-sm">Seg-Dom: 12h às 23h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sage-600 bg-sage-900">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sage-300 text-sm text-center md:text-left">
              © {currentYear} Soft Haus. Todos os direitos reservados.
            </p>
            <p className="text-sage-400 text-xs text-center md:text-right">
              Desenvolvido com amor e muita criatividade por 
              <a href="https://www.instagram.com/davilucas.dev/" target="_blank" rel="noopener noreferrer" className="text-coral-400 hover:text-coral-300 font-semibold">
                @davilucas.dev
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer