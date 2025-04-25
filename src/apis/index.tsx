import axios from "axios";
import { AxiosResponse } from 'axios';


const httpCliente = axios.create({
    baseURL: "https://localhost:5001/api"
});

class ApiService {
    public apiurl: string = ""
    
    constructor(apiurl: string){
        this.apiurl=apiurl
    }

    post(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        return httpCliente.post(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}`:null
            }
        })
    }

    patch(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        return httpCliente.patch(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}`:null
            }
        })
    }

    put(url: string,obj: object, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        return httpCliente.put(requestURL,obj,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token ? `Bearer ${token}`:null
            }
        })
    }

    delete(url: string, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        return httpCliente.delete(requestURL,{
            headers: {
                'Authorization': token ? `Bearer ${token}`:null
            }
        })
    }

    get(url: string, token?: string): Promise<AxiosResponse>{
        const requestURL = `${this.apiurl}${url}`
        return httpCliente.get(requestURL,{
            headers: {
                'Authorization': token ? `Bearer ${token}`:null
            }
        })
    }
}

export default ApiService