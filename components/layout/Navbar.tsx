'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, ShoppingCart, User, Menu, X, Heart } from 'lucide-react';
import Button from '../ui/Button';
import { useCart } from '@/contexts/CartContext';

const searchSuggestions = [
  'Tiger Balm Pain Relief',
  'Biofreeze Gel',
  'Mental Wellness Products',
  'Ayurvedic Medicine',
  'Organic Turmeric Powder',
  'Mamaearth Hair Oil',
  'Himalaya Ashwagandha',
  'Indian Pickles',
  'Vellanki Foods',
  'Pulla Reddy Sweets',
  'Copper Water Bottle',
  'Rudraksha Mala',
  'Sandalwood Incense',
  'Homeopathic Medicine',
  'Hair Care Products',
  'Beauty Products',
  'Wellness Supplements',
  'Traditional Sweets',
  'Herbal Products',
  'Spiritual Items'
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { state } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8)); // Show max 8 suggestions
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
      setFilteredSuggestions([]);
    }
  }, [searchQuery]);

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-white'
      }`}
    >
      {/* Top Row - Logo, Search, Actions */}
      <div className="border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group flex-shrink-0">
              <div className="relative">
                <div className="w-10 h-10 bg-blue-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
              </div>
              <div className="hidden md:flex flex-col">
                <span className="text-xl font-bold">
                  <span className="text-blue-600">M</span>
                  <span className="text-red-600">e</span>
                  <span className="text-yellow-600">g</span>
                  <span className="text-blue-600">a</span>
                  <span className="text-green-600">n</span>
                  <span className="text-red-600">e</span>
                  <span className="text-purple-600">s</span>
                  <span className="text-orange-600">t</span>
                </span>
                <span className="text-[10px] text-neutral-500 -mt-1">Premium Shopping</span>
              </div>
            </Link>
            
            {/* Search Bar */}
            <div className="hidden md:flex flex-1 mx-12">
              <div className="relative w-full" ref={searchRef}>
                <form onSubmit={handleSearchSubmit}>
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for products, brands and more..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                    className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    aria-label="Search products"
                  />
                </form>
                
                {/* Search Suggestions Dropdown */}
                {showSuggestions && filteredSuggestions.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 max-h-80 overflow-y-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-4 py-3 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-b-0 flex items-center gap-3"
                      >
                        <Search className="w-4 h-4 text-neutral-400" />
                        <span className="text-sm text-neutral-700">{suggestion}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-3 flex-shrink-0">
              {/* Currency Selector */}
              <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-white border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors cursor-pointer">
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <img src="https://flagcdn.com/w40/us.jpg" alt="US Flag" className="w-full h-full object-cover" />
                </div>
                <span className="text-sm font-medium text-neutral-700">US $</span>
                <svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              {/* Login */}
              <Link href="/auth" className="hidden md:flex items-center gap-2 px-4 py-2 text-neutral-700 hover:text-neutral-900 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="font-medium">Login</span>
              </Link>

              <button
                className="hidden md:block p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
              </button>
              
              <Link
                href="/cart"
                className="relative flex items-center gap-2 p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
                aria-label="Shopping cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden md:inline font-medium">Cart</span>
                {state.itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Link>
              
              <Link
                href="/account"
                className="hidden md:block p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </Link>
              
              <Button variant="primary" size="sm" className="hidden lg:inline-flex text-xs px-4 py-2">
                <Link href="/auth">Sign In</Link>
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-all"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Row - Navigation Sections */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-center h-12 gap-8">
            <div className="relative group">
              <Link href="/wellness" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
                Wellness
              </Link>
              {/* Wellness Mega Menu */}
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-2xl shadow-2xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8">
                <div className="grid grid-cols-3 gap-8">
                  {/* Column 1 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Wellness Categories</h3>
                    <ul className="space-y-2">
                      <li><Link href="/wellness/mental" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Mental Wellness</Link></li>
                      <li><Link href="/wellness/vitamins" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Vitamins & Supplements</Link></li>
                      <li><Link href="/wellness/herbal" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Herbal & Ayurvedic Products</Link></li>
                      <li><Link href="/wellness/personal-care" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Personal Care & Hygiene</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 2 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Health & Fitness</h3>
                    <ul className="space-y-2">
                      <li><Link href="/wellness/skincare" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Skincare Wellness</Link></li>
                      <li><Link href="/wellness/medical" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Medical & Health Devices</Link></li>
                      <li><Link href="/wellness/nutrition" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Nutrition & Healthy Foods</Link></li>
                      <li><Link href="/wellness/fitness" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Fitness & Recovery</Link></li>
                      <li><Link href="/wellness/sleep" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Sleep & Relaxation</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 3 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Shop by Concern</h3>
                    <ul className="space-y-2">
                      <li><Link href="/wellness/immunity" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Immunity</Link></li>
                      <li><Link href="/wellness/hair-fall" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Hair Fall</Link></li>
                      <li><Link href="/wellness/digestion" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Digestion</Link></li>
                      <li><Link href="/wellness/stress" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Stress Relief</Link></li>
                      <li><Link href="/wellness/weight" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Weight Management</Link></li>
                      <li><Link href="/wellness/joint" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Joint Support</Link></li>
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Baby & Family Wellness</p>
                      <p className="text-xs text-neutral-500">Complete care for your loved ones</p>
                    </div>
                    <Link href="/wellness/family" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      View All →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <Link href="/beauty" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
                Beauty & Personal Care
              </Link>
              {/* Beauty Mega Menu */}
              <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-2xl shadow-2xl border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-8">
                <div className="grid grid-cols-4 gap-6">
                  {/* Column 1 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Beauty Essentials</h3>
                    <ul className="space-y-2">
                      <li><Link href="/beauty/skincare" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Skincare</Link></li>
                      <li><Link href="/beauty/haircare" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Haircare</Link></li>
                      <li><Link href="/beauty/makeup" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Makeup</Link></li>
                      <li><Link href="/beauty/bath-body" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Bath & Body</Link></li>
                      <li><Link href="/beauty/fragrances" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Fragrances</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 2 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Personal Care</h3>
                    <ul className="space-y-2">
                      <li><Link href="/beauty/hygiene" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Personal Hygiene</Link></li>
                      <li><Link href="/beauty/mens-grooming" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Men's Grooming</Link></li>
                      <li><Link href="/beauty/tools" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Tools & Accessories</Link></li>
                      <li><Link href="/beauty/natural" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Natural & Organic Beauty</Link></li>
                      <li><Link href="/beauty/supplements" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Beauty Supplements</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 3 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Premium & Special</h3>
                    <ul className="space-y-2">
                      <li><Link href="/beauty/korean" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Korean & International</Link></li>
                      <li><Link href="/beauty/salon" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Salon & Professional</Link></li>
                      <li><Link href="/beauty/mom-baby" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Mom & Baby Care</Link></li>
                      <li><Link href="/beauty/travel" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Travel Size & Minis</Link></li>
                      <li><Link href="/beauty/gifts" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Gift Sets & Combos</Link></li>
                    </ul>
                  </div>
                  
                  {/* Column 4 */}
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-4 text-base">Shop by Concern</h3>
                    <ul className="space-y-2">
                      <li><Link href="/beauty/acne" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Acne Care</Link></li>
                      <li><Link href="/beauty/anti-aging" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Anti-Aging</Link></li>
                      <li><Link href="/beauty/dry-skin" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Dry & Sensitive Skin</Link></li>
                      <li><Link href="/beauty/hair-fall" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Hair Fall Control</Link></li>
                      <li><Link href="/beauty/dandruff" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Dandruff Care</Link></li>
                      <li><Link href="/beauty/pigmentation" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors block">Pigmentation</Link></li>
                    </ul>
                  </div>
                </div>
                
                {/* Bottom Section */}
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <div className="grid grid-cols-3 gap-4">
                    <Link href="/beauty/sun-protection" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                      Sun Protection
                    </Link>
                    <Link href="/beauty/brightening" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                      Body Whitening / Brightening
                    </Link>
                    <Link href="/beauty/intimate" className="text-sm text-neutral-600 hover:text-primary-600 transition-colors">
                      Intimate Care
                    </Link>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-neutral-900">Ayurveda & Natural Products</p>
                      <p className="text-xs text-neutral-500">Traditional beauty solutions</p>
                    </div>
                    <Link href="/beauty/ayurveda" className="text-sm font-medium text-primary-600 hover:text-primary-700">
                      Explore Ayurveda →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/food" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Food
            </Link>
            <Link href="/fashion" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Fashion Clothing
            </Link>
            <Link href="/baby-kids" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Baby & Kids
            </Link>
            <Link href="/home-kitchen" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Home Furnishing & Kitchen
            </Link>
            <Link href="/spirituality" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Spirituality
            </Link>
            <Link href="/holi-special" className="text-neutral-700 hover:text-primary-600 font-medium transition-colors whitespace-nowrap">
              Holi Special
            </Link>
            <div className="relative group">
              <button className="text-neutral-700 hover:text-primary-600 font-medium transition-colors flex items-center whitespace-nowrap">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-neutral-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/electronics" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors">
                    Electronics
                  </Link>
                  <Link href="/sports" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors">
                    Sports & Fitness
                  </Link>
                  <Link href="/books" className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-primary-600 transition-colors">
                    Books & Media
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-4 flex-shrink-0 xl:hidden">
            <button
              className="p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
              aria-label="Wishlist"
            >
              <Heart className="w-6 h-6" />
            </button>
            
            <Link
              href="/cart"
              className="relative p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-6 h-6" />
              {state.itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
                  {state.itemCount}
                </span>
              )}
            </Link>
            
            <Link
              href="/account"
              className="hidden md:block p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-xl transition-all"
              aria-label="Account"
            >
              <User className="w-6 h-6" />
            </Link>
            
            <Button variant="primary" size="sm" className="hidden md:inline-flex">
              Sign In
            </Button>
        </div>
        
        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit}>
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
                className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                aria-label="Search products"
              />
            </form>
            
            {/* Mobile Search Suggestions */}
            {showSuggestions && filteredSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-neutral-200 rounded-xl shadow-lg z-50 max-h-60 overflow-y-auto">
                {filteredSuggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-4 py-3 hover:bg-neutral-50 transition-colors border-b border-neutral-100 last:border-b-0 flex items-center gap-3"
                  >
                    <Search className="w-4 h-4 text-neutral-400" />
                    <span className="text-sm text-neutral-700">{suggestion}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-neutral-100 bg-white animate-slide-down">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/wellness"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Wellness
            </Link>
            <Link
              href="/beauty"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Beauty & Personal Care
            </Link>
            <Link
              href="/food"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Food
            </Link>
            <Link
              href="/fashion"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Fashion Clothing
            </Link>
            <Link
              href="/baby-kids"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Baby & Kids
            </Link>
            <Link
              href="/home-kitchen"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Home Furnishing & Kitchen
            </Link>
            <Link
              href="/spirituality"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Spirituality
            </Link>
            <Link
              href="/holi-special"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              Holi Special
            </Link>
            <Link
              href="/account"
              className="block px-4 py-3 text-neutral-700 hover:bg-neutral-50 rounded-xl transition-colors"
            >
              My Account
            </Link>
            <div className="pt-2">
              <Button variant="primary" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
