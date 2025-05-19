import { createContext, useState, useEffect } from "react";
import ConnectLogin from "../apis/login";
import { useNavigate } from "react-router-dom";
import { AuthContextProps, User, UserDecoded } from "../types/AuthTypes";
import * as jwt_decode from 'jwt-decode';
import toast from "react-hot-toast";
import { ProviderProps } from "../types/GlobalTypes";
import useTenant from "../hooks/useTenant";


export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    
    const { tenant } = useTenant();
    const api = new ConnectLogin(tenant?.url || '');

    const rolePathMap: Record<string, string> = {
        Admin: "/dashboard-admin",
        Manager: "/dashboard-manager",
        User: "/dashboard",
    };

    useEffect(() => {
        const user = localStorage.getItem("user");
        if (user) {
            const userPath: User | null = JSON.parse(user)
            setUser(userPath)
            navigate(rolePathMap[userPath?.userDecoded.roles ?? "/"] ?? "/")
        }
    }, []);
    const navigate = useNavigate();

    async function login(email: string, password: string) {
        try {
            const response = await api.login({ email, password });
            const data: User = response.data;
            const tokenData: UserDecoded = jwt_decode.jwtDecode(data.token);
            data.userDecoded = tokenData;
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            navigate(rolePathMap[data?.userDecoded.roles ?? "/"] ?? "/");
        } catch (error) {
            console.error("Error in login:", error);
            toast.error("Login ou senha inválidos");
            return;
        }
    }
    async function logout() {
        await api.logout(user?.token || "");
        setUser(null);
        localStorage.removeItem("user");
    }


    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
