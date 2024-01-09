import { FaExclamationTriangle } from "react-icons/fa"
import { CardWrapper } from "./card-wrapper"

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel='Oops! Something broken!'
      backButtonHref='/auth/login'
      backButtonLabel='Back to Login'>
      <div className='w-full flex justify-center items-center'>
        <FaExclamationTriangle className='h-10 w-10 text-destructive' />
      </div>
    </CardWrapper>
  )
}
