'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input, Label } from '@/components/ui'
import { CheckCheckIcon, LoaderCircleIcon } from 'lucide-react'


export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 3000)
  }

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Forgot password</CardTitle>
          <CardDescription>
            Enter your email address and we will send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!isSubmitted ? (
            <form onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  autoCapitalize="none"
                  autoComplete="email"
                  autoCorrect="off"
                  disabled={isLoading}
                />
              </div>
              <Button className="w-full mt-4" type="submit" disabled={isLoading}>
                {isLoading && (
                  <LoaderCircleIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Send reset link
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <CheckCheckIcon className="w-12 h-12 mx-auto text-green-500 mb-4" />
              <p>Check your email for a link to reset your password.</p>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <div className="text-center text-sm text-muted-foreground w-full">
            Remember your password?{" "}
            <Link className="hover:text-primary underline underline-offset-4" href="/login">
              Sign in
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}