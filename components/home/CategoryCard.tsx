import Link from 'next/link';

interface CategoryCardProps {
  name: string;
  image: string;
  productCount: number;
  link: string;
}

export default function CategoryCard({ name, image, productCount, link }: CategoryCardProps) {
  return (
    <Link href={link} className="group">
      <div className="relative h-48 rounded-2xl overflow-hidden shadow-soft border border-neutral-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <div 
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-1">{name}</h3>
          <p className="text-white/80 text-sm mb-3">{productCount} Products</p>
          <div className="flex items-center text-sm font-medium group-hover:gap-2 transition-all">
            <span>Shop Now</span>
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
