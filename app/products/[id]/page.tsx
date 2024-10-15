import Image from 'next/image'
import { Star } from 'lucide-react'
import { Button } from '@/components/ui'
import { products } from '@/app/page'

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