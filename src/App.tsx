import React from 'react'
import HeroSection from './components/HeroSection'
import Header from './components/Header'
import LazySection from './components/LazySection'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <LazySection loader={() => import('./components/BrandStorySection')} />
      <LazySection loader={() => import('./components/FeaturedFlavors')} />
      <LazySection loader={() => import('./components/MenuSection')} />
      <LazySection loader={() => import('./components/ExperienceSocialSection')} />
      <LazySection loader={() => import('./components/LocationsSection')} />
      <LazySection loader={() => import('./components/CTAFinalSection')} />
      <LazySection loader={() => import('./components/Footer')} />
    </div>
  )
}

export default App
