import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui'
interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  }
  
  const products: Product[] = [
    {
        id: 1,
        name: 'Imperial Necklace',
        description: 'A regal necklace perfect for grand occasions.',
        price: 1299.99,
        image: '/products/product-1.jpg',
        rating: 4.5,
        reviews: 320,
      },
      {
        id: 2,
        name: 'Royal Bracelet',
        description: 'A stunning bracelet with intricate designs.',
        price: 799.99,
        image: '/products/product-2.jpg',
        rating: 4.2,
        reviews: 245,
      },
      {
        id: 3,
        name: 'Elegance Earrings',
        description: 'Classic earrings that never go out of style.',
        price: 299.99,
        image: '/products/product-3.jpg',
        rating: 4.8,
        reviews: 140,
      },
      {
        id: 4,
        name: 'Heritage Ring',
        description: 'A timeless ring with a vintage charm.',
        price: 499.99,
        image: '/products/product-4.jpg',
        rating: 4.6,
        reviews: 375,
      },
      {
        id: 5,
        name: 'Majestic Pendant',
        description: 'A pendant that radiates sophistication.',
        price: 399.99,
        image: '/products/product-5.jpg',
        rating: 4.3,
        reviews: 198,
      },
      {
        id: 6,
        name: 'Pearl Choker',
        description: 'A delicate choker adorned with pearls.',
        price: 349.99,
        image: '/products/product-6.jpg',
        rating: 4.7,
        reviews: 102,
      },
      {
        id: 7,
        name: 'Opal Cuff',
        description: 'A stylish cuff featuring opal gemstones.',
        price: 699.99,
        image: '/products/product-7.jpg',
        rating: 4.4,
        reviews: 215,
      },
      {
        id: 8,
        name: 'Sapphire Anklet',
        description: 'An elegant anklet with sapphire accents.',
        price: 249.99,
        image: '/products/product-8.jpg',
        rating: 4.1,
        reviews: 175,
      },
      {
        id: 9,
        name: 'Diamond Brooch',
        description: 'A brooch that sparkles with every move.',
        price: 1499.99,
        image: '/products/product-9.jpg',
        rating: 4.9,
        reviews: 89,
      },
      {
        id: 10,
        name: 'Emerald Tiara',
        description: 'A tiara fit for a queen, with emerald gems.',
        price: 1999.99,
        image: '/products/product-10.jpg',
        rating: 4.8,
        reviews: 68,
      },
      {
        id: 11,
        name: 'Ruby Charm',
        description: 'A charm that exudes warmth and passion.',
        price: 549.99,
        image: '/products/product-11.jpg',
        rating: 4.2,
        reviews: 112,
      },
      {
        id: 12,
        name: 'Onyx Pendant',
        description: 'A bold pendant for those who love black.',
        price: 449.99,
        image: '/products/product-12.jpg',
        rating: 4.6,
        reviews: 180,
      },
      {
        id: 13,
        name: 'Amethyst Studs',
        description: 'Subtle yet enchanting amethyst stud earrings.',
        price: 199.99,
        image: '/products/product-13.jpg',
        rating: 4.3,
        reviews: 245,
      },
  ];
export default function ProductDetailPage({ params }: { params: { id: number } }) {
  // In a real application, you would fetch the product details from an API or database
 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
          <Image
            src={products[params.id].image}
            alt={products[params.id].name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{products[params.id].name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(products[params.id].rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">({products[params.id].reviews} reviews)</span>
          </div>
          <p className="text-2xl font-bold mb-4">${products[params.id].price.toFixed(2)}</p>
          <p className="mb-6">{products[params.id].description}</p>
          <Button size="lg" className="w-full mb-4">Add to Cart</Button>
          <div className="border-t pt-6">
            <h2 className="text-lg font-semibold mb-2">{products[params.id].description} </h2> 
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>24 karat gold</li>
              <li>Handcrafted by expert artisans</li>
              <li>Comes with a certificate of authenticity</li>
              <li>Free shipping and 30-day returns</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}