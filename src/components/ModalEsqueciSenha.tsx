import { useState, useEffect, KeyboardEvent } from "react";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Button, Input } from "./Utilities";

interface ModalEsqueciSenhaProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const ModalEsqueciSenha: React.FC<ModalEsqueciSenhaProps> = ({
  isOpen,
  setIsOpen,
}) => {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();

  useEffect(() => {
    if (!isOpen) setEmail("");
  }, [isOpen]);

  const fecharModal = () => {
    setIsOpen(false);
  };

  const validarCampos = () => {
    if (!email) {
      toast.error("Informe o e-mail");
      return false;
    }
    return true;
  };

  const handleEsqueciSenha = async () => {
    if (!validarCampos()) return;
    try {
      forgotPassword(email);
      toast.success("Se o e-mail estiver correto, será enviado um e-mail para redefinição da senha");
      fecharModal();
    } catch (error) {
      console.error("Error in forgot password:", error);
      toast.error("Erro ao enviar e-mail de recuperação");
    }
  };

  const keyEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleEsqueciSenha();
    }
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
            <DialogPanel className="max-w-lg space-y-4 border rounded-lg border-[var(--color-input-text)] bg-[var(--color-secundary)] p-12">
                <DialogTitle className="text-lg font-bold leading-6 text-[var(--color-input-text)] mb-6 text-center">Recuperação de senha</DialogTitle>  
                <Input
                    type="email"
                    placeholder="Email Cadastrado"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyDown={keyEnter}
                />
                <div className="w-full max-w-md flex justify-center gap-x-4 mt-6">
                    <Button onClick={handleEsqueciSenha} >
                        Enviar
                    </Button> 
                </div>
              
            </DialogPanel>
        </div>
    </Dialog>
  );
};

export default ModalEsqueciSenha;
