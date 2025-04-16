import { Text, ActivityIndicator, FlatList } from 'react-native'
import { useSupabase } from '@/lib/supabase'
import { useQuery } from '@tanstack/react-query'
import BookListItem from '@/components/BookListItem'

export default function DiscoverScreen() {
  const supabase = useSupabase()

  const { data, error, isLoading } = useQuery({
    queryKey: ['books'],
    queryFn: () => supabase.from('books').select('*').throwOnError(),
  })

  if (isLoading) return <ActivityIndicator />

  if (error) return <Text>Error: {error.message}</Text>

  return (
    <FlatList
      data={data?.data || []}
      contentContainerClassName='gap-4 bg-green-500'
      renderItem={({ item }) => <BookListItem book={item} />}
    />
  )
}
