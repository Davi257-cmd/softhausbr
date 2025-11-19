import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import PistachioBurst from './PistachioBurst'

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-sage-100 pt-[90px] md:pt-0">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100/20 via-transparent to-sage-200/20 animate-pulse" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Text Content */}
        <motion.div 
          className="text-center lg:text-left z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-sage-800 mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Uma Experiência Única de
            <span className="block text-coral-500">Sabor</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-sage-700 mb-8 max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Gelados artesanais que desafiam a gravidade
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => scrollToSection('flavors')}
            >
              Conheça Nossos Sabores
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('locations')}
            >
              Encontre-nos
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="relative w-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <PistachioBurst />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-6 h-6 text-sage-600" />
      </motion.div>
    </section>
  )
}

export default HeroSection