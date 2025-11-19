import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

type Seed = {
  x: number
  y: number
  delay: number
  src: string
  size: number
  rotate: number
}

const seedImages = [
  '/secao1/pistache aberto.png',
  '/secao1/pistache quebrado.png',
  '/secao1/pistache quase abrindo.png',
  '/secao1/pistache aberto - com blur.png'
]

export default function PistachioBurst() {
  const seeds = useMemo<Seed[]>(() => {
    const list: Seed[] = []
    const count = 8
    for (let i = 0; i < count; i++) {
      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.3
      const radius = 240 + Math.random() * 120
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius
      const src = seedImages[Math.floor(Math.random() * seedImages.length)]
      const size = 150
      const delay = 0.12 + Math.random() * 0.28
      const rotate = -20 + Math.random() * 40
      list.push({ x, y, delay, src, size, rotate })
    }
    return list
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.img
        src="/secao1/Sorvete.svg"
        alt="Sorvete Soft Haus"
        className="object-contain w-[400px] h-[800px] sm:w-[500px] sm:h-[1000px]"
        initial={{ scale: 1.08 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-0 flex items-center justify-center origin-center scale-90 sm:scale-100">
        {seeds.map((seed, idx) => (
          <motion.div
            key={idx}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{ 
              x: seed.x, 
              y: seed.y, 
              scale: 1, 
              opacity: 1 
            }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: seed.delay }}
            className="absolute"
            style={{ transformOrigin: 'center' }}
          >
            <motion.img
              src={seed.src}
              alt="Semente de pistache"
              style={{ rotate: seed.rotate }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut', delay: 1 + seed.delay }}
              className="drop-shadow-md w-[100px] h-[100px] sm:w-[150px] sm:h-[150px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}