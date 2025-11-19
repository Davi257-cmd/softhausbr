import React from 'react'
import { motion } from 'framer-motion'
import { Instagram, Play } from 'lucide-react'
import { Card } from './ui/card'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  src: string
  caption: string
  permalink: string
  likes?: number
  comments?: number
}

// Conteúdo real da pasta public/clientes
const items: MediaItem[] = [
  { id: 'v1', type: 'video', src: '/clientes/AQN2mQo4UOl0vDDF4ZgdyWU8FI4waxm6DFvvDICarg8YTsbepy5yQ4IQBZ3NhSAyPz-bO72vYdpIGbvP7jsBIIv7wKdPfBIpGFe21fM.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i1', type: 'image', src: '/clientes/569262272_18075001687964180_3881181296981161609_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i2', type: 'image', src: '/clientes/461969312_441236762305767_188952667950999302_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v2', type: 'video', src: '/clientes/AQNu7pru3iJFusf4O6Q6NMEIoydEbHii0s2P5SAFLDntLqKxAYQaGIeOWYQFKtRiGlGr-eFmD6VAh7d0Nizl1_vG3L3F7u_LE-mu2ok.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v3', type: 'video', src: '/clientes/AQNs_sWWudRf7TsK52gbIzhhoGE1ru2RcJnUVP8MFM9P9wSrxjxbkWt9_SQrc8KbBK_fU_FjvdX-HJpdDGPna07CaVa8bOTpecl-QKw.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i3', type: 'image', src: '/clientes/461823259_1471467960180431_1026752780089735520_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v4', type: 'video', src: '/clientes/AQMf9XzPdXj-om89HY9gH1W3LdHzB-diO5LS5K20ASHDDQpTzUeMw5BY8ttHSU3ZZA-hnlVk3Ts-txtpm0Mbx62y5rX62fuhTTGKHHQ.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v5', type: 'video', src: '/clientes/AQN5gvBC4CsPBOguvZLRVhGWakVRltUiVu97lVy7EDWeNEp0PzKtPN3TGWzdXJbZa_jVn9proHNs7wkOLNTir9ciTbysP0dkn06cavk.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i4', type: 'image', src: '/clientes/581209697_18312845548247565_6599984544655465566_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i5', type: 'image', src: '/clientes/461851306_423449610390545_4404303465161681472_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i6', type: 'image', src: '/clientes/570499915_18110118739605870_7449505234101134506_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i7', type: 'image', src: '/clientes/461874753_1520858785225922_5607821872810981636_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i8', type: 'image', src: '/clientes/461665711_1779523559252339_4253282356209624797_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i9', type: 'image', src: '/clientes/574253464_18057961700538973_6841486817981634820_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v6', type: 'video', src: '/clientes/AQPzLMGUFcIaLELDqRWR0VeRtBZoKnskBs_OvuPkJryBie4W0t5YT6bI79ATYhpLKNtENEIyE02avAmdsK8mLqYzooUi9Dsh5KbM1XQ.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i10', type: 'image', src: '/clientes/461823356_3853097301678587_3336627634820612521_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i11', type: 'image', src: '/clientes/461779759_909983704331350_2487370541678029267_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i12', type: 'image', src: '/clientes/461321527_529415823038176_1937245192705295240_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i13', type: 'image', src: '/clientes/461488727_1056125316036590_2789729436730927435_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v7', type: 'video', src: '/clientes/AQMRIklqnq6ARinARTPYKV9H4DMkKe1UNyPtlA8WIrAav6nTDbZGAvAILBPqg1b133SuatH9abwIOixTMBKFjS3pm15zkY5tkiMVaaQ.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i14', type: 'image', src: '/clientes/461437213_1200241651261176_3493175622688871053_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'i15', type: 'image', src: '/clientes/461412372_2011804105909148_9196991763744356553_n.jpg', caption: 'Feed Cliente', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v8', type: 'video', src: '/clientes/AQNrIZ9OJGtdPeI3yAnIjuj64NU_yDSpiZqVchlRDd0MTWGnpmFw4n7cYurNJCb1uFoDcWNOKzBQYGqrhNj99_19nhhG2p_WxFvRZ30.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v9', type: 'video', src: '/clientes/AQP7BbgQng1Dkaoj-tP_kmBc85YZlP049tlTbB9nuNstjAIlFjQpMrmS0yFybAUIBSCxTuOnJ_XVbPytGEWydaKOJB7QCsXMKaykbIU.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
  { id: 'v10', type: 'video', src: '/clientes/AQOEPrGEOE9dBdiEhoimjS6gJc8iHfPTv7bzqUrQHWvfqZ3MV-Y9tSNPP9SkWOZzk-J0LfnUGGlpIFM7mm1kcQrQe2FZ8HBIup51xE0.mp4', caption: 'Cliente Soft Haus', permalink: 'https://www.instagram.com/softhausbr/' },
]

export default function ExperienceSocialSection() {
  return (
    <section id="social" className="section-spacing bg-gradient-to-br from-beige-50 to-sage-50">
      <div className="container mx-auto container-padding">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2">
            <Instagram className="w-8 h-8 text-coral-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800">Experiências & Instagram</h2>
          </div>
          <p className="text-sage-700 mt-2">Imagens e vídeos de clientes que marcaram a Soft Haus</p>
          <a
            href="https://www.instagram.com/softhausbr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-coral-500 hover:text-coral-600 font-semibold"
          >
            @softhausbr
          </a>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {items.slice(0, 24).map((item, index) => (
            <motion.a
              key={item.id}
              href={item.permalink}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="none"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.type === 'video' && <Play className="w-4 h-4" />}
                <p className="text-sm line-clamp-2">{item.caption}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/softhausbr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage-700 hover:text-coral-500 font-semibold"
          >
            Ver mais no Instagram
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}