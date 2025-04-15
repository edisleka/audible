import books from '@/books'
import { AudioPlayer, useAudioPlayer } from 'expo-audio'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

interface PlayerContextProps {
  player: AudioPlayer
  book: any
  setBook: (book: any) => void
}

const PlayerContext = createContext<PlayerContextProps | undefined>(undefined)

export default function PlayerProvider({ children }: PropsWithChildren) {
  const [book, setBook] = useState<any | null>(null)
  const player = useAudioPlayer({ uri: book?.audio_url })

  return (
    <PlayerContext.Provider value={{ player, book, setBook }}>
      {children}
    </PlayerContext.Provider>
  )
}

export const usePlayer = () => {
  const context = useContext(PlayerContext)
  if (!context) {
    throw new Error('usePlayer must be used within a PlayerProvider')
  }
  return context
}
