'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const mainSlides = [
  {
    id: 1,
    title: 'Ayurvedic Wellness Collection',
    subtitle: 'Natural healing solutions',
    description: 'Traditional herbs and supplements for holistic health',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=80',
    cta: 'Shop Ayurveda',
    link: '/wellness',
    bgGradient: 'from-green-500/30 to-emerald-500/30',
  },
  {
    id: 2,
    title: 'Organic Health Foods',
    subtitle: 'Pure nutrition for life',
    description: 'Premium organic powders and superfoods',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=1200&q=80',
    cta: 'Shop Organic',
    link: '/food',
    bgGradient: 'from-green-500/30 to-lime-500/30',
  },
  {
    id: 3,
    title: 'Traditional Indian Sweets',
    subtitle: 'Authentic flavors',
    description: 'Handcrafted sweets and snacks from India',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
    cta: 'Shop Sweets',
    link: '/food',
    bgGradient: 'from-orange-500/30 to-yellow-500/30',
  },
  {
    id: 4,
    title: 'Natural Beauty & Care',
    subtitle: 'Herbal skincare solutions',
    description: 'Chemical-free beauty products for radiant skin',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80',
    cta: 'Shop Beauty',
    link: '/beauty',
    bgGradient: 'from-pink-500/30 to-rose-500/30',
  },
];

const sideSlides = [
  {
    id: 5,
    title: 'Mental Wellness',
    subtitle: 'Mind & body harmony',
    description: 'Stress relief and relaxation products',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80',
    cta: 'Shop Wellness',
    link: '/wellness/mental',
    bgGradient: 'from-purple-500/30 to-blue-500/30',
  },
  {
    id: 6,
    title: 'Herbal Supplements',
    subtitle: 'Nature\'s pharmacy',
    description: 'Pure herbal extracts and capsules',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80',
    cta: 'Shop Herbs',
    link: '/wellness',
    bgGradient: 'from-green-500/30 to-emerald-500/30',
  },
  {
    id: 7,
    title: 'Spiritual Essentials',
    subtitle: 'Sacred rituals',
    description: 'Incense, oils and spiritual items',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    cta: 'Shop Spiritual',
    link: '/spirituality',
    bgGradient: 'from-orange-500/30 to-yellow-500/30',
  },
  {
    id: 8,
    title: 'Healthy Snacks',
    subtitle: 'Guilt-free indulgence',
    description: 'Nutritious and delicious treats',
    image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80',
    cta: 'Shop Snacks',
    link: '/food',
    bgGradient: 'from-red-500/30 to-pink-500/30',
  },
];

export default function HeroSlider() {
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [currentSideSlide, setCurrentSideSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentMainSlide((prev: number) => (prev + 1) % mainSlides.length);
      setCurrentSideSlide((prev: number) => (prev + 1) % sideSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
  const goToMainSlide = (index: number) => {
    setCurrentMainSlide(index);
    setIsAutoPlaying(false);
  };
  
  const goToSideSlide = (index: number) => {
    setCurrentSideSlide(index);
    setIsAutoPlaying(false);
  };
  
  const nextMainSlide = () => {
    setCurrentMainSlide((prev: number) => (prev + 1) % mainSlides.length);
    setIsAutoPlaying(false);
  };
  
  const prevMainSlide = () => {
    setCurrentMainSlide((prev: number) => (prev - 1 + mainSlides.length) % mainSlides.length);
    setIsAutoPlaying(false);
  };
  
  return (
    <div className="flex gap-6 h-[350px] md:h-[400px]">
      {/* Main Slider - Left Side (2/3 width) */}
      <div className="relative flex-1 lg:flex-[2] rounded-lg overflow-hidden group">
        {/* Main Slides */}
        {mainSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentMainSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 brightness-125 contrast-110 saturate-125"
              style={{ 
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '100%'
              }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            
            {/* Light Enhancement Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative h-full w-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl animate-slide-up">
                  <p className="text-white/90 text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-base md:text-lg mb-6">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button variant="accent" size="lg" className="shadow-xl hover:shadow-2xl">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Main Navigation Arrows */}
        <button
          onClick={prevMainSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <span className="w-6 h-6 text-neutral-900 block">‹</span>
        </button>
        
        <button
          onClick={nextMainSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <span className="w-6 h-6 text-neutral-900 block">›</span>
        </button>
        
        {/* Main Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {mainSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToMainSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentMainSlide
                  ? 'w-8 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Side Slider - Right Side (1/3 width) */}
      <div className="relative flex-1 rounded-lg overflow-hidden group">
        {/* Side Slides */}
        {sideSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ${
              index === currentSideSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-125 contrast-110 saturate-125"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient}`} />
            
            {/* Light Enhancement Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Content */}
            <div className="relative h-full w-full flex items-end">
              <div className="p-4 md:p-6 w-full">
                <div className="animate-slide-up">
                  <p className="text-white/90 text-xs font-medium mb-1 uppercase tracking-wider">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-lg md:text-xl font-bold text-white mb-2 leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-xs md:text-sm mb-3">
                    {slide.description}
                  </p>
                  <Link href={slide.link}>
                    <Button variant="accent" size="sm" className="shadow-lg hover:shadow-xl">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Side Dots Indicator */}
        <div className="absolute top-4 right-4 flex flex-col space-y-2">
          {sideSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSideSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSideSlide
                  ? 'w-2 h-6 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to side slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
