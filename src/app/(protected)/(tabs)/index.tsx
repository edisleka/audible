import { StatusBar } from 'expo-status-bar'
import { FlatList } from 'react-native'
import BookListItem from '@/components/BookListItem'
import books from '@/books'

export default function App() {
  return (
    <>
      <FlatList
        data={books}
        contentContainerClassName='gap-4 bg-green-500'
        renderItem={({ item }) => <BookListItem book={item} />}
      />

      <StatusBar style='auto' />
    </>
  )
}
