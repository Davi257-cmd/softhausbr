import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react'
import { Card, CardContent } from './ui/card'

interface InstagramPost {
  id: string
  imageUrl: string
  caption: string
  likes: number
  comments: number
  permalink: string
  timestamp: string
}

const InstagramFeed = () => {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Simulando posts do Instagram (fallback para quando API não está disponível)
    const mockPosts: InstagramPost[] = [
      {
        id: '1',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Premium+ice+cream+in+a+cone+with+pistachio+flakes%2C+beautiful+presentation%2C+soft+lighting%2C+pastel+colors&image_size=square',
        caption: 'Pistache Premium 🥜 Nossa especialidade!',
        likes: 342,
        comments: 28,
        permalink: '#',
        timestamp: '2024-01-15T10:30:00Z'
      },
      {
        id: '2',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Colorful+ice+cream+with+rainbow+sprinkles%2C+vibrant+colors%2C+happy+summer+vibes%2C+professional+food+photography&image_size=square',
        caption: 'Creme Colorida 🌈 Alegria em cada colher!',
        likes: 567,
        comments: 45,
        permalink: '#',
        timestamp: '2024-01-14T15:45:00Z'
      },
      {
        id: '3',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Honey+ice+cream+with+walnuts%2C+golden+honey+drizzle%2C+rustic+presentation%2C+warm+lighting&image_size=square',
        caption: 'Mel com Nozes 🍯 Doçura natural!',
        likes: 289,
        comments: 19,
        permalink: '#',
        timestamp: '2024-01-13T09:20:00Z'
      },
      {
        id: '4',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Belgian+chocolate+ice+cream%2C+rich+dark+chocolate%2C+elegant+presentation%2C+luxury+food+photography&image_size=square',
        caption: 'Chocolate Belga 🍫 Pure indulgência!',
        likes: 445,
        comments: 37,
        permalink: '#',
        timestamp: '2024-01-12T14:15:00Z'
      },
      {
        id: '5',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Fresh+strawberry+ice+cream%2C+real+strawberries%2C+bright+red+colors%2C+fresh+summer+feeling&image_size=square',
        caption: 'Morango Fresco 🍓 Fruta da estação!',
        likes: 623,
        comments: 52,
        permalink: '#',
        timestamp: '2024-01-11T11:00:00Z'
      },
      {
        id: '6',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Mint+chocolate+chip+ice+cream%2C+green+colors%2C+chocolate+pieces%2C+refreshing+presentation&image_size=square',
        caption: 'Menta com Chocolate 🌿 Refrescante!',
        likes: 398,
        comments: 31,
        permalink: '#',
        timestamp: '2024-01-10T16:30:00Z'
      },
      {
        id: '7',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ice+cream+shop+interior%2C+soft+green+and+beige+colors%2C+cozy+atmosphere%2C+modern+design&image_size=square',
        caption: 'Nossa loja! 🏠 Ambiente aconchegante',
        likes: 187,
        comments: 15,
        permalink: '#',
        timestamp: '2024-01-09T12:20:00Z'
      },
      {
        id: '8',
        imageUrl: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ice+cream+making+process%2C+artisanal+preparation%2C+craftsmanship%2C+quality+ingredients&image_size=square',
        caption: 'Preparação artesanal! 👨‍🍳 Qualidade em cada detalhe',
        likes: 256,
        comments: 22,
        permalink: '#',
        timestamp: '2024-01-08T08:45:00Z'
      }
    ]

    // Simular carregamento
    setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
  }, [])

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp)
    return date.toLocaleDateString('pt-BR', { 
      day: 'numeric', 
      month: 'short' 
    })
  }

  if (loading) {
    return (
      <section id="instagram" className="section-spacing bg-white">
        <div className="container mx-auto container-padding">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
              Nosso Instagram
            </h2>
            <p className="text-lg text-sage-700">
              Acompanhe @softhausbr
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-sage-100 animate-pulse rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="instagram" className="section-spacing bg-white">
        <div className="container mx-auto container-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sage-800 mb-4">
            Nosso Instagram
          </h2>
          <p className="text-red-600">{error}</p>
        </div>
      </section>
    )
  }

  return (
    <section id="instagram" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-coral-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-sage-800">
              Nosso Instagram
            </h2>
          </div>
          <p className="text-lg text-sage-700 mb-6">
            Acompanhe @softhausbr para mais delícias e novidades
          </p>
          <a
            href="https://instagram.com/softhausbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </motion.div>

        {/* Instagram Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-sage-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium mb-2 line-clamp-2">{post.caption}</p>
                <div className="flex items-center gap-4 text-xs">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{post.likes.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="ml-auto">
                    {formatDate(post.timestamp)}
                  </div>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <ExternalLink className="w-4 h-4 text-sage-600" />
              </div>

              {/* Click handler */}
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-10"
                aria-label={`Ver post no Instagram: ${post.caption}`}
              />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://instagram.com/softhausbr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage-600 hover:text-coral-500 font-semibold transition-colors duration-300"
          >
            Ver mais no Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default InstagramFeed