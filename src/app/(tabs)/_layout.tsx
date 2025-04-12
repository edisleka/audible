import { Tabs, Redirect } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import { useAuth } from '@clerk/clerk-expo'
import { ActivityIndicator, View } from 'react-native'
export default function TabsLayout() {
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
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Library',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='library' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='discover'
        options={{
          title: 'Discover',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='person' size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
