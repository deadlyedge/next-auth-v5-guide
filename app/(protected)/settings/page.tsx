"use client"
// import { auth, signOut } from "@/auth"
import { logout } from "@/actions/logout"

import { Button } from "@/components/ui/button"
import { useCurrentUser } from "@/hooks/use-current-user"

export default function SettingsPage() {
  const user = useCurrentUser()

  const onClick = () => {
    logout()
  }

  return (
    <div>
      {JSON.stringify(user)}
      <form>
        <Button onClick={onClick} type='submit'>
          Log Out
        </Button>
      </form>
    </div>
  )
}
