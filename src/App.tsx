import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { AuthProvider } from "./contexts/authContext"
import { Toaster } from "react-hot-toast"

function App() {
  return(
    <BrowserRouter>
      <AuthProvider>
          <Toaster/>
          <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
