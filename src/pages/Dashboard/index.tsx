import useAuth from "../../hooks/useAuth";

function Dashboard() {
    const { logout, user } = useAuth();
    return(
      <div>
        <h1 className="text-3xl fond-bold text-red-500">Bem vindo {user?.userDecoded.username}, seu perfil é {user?.userDecoded.roles}</h1>
        <button onClick={logout}>Sair</button>
      </div>
      
    )
  }
  
  export default Dashboard
  