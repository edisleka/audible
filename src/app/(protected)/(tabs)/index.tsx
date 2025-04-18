import { StatusBar } from 'expo-status-bar'
import { FlatList, ActivityIndicator, Text } from 'react-native'
import BookListItem from '@/components/BookListItem'
import books from '@/books'
import { useQuery } from '@tanstack/react-query'
import { useSupabase } from '@/lib/supabase'

export default function App() {
  const supabase = useSupabase()

  const { data, error, isLoading } = useQuery({
    queryKey: ['my-books'],
    queryFn: async () =>
      supabase.from('user-books').select('*, book:books(*)').throwOnError(),
  })

  if (isLoading) return <ActivityIndicator />

  if (error) return <Text>Error: {error.message}</Text>

  console.log(JSON.stringify(data?.data, null, 2))

  return (
    <>
      <FlatList
        data={data?.data || []}
        contentContainerClassName='gap-4'
        renderItem={({ item }) => <BookListItem book={item.book} />}
      />

      <StatusBar style='auto' />
    </>
  )
}
