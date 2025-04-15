import { View, Image, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import books from '@/books'
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio'
export default function FloatingPlayer() {
  const book = books[0]
  const player = useAudioPlayer({ uri: book.audio_url })
  const status = useAudioPlayerStatus(player)

  return (
    <Link href='/player' className='text-white' asChild>
      <Pressable className='flex-row gap-4 items-center bg-slate-900 p-2'>
        <Image
          source={{ uri: book.thumbnail_url }}
          className='w-16 aspect-square rounded-md'
        />
        <View className='gap-1 flex-1'>
          <Text className='text-2xl text-gray-200 font-bold'>{book.title}</Text>
          <Text className='text-gray-400'>{book.author}</Text>
        </View>
        <AntDesign
          name={status.playing ? 'pause' : 'playcircleo'}
          size={24}
          color='gainsboro'
          onPress={() => (status.playing ? player.pause() : player.play())}
        />
      </Pressable>
    </Link>
  )
}
