import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, IceCream } from 'lucide-react'
import { Card, CardContent } from './ui/card'

interface Testimonial {
  id: number
  name: string
  role: string
  avatar: string
  rating: number
  comment: string
  date: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mariana Silva",
    role: "Food Blogger",
    avatar: "👩‍🍳",
    rating: 5,
    comment: "O detalhe em cada colher de sorvete é perceptível. Aqui não é só gelado, é arte.",
    date: "2 dias atrás"
  },
  {
    id: 2,
    name: "Pedro Santos",
    role: "Frequentador",
    avatar: "👨‍💼",
    rating: 5,
    comment: "A textura perfeita e os sabores únicos me fazem voltar sempre. Experiência premium!",
    date: "1 semana atrás"
  },
  {
    id: 3,
    name: "Julia Costa",
    role: "Influenciadora",
    avatar: "👩‍🎨",
    rating: 5,
    comment: "Cada sabor é uma surpresa deliciosa. Perfeito para fotos e ainda melhor para saborear!",
    date: "3 dias atrás"
  },
  {
    id: 4,
    name: "Roberto Lima",
    role: "Chef",
    avatar: "👨‍🍳",
    rating: 5,
    comment: "Como chef, aprecio a qualidade dos ingredientes. O pistache é simplesmente perfeito!",
    date: "5 dias atrás"
  },
  {
    id: 5,
    name: "Carla Mendes",
    role: "Cliente VIP",
    avatar: "👩‍💻",
    rating: 5,
    comment: "A apresentação é tão linda que quase não quero comer. Mas o sabor é irresistível!",
    date: "1 dia atrás"
  }
]

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextTestimonial, 5000)
      return () => clearInterval(interval)
    }
  }, [isPaused, currentIndex])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
  }

  return (
    <section id="experience" className="section-spacing bg-gradient-to-br from-beige-50 to-sage-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <IceCream className="w-8 h-8 text-coral-500" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800">
              Experiências
            </h2>
          </div>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            O que nossos clientes dizem sobre a experiência Soft Haus
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="bg-white/80 backdrop-blur border-sage-200 shadow-xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center space-y-6">
                      {/* Avatar and Info */}
                      <div className="flex flex-col items-center gap-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-sage-100 to-coral-100 rounded-full flex items-center justify-center text-3xl">
                          {testimonials[currentIndex].avatar}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-sage-800">
                            {testimonials[currentIndex].name}
                          </h3>
                          <p className="text-sage-600">{testimonials[currentIndex].role}</p>
                          <p className="text-sm text-sage-500">{testimonials[currentIndex].date}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1">
                        {renderStars(testimonials[currentIndex].rating)}
                      </div>

                      {/* Quote Icon */}
                      <Quote className="w-8 h-8 text-coral-400 mx-auto opacity-50" />

                      {/* Comment */}
                      <p className="text-lg md:text-xl text-sage-700 leading-relaxed max-w-2xl mx-auto italic">
                        "{testimonials[currentIndex].comment}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur border border-sage-200 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-5 h-5 text-sage-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur border border-sage-200 rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110 shadow-lg"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-5 h-5 text-sage-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-coral-500 w-8'
                  : 'bg-sage-300 hover:bg-sage-400'
              }`}
              aria-label={`Ir para depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection