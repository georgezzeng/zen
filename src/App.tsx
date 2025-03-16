import { ThemeProvider } from '@/components/theme-provider.tsx'
import NavBar from '@/components/NavBar.tsx'
import HomePage from "@/pages/HomePage.tsx";

function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavBar/>
          <HomePage></HomePage>
      </ThemeProvider>

    </>
  )
}

export default App
