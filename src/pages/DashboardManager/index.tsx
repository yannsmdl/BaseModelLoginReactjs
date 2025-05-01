import { Header } from "../../components/Header";

function DashboardManager() {
    return(
      <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-start justify-start">
        <Header/>
        <h1 className="text-2xl fond-bold text-[var(--color-input-text)]">Bem Vindo a tela do gerente</h1>
      </div>
      
    )
  }
  
  export default DashboardManager
  