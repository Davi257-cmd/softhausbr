import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Navigation, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

interface Location {
  id: number
  name: string
  address: string
  neighborhood: string
  phone: string
  hours: {
    monday: string
    tue_thu: string
    fri_sun: string
  }
  coordinates: {
    lat: number
    lng: number
  }
  image: string
  color: string
}

const locations: Location[] = [
  {
    id: 1,
    name: "Barbosa de Freitas",
    address: "Rua Barbosa de Freitas, 1066",
    neighborhood: "Centro",
    phone: "(85) 3456-7890",
    hours: {
      monday: "Segunda: Fechado",
      tue_thu: "Terça a Quinta: 12h às 21h",
      fri_sun: "Sexta a Domingo: 12h às 23h"
    },
    coordinates: {
      lat: -3.7319,
      lng: -38.5267
    },
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Ice+cream+shop+storefront+on+a+street%2C+modern+design%2C+soft+green+and+beige+colors%2C+welcoming+entrance%2C+Fortaleza+Brazil&image_size=square",
    color: "from-sage-400 to-sage-500"
  },
  {
    id: 2,
    name: "Verd Mall",
    address: "Av. Eng. Santana Jr., 2977",
    neighborhood: "Cocó",
    phone: "(85) 3456-7891",
    hours: {
      monday: "Segunda: Fechado",
      tue_thu: "Terça a Quinta: 12h às 21h",
      fri_sun: "Sexta a Domingo: 12h às 23h"
    },
    coordinates: {
      lat: -3.7456,
      lng: -38.5356
    },
    image: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Shopping+mall+ice+cream+store%2C+modern+interior%2C+bright+lighting%2C+contemporary+design%2C+premium+look&image_size=square",
    color: "from-coral-400 to-coral-500"
  }
]

const LocationsSection = () => {
  const openGoogleMaps = (location: Location) => {
    const url = `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`
    window.open(url, '_blank')
  }

  const openDirections = (location: Location) => {
    const url = `https://www.google.com/maps/dir//${location.coordinates.lat},${location.coordinates.lng}`
    window.open(url, '_blank')
  }

  const makeCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self')
  }

  return (
    <section id="locations" className="section-spacing bg-gradient-to-br from-sage-50 to-beige-50">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-2 flex items-center justify-center gap-2 text-3xl md:text-4xl lg:text-5xl font-bold text-sage-800">
            <MapPin className="w-8 h-8 text-coral-500" />
            Nossas
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-coral-500">
            Localizações
          </h3>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Visite uma de nossas lojas e experimente nossos gelados artesanais
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden border-sage-200 bg-white/80 backdrop-blur hover:shadow-2xl transition-all duration-300 hover:scale-105">
                {/* Image Header */}
                <div className={`h-48 bg-gradient-to-br ${location.color} relative overflow-hidden`}>
                  <img
                    src={location.image}
                    alt={`Loja ${location.name}`}
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{location.name}</h3>
                    <p className="text-sm opacity-90">{location.neighborhood}</p>
                  </div>
                </div>

                <CardContent className="p-6 space-y-4">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-sage-800">{location.address}</p>
                      <p className="text-sm text-sage-600">{location.neighborhood}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sage-800">Horário de Funcionamento:</p>
                      <p className="text-sm text-sage-600">{location.hours.monday}</p>
                      <p className="text-sm text-sage-600">{location.hours.tue_thu}</p>
                      <p className="text-sm text-sage-600">{location.hours.fri_sun}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-sage-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sage-800">Telefone:</p>
                      <p className="text-sm text-sage-600">{location.phone}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-2 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-sage-300 text-sage-700 hover:bg-sage-600 hover:text-white"
                      onClick={() => openGoogleMaps(location)}
                    >
                      <MapPin className="w-4 h-4 mr-1" />
                      Ver Mapa
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-sage-300 text-sage-700 hover:bg-sage-600 hover:text-white"
                      onClick={() => openDirections(location)}
                    >
                      <Navigation className="w-4 h-4 mr-1" />
                      Direções
                    </Button>
                    
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-sage-300 text-sage-700 hover:bg-sage-600 hover:text-white"
                      onClick={() => makeCall(location.phone)}
                    >
                      <Phone className="w-4 h-4 mr-1" />
                      Ligar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-6 border border-sage-200 shadow-lg"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {locations.map((location) => (
              <div key={location.id} className="space-y-2">
                <h4 className="text-sage-800 font-semibold">{location.name}</h4>
                <div className="w-full h-64 rounded-xl overflow-hidden border border-sage-200">
                  <iframe
                    title={`Mapa ${location.name}`}
                    src={`https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}&z=16&output=embed`}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default LocationsSection