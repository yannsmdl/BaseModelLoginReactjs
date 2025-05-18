import { useSearchParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import logo from '../../assets/logo.png';
import { Button, Input } from '../../components/Utilities';
import toast from 'react-hot-toast';

export default function RedefinirSenha() {
    const [searchParams] = useSearchParams();
    const { validTokenForgotPassword, resetPassword } = useAuth();
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const token = searchParams.get('token') || '';
    const email = searchParams.get('email') || '';

    const hasValidatedRef = useRef(false);

    useEffect(() => {
    if (!hasValidatedRef.current) {
        hasValidatedRef.current = true;
        validTokenForgotPassword(token, email);
    }
    }, [token, email]);

    async function handleKeyPress(event: React.KeyboardEvent) {
        if(event.charCode === 13){
            handleChangePassword()
        }
    }

    function validarSenha() {
        if (password !== confirmPassword) {
            return { valid: false, message: "As senhas não são iguais." };
        }

        if (password.length < 8) {
            return { valid: false, message: "A senha deve ter pelo menos 8 caracteres." };
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            return { valid: false, message: "A senha deve conter pelo menos 1 símbolo." };
        }

        if (!/[0-9]/.test(password)) {
            return { valid: false, message: "A senha deve conter pelo menos 1 número." };
        }

        if (!/[a-z]/.test(password)) {
            return { valid: false, message: "A senha deve conter pelo menos 1 letra minúscula." };
        }

        if (!/[A-Z]/.test(password)) {
            return { valid: false, message: "A senha deve conter pelo menos 1 letra maiúscula." };
        }

        return { valid: true, message: "Senha válida!" };
        }

    async function handleChangePassword(){
        const { valid, message } = validarSenha();
        if (!valid)
        {
            toast.error(message);
            return;
        }
        resetPassword(token, email, password);
    }

    return (
        <div className="min-h-screen bg-[var(--color-primary)] flex flex-col items-center justify-center">
            <div className="mb-8">
                <img src={logo} alt="Logo" className="h-15" />
            </div>
            <div className="w-full text-center mb-8">
                <h1 className="text-xl font-bold text-[var(--color-input-text)]">
                    Recuperação de Senha
                </h1>
            </div>
            <div className="w-full max-w-md flex flex-col gap-4">
                <Input
                    name="password"
                    placeholder="Senha"
                    type="password"
                    value={password}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                    name="confirmPassword"
                    placeholder="Confirmar Senha"
                    type="password"
                    value={confirmPassword}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                </div>
                <div className="w-full max-w-md flex justify-center gap-x-4 mt-6">
                <Button onClick={handleChangePassword}>
                    Alterar
                </Button>
            </div>
        </div>
    );
}