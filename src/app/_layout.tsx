import { Slot, Stack } from 'expo-router'
import { ClerkProvider } from '@clerk/clerk-expo'
import '../../global.css'
import { DarkTheme, ThemeProvider } from '@react-navigation/native'
import { tokenCache } from '@clerk/clerk-expo/token-cache'
import { StatusBar } from 'expo-status-bar'
import PlayerProvider from '@/providers/PlayerProvider'

const theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#010D1A',
    card: '#010D1A',
    primary: 'white',
  },
}

export default function RootLayout() {
  return (
    <>
      <ClerkProvider tokenCache={tokenCache}>
        <ThemeProvider value={theme}>
          <PlayerProvider>
            <Slot />
          </PlayerProvider>
        </ThemeProvider>
      </ClerkProvider>
      <StatusBar style='light' />
    </>
  )
}
