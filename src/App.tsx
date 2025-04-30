import { BrowserRouter } from "react-router-dom"
import Routes from "./routes"
import { AuthProvider } from "./contexts/authContext"
import { Toaster } from "react-hot-toast"
import { TenantProvider } from "./contexts/tenantContext"

function App() {
  return(
    <BrowserRouter>
      <TenantProvider>
        <AuthProvider>
            <Toaster/>
            <Routes />
        </AuthProvider>
      </TenantProvider>
    </BrowserRouter>
  )
}

export default App
