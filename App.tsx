import './global.css'
import { StatusBar } from 'expo-status-bar'
import { View, FlatList } from 'react-native'
import books from './src/books'
import BookListItem from './src/components/BookListItem'

export default function App() {
  return (
    <View className='flex-1 justify-center bg-slate-800'>
      <FlatList
        data={books}
        contentContainerClassName='gap-4'
        renderItem={({ item }) => <BookListItem book={item} />}
      />

      <StatusBar style='auto' />
    </View>
  )
}
