import axios from "axios";
import { AxiosResponse } from 'axios';


const httpCliente = axios.create({
    baseURL: "https://localhost:5001/api"
});

class ApiService {
    public apiurl: string = ""
    public token: string | null = ""
    public tenantUrl: string | null = ""
    
    constructor(apiurl: string, token: string | null, tenantUrl: string | null){
        this.apiurl=apiurl
        this.token = token
        this.tenantUrl = tenantUrl
    }

    private useToken(token?: string | null ): string | null {
        if (this.token) {
            return this.token;
        } else if (token) {
            return token;
        }
        return null;
    }
    post(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        const tokenUsed = this.useToken(token)
        return httpCliente.post(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenUsed ? `Bearer ${tokenUsed}`:null,
                'X-Tenant-Url': this.tenantUrl ? this.tenantUrl :null
            }
        })
    }

    patch(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        const tokenUsed = this.useToken(token)
        return httpCliente.patch(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenUsed ? `Bearer ${tokenUsed}`:null,
                'X-Tenant-Url': this.tenantUrl ? this.tenantUrl :null
            }
        })
    }

    put(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        const tokenUsed = this.useToken(token)
        return httpCliente.put(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': tokenUsed ? `Bearer ${tokenUsed}`:null,
                'X-Tenant-Url': this.tenantUrl ? this.tenantUrl :null
            }
        })
    }

    delete(url: string, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        const tokenUsed = this.useToken(token)
        return httpCliente.delete(requestURL,{
            headers: {
                'Authorization': tokenUsed ? `Bearer ${tokenUsed}`:null,
                'X-Tenant-Url': this.tenantUrl ? this.tenantUrl :null
            }
        })
    }

    get(url: string, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        const tokenUsed = this.useToken(token)
        return httpCliente.get(requestURL,{
            headers: {
                'Authorization': tokenUsed ? `Bearer ${tokenUsed}`:null,
                'X-Tenant-Url': this.tenantUrl ? this.tenantUrl :null
            }
        })
    }
}

export default ApiService