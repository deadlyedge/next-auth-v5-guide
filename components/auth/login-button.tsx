"use client"

import { useRouter } from "next/navigation"

type LoginButtonProps = {
  children: React.ReactNode
  mode?: "modal" | "redirect"
  asChild?: boolean
}

export function LoginButton({
  children,
  mode = "redirect",
  asChild,
}: LoginButtonProps) {
  const router = useRouter()

  const onClick = () => {
    router.push(`/auth/login?mode=${mode}`)
  }

  if (mode === "modal") return <span>TODO: Implement modal</span>

  return (
    <span onClick={onClick} className='cursor-pointer'>
      {children}
    </span>
  )
}
