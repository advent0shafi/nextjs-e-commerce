'use client'

import { Button, Input, Label, RadioGroup, RadioGroupItem, Select } from '@/components/ui'
import { useState } from 'react'


export default function CheckoutPage() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="max-w-2xl mx-auto">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="John" />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Doe" />
              </div>
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="New York" />
              </div>
              <div>
                <Label htmlFor="zipCode">ZIP Code</Label>
                <Input id="zipCode" placeholder="10001" />
              </div>
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select id="country">
                <option value="">Select a country</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </Select>
            </div>
            <Button onClick={nextStep} className="w-full">Continue to Payment</Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expirationDate">Expiration Date</Label>
                <Input id="expirationDate" placeholder="MM/YY" />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" />
              </div>
            </div>
            <div>
              <Label htmlFor="nameOnCard">Name on Card</Label>
              <Input id="nameOnCard" placeholder="John Doe" />
            </div>
            <RadioGroup defaultValue="credit">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit">Credit Card</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="debit" id="debit" />
                <Label htmlFor="debit">Debit Card</Label>
              </div>
            </RadioGroup>
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={nextStep}>Review Order</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold mb-4">Review Your Order</h2>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Order Summary</h3>
              <p>2 items in your cart</p>
              <p>Total: $1,599.98</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Shipping Address</h3>
              <p>John Doe</p>
              <p>123 Main St</p>
              <p>New York, NY 10001</p>
              <p>United States</p>
            </div>
            <div className="border p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <p>Credit Card ending in 3456</p>
            </div>
            <div className="flex justify-between">
              <Button onClick={prevStep} variant="outline">Back</Button>
              <Button onClick={() => alert('Order placed successfully!')}>Place Order</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}