import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import Button from '../ui/Button';

export default function PromoBanner() {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 via-purple-600 to-accent-500 rounded-3xl overflow-hidden shadow-xl">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
      
      <div className="relative px-8 py-12 md:py-16 text-center">
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium mb-4">
          <Sparkles className="w-4 h-4" />
          <span>Limited Time Offer</span>
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Get 30% Off Your First Order
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
          Sign up today and enjoy exclusive discounts on premium products
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-4 rounded-xl w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Email address"
          />
          <Button variant="secondary" size="lg" className="w-full sm:w-auto">
            Subscribe Now
          </Button>
        </div>
      </div>
    </div>
  );
}
