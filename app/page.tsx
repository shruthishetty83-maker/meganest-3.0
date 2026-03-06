'use client';

import { useState } from 'react';
import HeroSlider from '@/components/home/HeroSlider';
import HeroSliderReverse from '@/components/home/HeroSliderReverse';
import CategoryCard from '@/components/home/CategoryCard';
import ProductCard from '@/components/ui/ProductCard';
import PromoBanner from '@/components/home/PromoBanner';

const categories = [
  {
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=600&q=80',
    productCount: 1250,
    link: '/categories/electronics',
  },
  {
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=600&q=80',
    productCount: 2340,
    link: '/categories/fashion',
  },
  {
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=600&q=80',
    productCount: 890,
    link: '/categories/home',
  },
  {
    name: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=600&q=80',
    productCount: 670,
    link: '/categories/sports',
  },
  {
    name: 'Toys & Games',
    image: 'https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600&q=80',
    productCount: 650,
    link: '/toys',
  },
  {
    name: 'Beauty & Wellness',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80',
    productCount: 1580,
    link: '/beauty',
  },
  {
    name: 'Baby & Kids',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=600&q=80',
    productCount: 920,
    link: '/baby-kids',
  },
  {
    name: 'Food & Beverages',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80',
    productCount: 1120,
    link: '/food',
  },
  {
    name: 'Books & Media',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600&q=80',
    productCount: 780,
    link: '/books',
  },
];

const bestSellerProducts = [
  { id: 'bs1', name: 'Pulla Reddy Assorted Ghee Sweets', price: 24.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', category: 'Sweets', rating: 4.8 },
  { id: 'bs2', name: 'Vellanki Foods Ariselu (Ghee)', price: 18.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', category: 'Sweets', rating: 4.7 },
  { id: 'bs3', name: 'Vellanki Foods Bobbatlu (Jaggery)', price: 16.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', category: 'Sweets', rating: 4.6 },
  { id: 'bs4', name: 'Vellanki Foods Bellam Sunnundalu', price: 19.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', category: 'Sweets', rating: 4.8 },
  { id: 'bs5', name: 'Vellanki Foods Ariselu (Oil)', price: 17.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80', category: 'Sweets', rating: 4.5 },
  { id: 'bs6', name: 'Vellanki Telangana Chekkalu', price: 14.99, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80', category: 'Snacks', rating: 4.7 },
  { id: 'bs7', name: 'Vellanki Foods Janthikalu (Chakli)', price: 12.99, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80', category: 'Snacks', rating: 4.6 },
  { id: 'bs8', name: 'Vellanki Foods Chegodi Small', price: 11.99, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80', category: 'Snacks', rating: 4.5 },
  { id: 'bs9', name: 'Vellanki Foods Kara Boondi', price: 13.99, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80', category: 'Snacks', rating: 4.7 },
  { id: 'bs10', name: 'Vellanki Foods Mixture', price: 15.99, image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=600&q=80', category: 'Snacks', rating: 4.8 },
  { id: 'bs11', name: 'Vellanki Mango Pickle with Garlic', price: 9.99, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', category: 'Pickles', rating: 4.9 },
  { id: 'bs12', name: 'Priya Mango Avakaya Pickle', price: 8.99, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', category: 'Pickles', rating: 4.8 },
  { id: 'bs13', name: 'Gongura Pickle Andhra Style', price: 10.99, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', category: 'Pickles', rating: 4.7 },
  { id: 'bs14', name: 'Amla Pickle Homemade Style', price: 7.99, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', category: 'Pickles', rating: 4.6 },
  { id: 'bs15', name: 'Lemon Pickle Indian Style', price: 6.99, image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80', category: 'Pickles', rating: 4.5 },
  { id: 'bs16', name: 'Baidyanath Bhringrajasava', price: 22.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Ayurveda', rating: 4.8 },
  { id: 'bs17', name: 'Dr. Reckeweg Calcarea Phosphorica Tablets', price: 15.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Homeopathy', rating: 4.7 },
  { id: 'bs18', name: 'Dr. Willmar Schwabe Cineraria Maritima Eye Drops', price: 18.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Homeopathy', rating: 4.6 },
  { id: 'bs19', name: 'Himalaya Ashwagandha Tablets', price: 12.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Supplements', rating: 4.9 },
  { id: 'bs20', name: 'Patanjali Giloy Ghanvati', price: 8.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Ayurveda', rating: 4.7 },
  { id: 'bs21', name: 'Mamaearth Onion Hair Oil', price: 14.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', category: 'Hair Care', rating: 4.8 },
  { id: 'bs22', name: 'Mamaearth Onion Shampoo', price: 11.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', category: 'Hair Care', rating: 4.7 },
  { id: 'bs23', name: 'Khadi Natural Amla Hair Cleanser', price: 9.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', category: 'Hair Care', rating: 4.6 },
  { id: 'bs24', name: 'Biotique Bio Bhringraj Oil', price: 13.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', category: 'Hair Care', rating: 4.8 },
  { id: 'bs25', name: 'Forest Essentials Facial Cleanser', price: 29.99, image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80', category: 'Skincare', rating: 4.9 },
  { id: 'bs26', name: 'Jackfruit365 Green Jackfruit Flour', price: 7.99, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', category: 'Organic', rating: 4.5 },
  { id: 'bs27', name: 'Organic Moringa Powder', price: 16.99, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', category: 'Organic', rating: 4.8 },
  { id: 'bs28', name: 'Organic Turmeric Powder', price: 12.99, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', category: 'Organic', rating: 4.9 },
  { id: 'bs29', name: 'Organic Amla Powder', price: 14.99, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', category: 'Organic', rating: 4.7 },
  { id: 'bs30', name: 'Organic Triphala Powder', price: 18.99, image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&q=80', category: 'Organic', rating: 4.8 },
  { id: 'bs31', name: 'Sandalwood Incense Sticks', price: 5.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', category: 'Spiritual', rating: 4.6 },
  { id: 'bs32', name: 'Puja Camphor Tablets', price: 3.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', category: 'Spiritual', rating: 4.5 },
  { id: 'bs33', name: 'Rudraksha Mala Beads', price: 24.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', category: 'Spiritual', rating: 4.8 },
  { id: 'bs34', name: 'Copper Water Bottle', price: 19.99, image: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?w=600&q=80', category: 'Wellness', rating: 4.7 },
  { id: 'bs35', name: 'Brass Puja Diya Lamp', price: 15.99, image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80', category: 'Spiritual', rating: 4.9 },
];

const trendingProducts = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80',
    category: 'Electronics',
    rating: 4.8,
    badge: 'Trending',
  },
  {
    id: '2',
    name: 'Premium Leather Backpack',
    price: 129,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80',
    category: 'Fashion',
    rating: 4.6,
  },
  {
    id: '3',
    name: 'Smart Watch Series 5',
    price: 399,
    originalPrice: 499,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
    category: 'Electronics',
    rating: 4.9,
    badge: 'Hot',
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 79,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80',
    category: 'Home',
    rating: 4.5,
  },
  {
    id: '5',
    name: 'Running Shoes Pro',
    price: 159,
    originalPrice: 199,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
    category: 'Sports',
    rating: 4.7,
  },
  {
    id: '6',
    name: 'Portable Bluetooth Speaker',
    price: 89,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
    category: 'Electronics',
    rating: 4.4,
    badge: 'New',
  },
  {
    id: '7',
    name: 'Designer Sunglasses',
    price: 199,
    originalPrice: 299,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80',
    category: 'Fashion',
    rating: 4.6,
  },
  {
    id: '8',
    name: 'Yoga Mat Premium',
    price: 49,
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&q=80',
    category: 'Sports',
    rating: 4.8,
  },
];

const features = [
  {
    title: 'Free Shipping',
    description: 'On orders over $50',
  },
  {
    title: 'Secure Payment',
    description: '100% protected',
  },
  {
    title: 'Fast Delivery',
    description: '2-3 business days',
  },
  {
    title: 'Best Prices',
    description: 'Guaranteed value',
  },
];

export default function Home() {
  const [showBestSellers, setShowBestSellers] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-6 md:px-12 lg:px-16">
        <HeroSlider />
      </section>

      {/* Second Hero Section - Reversed Layout */}
      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-8 px-6 md:px-12 lg:px-16">
        <HeroSliderReverse />
      </section>

      {/* Category Navigation */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8">
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          <button 
            onClick={() => setShowBestSellers(!showBestSellers)}
            className={`px-5 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
              showBestSellers 
                ? 'bg-neutral-900 text-white' 
                : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
            }`}
          >
            Best Sellers
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Beauty & Personal Care
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Indian Fashion
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Women's Wellness
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Hair Care
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Sea Buckthorn
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Food
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Best Bargains
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Skin Care
          </button>
          <button className="px-5 py-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg text-sm font-medium whitespace-nowrap transition-colors">
            Herbal Drinks
          </button>
          <button className="p-2 bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400 rounded-lg transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Best Sellers Products Section */}
      {showBestSellers && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
              Best Sellers
            </h2>
            <p className="text-neutral-600">Our most popular products</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {bestSellerProducts.map((product) => (
              <div key={product.id} className="h-[420px]">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Promo Banner */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-16">
        <PromoBanner />
      </section>

      {/* Trending Products */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">
            Trending Products
          </h2>
          <p className="text-neutral-600">Popular items this week</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {trendingProducts.map((product) => (
            <div key={product.id} className="h-[420px]">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                category={product.category}
                rating={product.rating}
                badge={product.badge}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
