import { useState } from 'react'
import { View, Text, Pressable, GestureResponderEvent } from 'react-native'

interface PlaybackBarProps {
  currentTime: number
  duration: number
  onSeek: (time: number) => void
}

export default function PlaybackBar({
  currentTime,
  duration,
  onSeek,
}: PlaybackBarProps) {
  const [width, setWidth] = useState(0)
  const progress = currentTime / duration
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  const onHandleSeek = (event: GestureResponderEvent) => {
    const { locationX } = event.nativeEvent
    const seekTime = locationX / width
    const seekTimeInSeconds = Math.min(
      Math.max(seekTime * duration, 0),
      duration
    )

    onSeek(seekTimeInSeconds)
  }

  return (
    <View className='gap-4'>
      <Pressable
        className='w-full bg-slate-900 h-2 rounded-full justify-center'
        onPress={onHandleSeek}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
        hitSlop={20}
      >
        <View
          className='bg-orange-400 h-full rounded-full'
          style={{ width: `${progress * 100}%` }}
        />
        <View
          className='absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400'
          style={{ left: `${progress * 100}%` }}
        />
      </Pressable>
      <View className='flex-row items-center justify-between'>
        <Text className='text-white'>{formatTime(currentTime)}</Text>
        <Text className='text-white'>{formatTime(duration)}</Text>
      </View>
    </View>
  )
}
