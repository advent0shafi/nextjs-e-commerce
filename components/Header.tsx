import Link from 'next/link'
import { ShoppingCart, Search, Menu, User2Icon } from 'lucide-react'
import { Button, Input } from './ui'
import LogoutButton from './LogoutButton'


export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Golden Elegance
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/products" className="text-sm font-medium hover:text-primary">
            All Jewelry
          </Link>
          <Link href="/products?category=necklaces" className="text-sm font-medium hover:text-primary">
            Necklaces
          </Link>
          <Link href="/products?category=rings" className="text-sm font-medium hover:text-primary">
            Rings
          </Link>
          <Link href="/products?category=earrings" className="text-sm font-medium hover:text-primary">
            Earrings
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="hidden md:flex items-center">
            <Input type="search" placeholder="Search..." className="w-64" />
            <Button type="submit" size="icon" variant="ghost">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon">
              <User2Icon className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
          <LogoutButton/>
        </div>
      </div>
    </header>
  )
}