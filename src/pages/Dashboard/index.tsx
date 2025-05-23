import { Header } from "../../components/Header"

function Dashboard() {
    return(
      <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-start justify-start">
        <Header/>
        <h1 className="text-2xl fond-bold text-[var(--color-input-text)]">Bem Vindo a tela do usuário</h1>
      </div>
      
    )
  }
  
  export default Dashboard
  