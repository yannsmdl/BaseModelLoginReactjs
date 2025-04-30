import { useEffect } from "react";
import ConnectCategory from "../../apis/category";
import { Header } from "../../components/header";
import useAuth from "../../hooks/useAuth";
import useTenant from "../../hooks/useTenant";

function DashboardAdmin() {
  const { tenant } = useTenant();
  const { user } = useAuth();

  const api = new ConnectCategory(user?.token || '',tenant?.url || '')

  const getAllCategorys = async() =>{
    const response = await api.getAll();
    console.log(response.data)
  } 

  useEffect(()=>{
    getAllCategorys()
  },[])

  return(
    <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-start justify-start">
      <Header/>
      <h1 className="text-2xl fond-bold text-white">Bem Vindo a tela do administrador</h1>
    </div>
  )
  }
  
  export default DashboardAdmin
  