import { Lexend } from "next/font/google"

import { cn } from "@/lib/utils"
import { Lock } from "lucide-react"

const font = Lexend({ subsets: ["latin"], weight: ["600"] })

type HeaderProps = {
  label: string
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>
      <h1
        className={cn(
          "text-3xl font-semibold drop-shadow-md grid grid-flow-col",
          font.className
        )}>
        <Lock className='my-auto h-6 w-6 mr-2' />
        Auth
      </h1>
      <p className='text-sm text-muted-foreground'>{label}</p>
    </div>
  )
}
