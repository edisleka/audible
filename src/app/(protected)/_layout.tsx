import { useAuth } from '@clerk/clerk-expo'
import { Redirect, Stack } from 'expo-router'
import { ActivityIndicator } from 'react-native'
import { View } from 'react-native'
export default function ProtectedLayout() {
  const { isSignedIn, isLoaded } = useAuth()

  if (!isLoaded) {
    return (
      <View className='flex-1 justify-center items-center'>
        <ActivityIndicator size='large' color='#0000ff' />
      </View>
    )
  }

  if (!isSignedIn) {
    return <Redirect href='/sign-in' />
  }
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='player'
        options={{ headerShown: false, animation: 'fade_from_bottom' }}
      />
    </Stack>
  )
}
