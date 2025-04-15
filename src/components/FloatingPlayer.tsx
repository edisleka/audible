import { View, Image, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { useAudioPlayerStatus } from 'expo-audio'
import { usePlayer } from '@/providers/PlayerProvider'

export default function FloatingPlayer() {
  const { player, book } = usePlayer()
  const status = useAudioPlayerStatus(player)

  if (!book) return null

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
          name={
            status.isBuffering
              ? 'loading1'
              : status.playing
              ? 'pause'
              : 'playcircleo'
          }
          size={24}
          color='gainsboro'
          onPress={() => (status.playing ? player.pause() : player.play())}
        />
      </Pressable>
    </Link>
  )
}
