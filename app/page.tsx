import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui";
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
interface category {
  catogery: string;
  imgSrc: string;
}
const catogery: category[] = [
  { catogery: "Necklaces", imgSrc: "/category/catogery-01.jpg" },
  { catogery: "Ring", imgSrc: "/category/catogery-02.jpg" },
  { catogery: "Earrings", imgSrc: "/category/catogery-03.jpg" },
];
export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-16">
        <div className="relative h-[60vh] rounded-lg overflow-hidden">
          <Image
            src="/banner/closeup-portrait-gorgeous-young-woman-with-big-golden-earrings-using-eye-patches-pensive-european-girl-posing-turban.jpg"
            alt="Elegant gold necklace"
            fill
             loading="eager"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Timeless Elegance
              </h1>
              <p className="text-xl text-white mb-8">
                Discover our exquisite collection of gold jewelry
              </p>
              <Button size="lg">
                <Link href="/products">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {catogery.map((data, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden"
            >
              <Image
                src={`${data.imgSrc}`}
                alt={data.catogery}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <Button variant="secondary">
                  <Link
                    href={`/products?category=${data.catogery.toLowerCase()}`}
                  >
                    {data.catogery}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {products.map((pro, index) => (
              <Link key={index} href={`/products/${index}`}>
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={`${pro.image}`}
                  alt={`Product ${pro.name}`}
                  fill
                  loading="eager"
                  className="object-cover "
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-2">{pro.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{pro.description}</p>
                <p className="font-bold">{pro.price}</p>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
