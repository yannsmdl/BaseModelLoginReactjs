import { createContext, useEffect, useState } from "react";
import { Tenant, TenantContextProps } from "../types/TenantTypes";
import { ProviderProps } from "../types/GlobalTypes";
import { useNavigate } from "react-router-dom";
import ConnectTenant from "../apis/tenant";


export const TenantContext = createContext<TenantContextProps | undefined>(undefined);

export const TenantProvider: React.FC<ProviderProps> = ({ children }) => {
    const [tenant, setTenant] = useState<Tenant | null>(null);
    const api = new ConnectTenant();

    const navigate = useNavigate();

    function getTenant() {
        const hostname = window.location.hostname;
        const tenant = hostname.split('.')[0];
        return tenant;
    }
    
    useEffect(() => {
        const fetchTenant = async () => {
            await existsTenant();
        };
        fetchTenant();
    }, [TenantProvider]);

    async function existsTenant(): Promise<void> {
        try {
            const tenantUrl = getTenant();
            await api.existsTenant(tenantUrl);
            setTenant({ url: tenantUrl });
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                navigate("/not-found");
            }, 0);
        }
    }

    return (
        <TenantContext.Provider value={{ existsTenant, tenant }}>
            {children}
        </TenantContext.Provider>
    );
}