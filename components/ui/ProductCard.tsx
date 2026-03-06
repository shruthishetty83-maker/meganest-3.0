'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Heart, Check } from 'lucide-react';
import { useState } from 'react';
import Badge from './Badge';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating?: number;
  badge?: string;
}

export default function ProductCard({ id, name, price, originalPrice, image, category, rating = 4.5, badge }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  
  const { addItem, state } = useCart();
  const isInCart = state.items.some(item => item.id === id);
  
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;
  
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (isAdding || isInCart) return;
    
    setIsAdding(true);
    
    // Add item to cart
    addItem({
      id,
      name,
      price,
      originalPrice,
      image,
      category,
    });
    
    // Show success state
    setTimeout(() => {
      setIsAdding(false);
      setJustAdded(true);
      
      // Reset success state after 2 seconds
      setTimeout(() => {
        setJustAdded(false);
      }, 2000);
    }, 500);
  };
  
  return (
    <div className="group relative h-full">
      <div className="bg-white rounded-lg overflow-hidden border border-neutral-200 transition-all duration-200 hover:shadow-md hover:border-neutral-300 h-full flex flex-col">
        {/* Image Container */}
        <Link href={`/product/${id}`} className="block relative aspect-square overflow-hidden bg-white p-2">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-neutral-100 animate-pulse" />
          )}
          <Image
            src={image}
            alt={name}
            fill
            className={`object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Badges */}
          {badge && (
            <div className="absolute top-2 left-2">
              <Badge variant="accent" size="sm">{badge}</Badge>
            </div>
          )}
          {discount > 0 && (
            <div className="absolute top-2 right-2">
              <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                -{discount}%
              </span>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute bottom-2 right-2 p-2 bg-white rounded-full border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:border-neutral-400"
            aria-label="Add to wishlist"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-neutral-600'}`}
            />
          </button>
        </Link>
        
        {/* Content */}
        <div className="p-3 border-t border-neutral-100 flex-1 flex flex-col">
          <p className="text-xs text-neutral-500 mb-1">{category}</p>
          <Link href={`/product/${id}`}>
            <h3 className="text-sm font-normal text-neutral-900 mb-2 line-clamp-2 hover:text-orange-600 transition-colors leading-snug h-[2.5rem] flex items-start">
              {name}
            </h3>
          </Link>
          
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'text-orange-400 fill-orange-400' : 'text-neutral-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-blue-600 hover:text-orange-600 cursor-pointer">{rating}</span>
          </div>
          
          {/* Price */}
          <div className="mb-3 flex-1">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-lg font-medium text-neutral-900">${price}</span>
              {originalPrice && (
                <span className="text-sm text-neutral-500 line-through">${originalPrice}</span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-xs text-green-700">Save ${(originalPrice! - price).toFixed(2)}</p>
            )}
            <p className="text-xs text-neutral-600">FREE delivery</p>
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding || isInCart}
            className={`w-full py-2 text-sm font-medium rounded-lg transition-all duration-200 mt-auto flex items-center justify-center gap-2 ${
              isInCart
                ? 'bg-green-100 text-green-800 cursor-default'
                : justAdded
                ? 'bg-green-500 text-white'
                : isAdding
                ? 'bg-orange-300 text-neutral-700 cursor-not-allowed'
                : 'bg-orange-400 hover:bg-orange-500 text-neutral-900'
            }`}
            aria-label="Add to cart"
          >
            {isInCart ? (
              <>
                <Check className="w-4 h-4" />
                In Cart
              </>
            ) : justAdded ? (
              <>
                <Check className="w-4 h-4" />
                Added!
              </>
            ) : isAdding ? (
              <>
                <div className="w-4 h-4 border-2 border-neutral-600 border-t-transparent rounded-full animate-spin" />
                Adding...
              </>
            ) : (
              <>
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
