import { createContext, useState, useEffect } from "react";
import ConnectLogin from "../apis/login";
import { useNavigate } from "react-router-dom";
import { AuthContextProps, ProviderProps, User, UserDecoded } from "../types/AuthTypes";
import * as jwt_decode from 'jwt-decode';


export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const api = new ConnectLogin();

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
        const response = await api.login({ email, password });
        if (response.status !== 200) {
            throw new Error("Login failed");
        }
        const data: User = response.data;
        const tokenData: UserDecoded = jwt_decode.jwtDecode(data.token);
        data.userDecoded = tokenData;
        setUser(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate(rolePathMap[data?.userDecoded.roles ?? "/"] ?? "/")
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
