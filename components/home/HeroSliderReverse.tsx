'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';

const sideSlides = [
  {
    id: 1,
    title: 'Traditional Handicrafts',
    subtitle: 'Authentic artisan work',
    description: 'Handmade crafts from local artisans',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80',
    cta: 'Shop Crafts',
    link: '/handicrafts',
    bgGradient: 'from-amber-500/30 to-orange-500/30',
  },
  {
    id: 2,
    title: 'Cultural Textiles',
    subtitle: 'Heritage fabrics',
    description: 'Traditional clothing and fabrics',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&q=80',
    cta: 'Shop Textiles',
    link: '/fashion',
    bgGradient: 'from-purple-500/30 to-pink-500/30',
  },
];

const mainSlides = [
  {
    id: 3,
    title: 'Traditional Marketplace',
    subtitle: 'Authentic cultural products',
    description: 'Discover heritage items and traditional goods',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
    cta: 'Explore Dista',
    link: '/traditional',
    bgGradient: 'from-orange-500/30 to-red-500/30',
  },
  {
    id: 4,
    title: 'Ethnic Jewelry',
    subtitle: 'Timeless elegance',
    description: 'Traditional jewelry and accessories',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200&q=80',
    cta: 'Shop Jewelry',
    link: '/jewelry',
    bgGradient: 'from-gold-500/30 to-amber-500/30',
  },
];

export default function HeroSliderReverse() {
  const [currentSideSlide, setCurrentSideSlide] = useState(0);
  const [currentMainSlide, setCurrentMainSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSideSlide((prev: number) => (prev + 1) % sideSlides.length);
      setCurrentMainSlide((prev: number) => (prev + 1) % mainSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);
  
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
  
  const goToMainSlide = (index: number) => {
    setCurrentMainSlide(index);
    setIsAutoPlaying(false);
  };
  
  return (
    <div className="flex gap-6 h-[350px] md:h-[400px]">
      {/* Side Slider - Left Side (1/3 width) */}
      <div className="relative flex-1 rounded-3xl overflow-hidden group">
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
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
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

      {/* Main Slider - Right Side (2/3 width) */}
      <div className="relative flex-1 lg:flex-[2] rounded-3xl overflow-hidden group">
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
              className="absolute inset-0 bg-cover bg-center brightness-125 contrast-110 saturate-125"
              style={{ backgroundImage: `url(${slide.image})` }}
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
    </div>
  );
}
