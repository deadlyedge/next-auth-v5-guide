import { Navbar } from "./_components/navbar"

type ProtectedLayoutProps = { children: React.ReactNode }

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className='h-full w-full flex flex-col gap-y-4 items-center justify-center overflow-auto bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-pink-400 to-blue-800'>
      <Navbar />
      {children}
    </div>
  )
}
