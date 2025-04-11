import './global.css'
import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function App() {
  return (
    <View className='flex-1 items-center justify-center bg-slate-800'>
      <Text className='text-2xl text-gray-200 font-bold'>NativeWind</Text>
      <StatusBar style='auto' />
    </View>
  )
}
