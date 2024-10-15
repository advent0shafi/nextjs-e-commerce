'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState }   from 'react'

import { Trash2 } from 'lucide-react'
import { Button, Input } from '@/components/ui'

export default function CartPage() {
  // In a real application, you would manage the cart state with a more robust solution like Redux or React Context
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Gold Necklace', price: 999.99, quantity: 1, image: '/products/product-1.jpg' },
    { id: 2, name: 'Gold Ring', price: 599.99, quantity: 2, image: '/products/product-2.jpg' },
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
    ))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 10 // Fixed shipping cost
  const total = subtotal + shipping

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link href="/products" className="text-primary hover:underline">Continue shopping</Link></p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center border-b py-4">
                <div className="relative w-24 h-24 mr-4">
                  <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" className="rounded" />
                </div>
                <div className="flex-grow">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </Button>
                    <Input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      className="w-16 mx-2 text-center"
                    />
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeItem(item.id)} className="mt-2">
                    <Trash2 className="h-4 w-4" />
                    <span className="sr-only">Remove item</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Button  className="w-full mt-6">
                <Link href="/checkout">Proceed to Checkout</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}