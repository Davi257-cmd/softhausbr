import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Star, Leaf, Nut, Wheat, MapPin } from 'lucide-react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface Flavor {
  id: number
  name: string
  description: string
  badge: string
  ingredients: string[]
  allergens: string[]
  color: string
  icon: string
  imageUrl?: string
}

const flavors: Flavor[] = [
  {
    id: 1,
    name: "Pistache Premium",
    description: "Pistache importado com toques florais",
    badge: "Bestseller",
    ingredients: ["Pistache", "Baunilha", "Creme", "Açúcar"],
    allergens: ["Frutos secos"],
    color: "from-green-100 to-green-200",
    icon: "🥜",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+pistachio+gelato+in+cone%2C+elegant+presentation%2C+soft+green+palette%2C+studio+lighting&image_size=square"
  },
  {
    id: 2,
    name: "Fragola Premium",
    description: "Morango italiano vibrante",
    badge: "Premium",
    ingredients: ["Morango", "Creme", "Calda de amarena"],
    allergens: ["Laticínios"],
    color: "from-red-100 to-pink-200",
    icon: "🍓",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Strawberry+gelato+premium+in+cone%2C+red+and+pink+tones%2C+luxury+food+photo&image_size=square"
  },
  {
    id: 3,
    name: "Tropical Premium",
    description: "Manga com maracujá refrescante",
    badge: "Premium",
    ingredients: ["Manga", "Maracujá", "Manjericão"],
    allergens: [],
    color: "from-amber-100 to-orange-200",
    icon: "🥭",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Mango+and+passionfruit+gelato+in+cone%2C+tropical+colors%2C+premium+presentation&image_size=square"
  },
  {
    id: 4,
    name: "Chocolate Belga",
    description: "Chocolate belga intenso",
    badge: "Premium",
    ingredients: ["Chocolate belga", "Creme"],
    allergens: ["Laticínios"],
    color: "from-stone-700 to-stone-900",
    icon: "🍫",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Belgian+chocolate+gelato+in+cone%2C+dark+rich+tones%2C+luxury+food+photo&image_size=square"
  },
  {
    id: 5,
    name: "Fio di Latte",
    description: "Suave e cremoso",
    badge: "Tradicional",
    ingredients: ["Leite", "Creme"],
    allergens: ["Laticínios"],
    color: "from-stone-100 to-stone-200",
    icon: "🥛",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Fior+di+latte+gelato+in+cone%2C+white+creamy+tones%2C+minimal+luxury&image_size=square"
  },
  {
    id: 6,
    name: "Max Ninho",
    description: "Marshmallow e caramelo",
    badge: "Especial",
    ingredients: ["Fio di latte", "Marshmallow", "Caramelo"],
    allergens: ["Laticínios"],
    color: "from-yellow-100 to-amber-200",
    icon: "🍮",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Milk+gelato+with+marshmallow+and+caramel+in+cone%2C+soft+yellow+tones&image_size=square"
  },
  {
    id: 7,
    name: "Banoffee",
    description: "Banana, caramelo e brownie",
    badge: "Especial",
    ingredients: ["Banana", "Caramelo", "Brownie"],
    allergens: ["Laticínios"],
    color: "from-amber-100 to-stone-200",
    icon: "🍌",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Banoffee+gelato+in+cone%2C+caramel+drizzle%2C+premium+dessert&image_size=square"
  },
  {
    id: 8,
    name: "Crocante",
    description: "Castanhas, pistache e caramelo",
    badge: "Especial",
    ingredients: ["Chocolate belga", "Castanhas", "Caramelo"],
    allergens: ["Frutos secos", "Laticínios"],
    color: "from-amber-200 to-amber-300",
    icon: "🥜",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Crunchy+gelato+with+nuts+and+caramel+in+cone%2C+golden+tones&image_size=square"
  },
  {
    id: 9,
    name: "Algodão Doce",
    description: "M&M’s, pipoca doce e marshmallow",
    badge: "Colorido",
    ingredients: ["Fio di latte", "M&M’s", "Marshmallow"],
    allergens: ["Laticínios"],
    color: "from-pink-100 to-purple-100",
    icon: "🍬",
    imageUrl: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Cotton+candy+gelato+in+red+cone%2C+colorful+candies%2C+fun+instagrammable&image_size=square"
  }
]

const FeaturedFlavors = () => {
  const [selectedFlavor, setSelectedFlavor] = useState<Flavor | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const getBadgeVariant = (badge: string) => {
    switch (badge.toLowerCase()) {
      case 'bestseller':
        return 'premium'
      case 'premium':
        return 'premium'
      case 'tradicional':
        return 'default'
      case 'fresco':
        return 'secondary'
      case 'refrescante':
        return 'secondary'
      case 'sazonal':
        return 'outline'
      default:
        return 'default'
    }
  }

  const getAllergenIcon = (allergen: string) => {
    switch (allergen.toLowerCase()) {
      case 'frutos secos':
        return <Nut className="w-4 h-4" />
      case 'laticínios':
        return <Wheat className="w-4 h-4" />
      default:
        return <Leaf className="w-4 h-4" />
    }
  }

  return (
    <section id="flavors" className="section-spacing bg-gradient-to-br from-sage-50 via-white to-beige-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800 mb-4 inline-flex items-center gap-2 justify-center">
            <MapPin className="w-7 h-7 text-coral-500" />
            Nossos Sabores Especiais
          </h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Cada sabor é uma experiência única, criada com ingredientes selecionados e muito amor
          </p>
        </motion.div>

        {/* Flavors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {flavors.map((flavor, index) => (
            <motion.div
              key={flavor.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className={`h-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 ${
                  hoveredId === flavor.id ? 'border-coral-400 shadow-2xl' : 'border-sage-200'
                }`}
                onMouseEnter={() => setHoveredId(flavor.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedFlavor(flavor)}
              >
                <CardHeader className="relative p-0">
                  <div className={`h-48 bg-gradient-to-br ${flavor.color} rounded-t-lg flex items-center justify-center relative overflow-hidden`}>
                    {flavor.imageUrl ? (
                      <img
                        src={flavor.imageUrl}
                        alt={flavor.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="text-6xl transform hover:scale-110 transition-transform duration-300">
                        {flavor.icon}
                      </div>
                    )}
                    
                    {/* Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge variant={getBadgeVariant(flavor.badge)}>
                        {flavor.badge}
                      </Badge>
                    </div>

                    {/* Hover overlay */}
                    <div className={`absolute inset-0 bg-black/10 flex items-center justify-center transition-opacity duration-300 ${
                      hoveredId === flavor.id ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <Plus className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-sage-800 mb-2">{flavor.name}</h3>
                  <p className="text-sage-600 text-sm mb-4">{flavor.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-coral-400 fill-current" />
                      <span className="text-sm text-sage-700">4.9</span>
                    </div>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <div className="flex items-center gap-1 text-sage-500 hover:text-sage-700">
                            {flavor.allergens.slice(0, 1).map((allergen, i) => (
                              <div key={i}>{getAllergenIcon(allergen)}</div>
                            ))}
                            {flavor.allergens.length > 1 && (
                              <span className="text-xs">+{flavor.allergens.length - 1}</span>
                            )}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="space-y-1">
                            <p className="font-medium">Alérgenos:</p>
                            {flavor.allergens.map((allergen, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                {getAllergenIcon(allergen)}
                                <span>{allergen}</span>
                              </div>
                            ))}
                            {flavor.allergens.length === 0 && (
                              <p className="text-sm text-green-600">Sem alérgenos principais</p>
                            )}
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <AnimatePresence>
          {selectedFlavor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setSelectedFlavor(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-center mb-6">
                  <div className={`w-24 h-24 mx-auto mb-4 bg-gradient-to-br ${selectedFlavor.color} rounded-full flex items-center justify-center`}>
                    <span className="text-4xl">{selectedFlavor.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-sage-800 mb-2">{selectedFlavor.name}</h3>
                  <Badge variant={getBadgeVariant(selectedFlavor.badge)} className="mb-4">
                    {selectedFlavor.badge}
                  </Badge>
                  <p className="text-sage-600">{selectedFlavor.description}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Ingredientes Principais:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedFlavor.ingredients.map((ingredient, i) => (
                        <span key={i} className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sage-800 mb-2">Alérgenos:</h4>
                    {selectedFlavor.allergens.length > 0 ? (
                      <div className="space-y-2">
                        {selectedFlavor.allergens.map((allergen, i) => (
                          <div key={i} className="flex items-center gap-2 text-sage-700">
                            {getAllergenIcon(allergen)}
                            <span>{allergen}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-green-600">Sem alérgenos principais</p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedFlavor(null)}
                  className="w-full mt-6 px-4 py-2 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors"
                >
                  Fechar
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default FeaturedFlavors