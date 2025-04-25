import { useState } from "react";
import useAuth from "../../hooks/useAuth";

function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useAuth();
    async function handleLogin() {
      login(userName, password)
    }

    return(
      <div>
        <h1>Login</h1>
        <input type="text" placeholder="Usuário" value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    )
  }
  
  export default Login
  