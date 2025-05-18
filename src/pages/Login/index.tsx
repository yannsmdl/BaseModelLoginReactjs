import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { ButtonNoBorder, Input } from "../../components/Utilities";
import logo from '../../assets/logo.png';
import ModalEsqueciSenha from "../../components/ModalEsqueciSenha";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  async function handleKeyPress(event: React.KeyboardEvent) {
      if(event.charCode === 13){
        login(userName, password)
      }
  }

  async function handleLogin(){
    login(userName, password)
  }

  const abrirModal = () =>{
      setIsOpen(!isOpen)
  }

  return (
    <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-center justify-center">
      <div className="mb-8">
        <img src={logo} alt="Logo" className="h-15" />
      </div>

      <div className="w-full max-w-md flex flex-col gap-4">
        <Input
          name="email"
          placeholder="E-mail"
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
      <div className="w-full max-w-md flex justify-center gap-x-4 mt-6">
        <ButtonNoBorder onClick={handleLogin}>
          Login
        </ButtonNoBorder>
        <ButtonNoBorder  onClick={abrirModal}>
          Esqueceu a senha?
        </ButtonNoBorder>
      </div>
      <ModalEsqueciSenha isOpen={isOpen} setIsOpen={setIsOpen}/>
    </div>
  );
  }
  
  export default Login
  