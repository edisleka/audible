import { View, Text, Pressable, Image } from 'react-native'
import { Entypo, Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import books from '@/books'
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio'
import PlaybackBar from '@/components/PlaybackBar'

export default function PlayerScreen() {
  const book = books[0]
  const player = useAudioPlayer({ uri: book.audio_url })
  const status = useAudioPlayerStatus(player)
  // console.log(JSON.stringify(status, null, 2))

  return (
    <SafeAreaView className='flex-1 py-20 p-4 gap-4'>
      <Pressable
        onPress={() => router.back()}
        className='absolute top-16 left-4 bg-gray-800 rounded-full p-2'
      >
        <Entypo name='chevron-down' size={24} color='white' />
      </Pressable>

      <Image
        source={{ uri: book.thumbnail_url }}
        className='w-[95%] aspect-square rounded-[30px] self-center'
        style={{ aspectRatio: 1 }}
      />

      <View className='flex-1 gap-8 justify-end'>
        <Text className='text-white text-2xl font-bold text-center'>
          {book.title}
        </Text>

        <PlaybackBar
          currentTime={status.currentTime}
          duration={status.duration}
          onSeek={(time) => player.seekTo(time)}
        />

        <View className='flex-row items-center justify-between mt-8 '>
          <Ionicons name='play-skip-back' size={24} color='red' />
          <Ionicons name='play-back' size={24} color='white' />

          <Ionicons
            name={status.playing ? 'pause' : 'play'}
            size={50}
            color='white'
            onPress={() => (status.playing ? player.pause() : player.play())}
          />

          <Ionicons name='play-forward' size={24} color='white' />
          <Ionicons name='play-skip-forward' size={24} color='white' />
        </View>
      </View>
    </SafeAreaView>
  )
}
