'use client'

import { createContext, useContext, useState, useEffect } from 'react'

type User = {
  id: string
  email: string
  // Add other user properties as needed
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if user is logged in (e.g., by checking for a token in localStorage)
    const token = localStorage.getItem('token')
    if (token) {
      // Fetch user data using the token
      // This is just a placeholder, replace with actual API call
      setUser({ id: '1', email: 'user@example.com' })
    }
  }, [])

  const login = async (email: string, ) => {
    // Implement your login logic here
    // This is just a placeholder, replace with actual API call
    setUser({ id: '1', email })
    localStorage.setItem('token', 'fake-token')
  }

  const signup = async (email: string, ) => {
    // Implement your signup logic here
    // This is just a placeholder, replace with actual API call
    setUser({ id: '1', email })
    localStorage.setItem('token', 'fake-token')
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}