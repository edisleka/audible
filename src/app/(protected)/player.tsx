import { View, Text, Pressable } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import { router } from 'expo-router'

export default function Player() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Pressable
        onPress={() => router.back()}
        className='absolute top-16 left-4 bg-gray-800 rounded-full p-2'
      >
        <Entypo name='chevron-down' size={24} color='white' />
      </Pressable>
      <Text className='text-white'>Player</Text>
    </View>
  )
}
