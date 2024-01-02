import { FaExclamationTriangle } from "react-icons/fa"

type FormErrorProps = {
  message?: string
}

export function FormError({ message }: FormErrorProps) {
  if (!message) return null

  return (
    <div className='p-3 bg-destructive/15 rounded-md flex items-center gap-x-2 text-sm text-destructive'>
      <FaExclamationTriangle className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}
