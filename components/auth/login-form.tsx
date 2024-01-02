import { CardWrapper } from "./card-wrapper"

type LoginFormProps = {}

export function LoginForm({}: LoginFormProps) {
  return (
    <CardWrapper
      headerLabel='Welcome back'
      backButtonLabel="Don't have an account?"
      backButtonHref='/auth/register'
      showSocial>
      LoginForm
    </CardWrapper>
  )
}
