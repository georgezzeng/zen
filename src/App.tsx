import { ThemeProvider } from '@/components/theme-provider.tsx'
import NavBar from '@/components/NavBar.tsx'

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar/>
      </ThemeProvider>

    </>
  )
}

export default App
