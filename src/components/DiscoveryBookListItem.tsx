import { View, Image, Text, Pressable } from 'react-native'
import { Link } from 'expo-router'
import { AntDesign } from '@expo/vector-icons'
import { usePlayer } from '@/providers/PlayerProvider'
import { useSupabase } from '@/lib/supabase'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useUser } from '@clerk/clerk-expo'

interface Book {
  id: string
  title: string
  author: string
  thumbnail_url: string
  audio_url: string
}

interface DiscoveryBookListItemProps {
  book: Book
}

export default function DiscoveryBookListItem({
  book,
}: DiscoveryBookListItemProps) {
  const supabase = useSupabase()
  const queryClient = useQueryClient()
  const { user } = useUser()
  const { mutate } = useMutation({
    mutationFn: async () =>
      supabase
        .from('user-books')
        .insert({
          user_id: user?.id,
          book_id: book.id,
          position: 0,
        })
        .throwOnError(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my-books'] })
    },
  })

  return (
    <Pressable onPress={() => {}} className='flex-row gap-4 items-center '>
      <Image
        source={{ uri: book.thumbnail_url }}
        className='w-16 aspect-square rounded-md'
      />
      <View className='gap-1 flex-1'>
        <Text className='text-2xl text-gray-200 font-bold'>{book.title}</Text>
        <Text className='text-gray-400'>{book.author}</Text>
      </View>
      <AntDesign
        onPress={() => mutate()}
        name='plus'
        size={24}
        color='gainsboro'
      />
    </Pressable>
  )
}
