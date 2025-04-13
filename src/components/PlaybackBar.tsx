import { View } from 'react-native'

export default function PlaybackBar({ value }: { value: number }) {
  return (
    <View className='w-full bg-slate-900 h-2 rounded-full justify-center'>
      <View
        className='bg-orange-400 h-full rounded-full'
        style={{ width: `${value * 100}%` }}
      />
      <View
        className='absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400'
        style={{ left: `${value * 100}%` }}
      />
    </View>
  )
}
