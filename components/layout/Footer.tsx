import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-neutral-700 mt-20 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">M</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold">
                  <span className="text-blue-600">M</span>
                  <span className="text-red-600">e</span>
                  <span className="text-yellow-600">g</span>
                  <span className="text-blue-600">a</span>
                  <span className="text-green-600">n</span>
                  <span className="text-red-600">e</span>
                  <span className="text-purple-600">s</span>
                  <span className="text-orange-600">t</span>
                </span>
                <span className="text-xs text-neutral-500">Premium Shopping</span>
              </div>
            </div>
            <p className="text-sm mb-4">
              Your premium destination for quality products and exceptional shopping experience.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/categories" className="hover:text-neutral-900 transition-colors">All Categories</Link></li>
              <li><Link href="/deals" className="hover:text-neutral-900 transition-colors">Special Deals</Link></li>
              <li><Link href="/new" className="hover:text-neutral-900 transition-colors">New Arrivals</Link></li>
              <li><Link href="/brands" className="hover:text-neutral-900 transition-colors">Top Brands</Link></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="hover:text-neutral-900 transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-neutral-900 transition-colors">FAQ</Link></li>
              <li><Link href="/shipping" className="hover:text-neutral-900 transition-colors">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-neutral-900 transition-colors">Returns</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-neutral-900 font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-neutral-900 transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-neutral-900 transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-neutral-900 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-neutral-900 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Meganest. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
