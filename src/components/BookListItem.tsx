import { View, Image, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

interface Book {
  id: string
  title: string
  author: string
  thumbnail_url: string
  audio_url: string
}

interface BookListItemProps {
  book: Book
}

export default function BookListItem({ book }: BookListItemProps) {
  return (
    <View className='flex-row gap-4 items-center bg-green-400'>
      <Image
        source={{ uri: book.thumbnail_url }}
        className='w-16 aspect-square rounded-md'
      />
      <View className='gap-1 flex-1'>
        <Text className='text-2xl text-gray-200 font-bold'>{book.title}</Text>
        <Text className='text-gray-400'>{book.author}</Text>
      </View>
      <AntDesign name='playcircleo' size={24} color='gainsboro' />
    </View>
  )
}
