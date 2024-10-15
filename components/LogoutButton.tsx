'use client'

import { useRouter } from 'next/navigation'
import { Button } from './ui'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = () => {
    // Here you would typically clear the user's session or token
    // For example:
    // localStorage.removeItem('token')
    
    // Then redirect to the login page
    router.push('/login')
  }

  return (
    <Button onClick={handleLogout} variant="ghost">
      Logout
    </Button>
  )
}