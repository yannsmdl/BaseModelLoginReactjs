import { useContext } from "react";
import { TenantContext } from "../contexts/tenantContext";

export default function useTenant() {
    const context = useContext(TenantContext)
    if (!context) throw new Error("useTenant must be used within an TenantProvider");
    return context;
}

