import { Lock } from "lucide-react"
import { Lexend } from "next/font/google"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { LoginButton } from "@/components/auth/login-button"

const font = Lexend({ subsets: ["latin"], weight: ["600"] })

export default function Home() {
  return (
    <main className='flex h-full flex-col items-center justify-center  bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400 to-blue-800'>
      <div className='space-y-6 text-center'>
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md grid grid-flow-col",
            font.className
          )}>
          <Lock className='my-auto h-12 w-12' />
          Auth
        </h1>
        <p className='text-white text-lg'>A simple authentication service</p>
        <div>
          <LoginButton mode='modal' asChild>
            <Button variant='secondary' size='lg'>
              Sign in
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
