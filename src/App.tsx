import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { AuthProvider } from "./contexts/authContext"

function App() {
  return(
    <BrowserRouter>
      <AuthProvider>
          <Routes />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
