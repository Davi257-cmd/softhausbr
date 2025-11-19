import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Leaf, Palette } from 'lucide-react'
import { Button } from './ui/button'
import { Card } from './ui/card'

const BrandStorySection = () => {
  const values = [
    {
      icon: Leaf,
      title: "Ingredientes Selecionados",
      description: "Fontes locais e orgânicas quando possível"
    },
    {
      icon: Palette,
      title: "Criatividade sem Limites",
      description: "Sabores únicos que surpreendem"
    },
    {
      icon: Sparkles,
      title: "Experiência Premium",
      description: "Qualidade em cada detalhe"
    }
  ]

  return (
    <section id="story" className="section-spacing bg-gradient-to-br from-sage-50 to-beige-50">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/secao2/secao-2.jpg"
                alt="Soft Haus - imagem destaque"
                className="w-full h-full object-cover aspect-square"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/20 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(107,142,127,0.25)_0%,_transparent_65%)]" />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800 leading-tight">
                Mais que Gelado.
                <span className="block text-coral-500">É Paixão por Detalhe</span>
              </h2>
              
              <p className="text-lg text-sage-700 leading-relaxed">
                A Soft Haus nasceu de uma simples obsessão: criar gelados que não apenas 
                satisfazem o paladar, mas surpreendem com texturas perfeitas e apresentação 
                que merece estar em seu feed.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-4 border-sage-200 bg-white/80 backdrop-blur">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-sage-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sage-800">{value.title}</h3>
                        <p className="text-sm text-sage-600">{value.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg"
                className="bg-sage-600 hover:bg-sage-700 text-white"
              >
                Descubra Nossa História
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BrandStorySection