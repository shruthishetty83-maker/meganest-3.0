'use client';

import { useState } from 'react';
import ProductCard from '@/components/ui/ProductCard';
import { Heart, Filter, ChevronDown } from 'lucide-react';

const topicalProducts = [
  { id: '1', name: 'Tiger Balm Pain Relieving Ointment', price: 12.99, image: '/tb.webp', category: 'Topical Relief', rating: 4.7 },
  { id: '2', name: 'Icy Hot Cream', price: 9.99, image: '/icy.webp', category: 'Topical Relief', rating: 4.5 },
  { id: '3', name: 'Bengay Ultra Strength Cream', price: 11.49, image: '/bengay.webp', category: 'Topical Relief', rating: 4.6 },
  { id: '4', name: 'Biofreeze Pain Relief Gel', price: 14.99, image: '/bio.webp', category: 'Topical Relief', rating: 4.8 },
  { id: '5', name: 'Salonpas Pain Relieving Patch', price: 8.99, image: '/pain.webp', category: 'Topical Relief', rating: 4.4 },
  { id: '6', name: 'TheraGel Cold Therapy Gel', price: 13.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '7', name: 'Voltaren Arthritis Pain Gel', price: 16.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.9 },
  { id: '8', name: 'Tiger Balm Muscle Rub', price: 11.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '9', name: 'Blue-Emu Original Super Strength Cream', price: 15.49, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '10', name: 'Capzasin-HP Capsaicin Cream', price: 10.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.3 },
  { id: '11', name: 'Penetrex Pain Relief Therapy', price: 19.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.8 },
  { id: '12', name: 'Aspercreme Maximum Pain Relief Cream', price: 12.49, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '13', name: 'Moab Muscle Rub', price: 14.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '14', name: 'Arnicare Gel (by Boiron)', price: 11.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '15', name: 'Sombra Warm Therapy Natural Pain Relieving Gel', price: 16.49, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '16', name: 'Carmex Muscle & Joint Pain Relief', price: 9.49, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.4 },
  { id: '17', name: 'Natures Sunshine Muscle Ease', price: 13.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '18', name: 'Absorbine Jr. Liniment', price: 10.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '19', name: 'Bio Metals® Pain Relief Cream', price: 17.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '20', name: 'MagniLife Magnesium Lotion', price: 15.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '21', name: 'Ancient Minerals Magnesium Rub', price: 18.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.8 },
  { id: '22', name: 'Pure Relief Pain Relieving Balm (Curamin)', price: 19.49, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '23', name: "Dr. Teal's Muscle Therapy Gel", price: 12.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '24', name: 'CBDistillery CBD Muscle Rub', price: 29.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.8, badge: 'CBD' },
  { id: '25', name: "Charlotte's Web CBD Recover Balm", price: 34.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.9, badge: 'CBD' },
  { id: '26', name: 'Hempvana Muscle & Joint Relief Cream', price: 24.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.6, badge: 'CBD' },
  { id: '27', name: 'Boiron Traumeel Ointment', price: 13.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '28', name: 'Relax Muscle & Joint Roll-On', price: 11.49, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '29', name: 'Salonpas Hot Spray', price: 10.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.4 },
  { id: '30', name: 'Tiger Balm Patch Clovers', price: 9.99, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '31', name: 'Blue-Emu Gel with MSM', price: 16.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
  { id: '32', name: 'Penetrex Pro Healing Balm', price: 21.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.8 },
  { id: '33', name: 'Green-Relief Roll-On Gel', price: 14.49, image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&q=80', category: 'Topical Relief', rating: 4.5 },
  { id: '34', name: 'Zostrix HP High Potency Cream', price: 15.99, image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80', category: 'Topical Relief', rating: 4.6 },
  { id: '35', name: 'TheraPearl Soft Pack', price: 19.99, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80', category: 'Topical Relief', rating: 4.7 },
];

const oralSupplements = [
  { id: '36', name: 'Natural Vitality CALM Magnesium Powder', price: 24.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '37', name: 'Nature Made Magnesium Gummies', price: 14.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '38', name: 'Mega Magnesium Complex (Garden of Life)', price: 29.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '39', name: 'Magnesium Bisglycinate (Pure Encapsulations)', price: 32.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.9 },
  { id: '40', name: 'NOW Magnesium Citrate Capsules', price: 16.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '41', name: 'Calmful Sleep by SmartyPants', price: 21.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '42', name: 'Magtech Magnesium Capsules', price: 34.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '43', name: 'Natural Factors Magnesium Malate', price: 18.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '44', name: 'Life Extension Magnesium Caps', price: 22.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '45', name: 'Ancient Nutrition Magnesium + Aminos', price: 27.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '46', name: "Nature's Bounty Magnesium Softgels", price: 13.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '47', name: "Doctor's Best High Absorption Magnesium", price: 19.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '48', name: 'Jigsaw Health Magnesium w/SRT', price: 36.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.9 },
  { id: '49', name: 'KAL Magnesium Glycinate 400', price: 17.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '50', name: 'BioEmbrace Magnesium Oil Spray', price: 15.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '51', name: 'Trace Minerals Magnesium Charge', price: 23.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '52', name: 'Calm Support Herbal Capsules (Gaia Herbs)', price: 28.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '53', name: 'Herb Pharm Muscle Relax Extract', price: 26.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '54', name: 'Solaray Magnesium Taurate', price: 20.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '55', name: 'Pure Encapsulations Magnesium (Glycinate)', price: 31.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.9 },
  { id: '56', name: 'Magnesium L-Threonate (Magtein)', price: 39.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.9 },
  { id: '57', name: 'Thorne Magnesium Bisglycinate', price: 33.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '58', name: "Nature's Truth Magnesium Gummies", price: 12.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '59', name: 'Vitafusion Magnesium Gummy Vitamins', price: 14.49, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '60', name: 'Bluebonnet Magnesium Citrate', price: 19.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '61', name: 'Alive! Magnesium Gummies', price: 13.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '62', name: 'Magnesium Orotate (Cardio Miracle)', price: 35.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '63', name: 'Enzymatic Therapy Mg-Citrate', price: 17.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '64', name: 'Natural Calm + Sleep Raspberry Lemon', price: 26.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '65', name: 'Swanson Magnesium Complex', price: 15.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '66', name: 'Flora Magnesium Relaxer', price: 21.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '67', name: 'Magnesium L-Arginate Complex', price: 29.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '68', name: 'Pure Synergy Organic Magnesium', price: 37.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '69', name: 'NutraBio Magnesium Caps', price: 18.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.6 },
  { id: '70', name: 'HUM Nutrition Calm AF', price: 25.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7, badge: 'Popular' },
  { id: '71', name: 'MegaFood Magnesium', price: 28.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '72', name: "Nature's Answer Magnesium Tablets", price: 16.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.5 },
  { id: '73', name: 'Magnesium Glycinate by Vital Nutrients', price: 30.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
  { id: '74', name: 'Bluebonnet Chelated Magnesium', price: 22.99, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&q=80', category: 'Oral Supplements', rating: 4.7 },
  { id: '75', name: 'Healthy Origins Magnesium Glycinate', price: 24.99, image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80', category: 'Oral Supplements', rating: 4.8 },
];

export default function MentalWellnessPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'topical' | 'oral'>('all');
  const [sortBy, setSortBy] = useState('featured');

  const displayProducts = activeCategory === 'all' 
    ? [...topicalProducts, ...oralSupplements]
    : activeCategory === 'topical' 
    ? topicalProducts 
    : oralSupplements;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full h-[550px] md:h-[650px] overflow-hidden relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/mental.png"
            alt="Mental Wellness and Relaxation"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </section>

      {/* Category Tabs & Filters */}
      <section className="sticky top-16 z-30 bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveCategory('topical')}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === 'topical'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                Topical Relief
              </button>
              <button
                onClick={() => setActiveCategory('oral')}
                className={`px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                  activeCategory === 'oral'
                    ? 'bg-neutral-900 text-white'
                    : 'bg-white text-neutral-700 border border-neutral-300 hover:border-neutral-400'
                }`}
              >
                Oral Supplements
              </button>
            </div>

            {/* Sort & Filter */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-medium">Filter</span>
              </button>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none px-4 py-2 pr-10 bg-neutral-100 hover:bg-neutral-200 rounded-lg text-sm font-medium cursor-pointer transition-colors"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Products Grid */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            {activeCategory === 'all' && 'All Products'}
            {activeCategory === 'topical' && 'Topical Relief Products'}
            {activeCategory === 'oral' && 'Oral Supplements'}
          </h2>
          <p className="text-neutral-600">
            Showing {displayProducts.length} products
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              rating={product.rating}
              badge={product.badge}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
