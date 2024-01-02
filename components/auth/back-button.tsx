"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

type BackButtonProps = {
  href: string
  label: string
}

export function BackButton({ label, href }: BackButtonProps) {
  return (
    <Button variant='link' className='font-normal w-full' size='sm' asChild>
      <Link href={href}>{label}</Link>
    </Button>
  )
}
