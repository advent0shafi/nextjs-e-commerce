import Link from 'next/link'
import Image from 'next/image'
import { Button, Input, Select } from '@/components/ui'

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    reviews: number;
  }
  export const products: Product[] = [
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
export default function ProductsPage() {
  // In a real application, you would fetch products from an API or database


  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Jewelry</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Input type="search" placeholder="Search products..." className="md:w-64" />
        <Select>
          <option value="">All Categories</option>
          <option value="necklaces">Necklaces</option>
          <option value="rings">Rings</option>
          <option value="earrings">Earrings</option>
        </Select>
        <Select>
          <option value="">Sort by</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product,index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="relative h-64">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">{product.name}</h3>
              <p className="font-bold mb-2">${product.price.toFixed(2)}</p>
              <Button  className="w-full">
                <Link href={`/products/${index}`}>View Details</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}