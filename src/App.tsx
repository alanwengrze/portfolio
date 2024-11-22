import { ThemeProvider } from "./components/theme-provider"
import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { Suspense, lazy } from "react"
import { Loading } from "./components/Loading"

const AllContent = lazy(() => import("./page/AllContent"))
function App() {

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      delay: 100
    })
  }, [])
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Suspense fallback={<Loading />}>
        <AllContent />
      </Suspense> 
    </ThemeProvider>
    
  )
}

export default App