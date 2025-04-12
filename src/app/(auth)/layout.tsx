import { useAuth } from '@clerk/clerk-expo'
import { Stack, Redirect } from 'expo-router'

export default function AuthLayout() {
  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href='/' />
  }

  return <Stack />
}
