import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Input from "../../components/utilities";
import logo from '../../assets/logo.png';

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  async function handleKeyPress(event: React.KeyboardEvent) {
      if(event.charCode === 13){
        login(userName, password)
      }
  }

  return (
    <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-center justify-center">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-50" />
      </div>

      <div className="w-full max-w-xs flex flex-col gap-4">
        <Input
          name="email"
          placeholder="Login"
          type="email"
          value={userName}
          onKeyPress={handleKeyPress}
          onChange={(e) => setUserName(e.target.value)}
        />
        <Input
          name="password"
          placeholder="Senha"
          type="password"
          value={password}
          onKeyPress={handleKeyPress}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    </div>
  );
  }
  
  export default Login
  