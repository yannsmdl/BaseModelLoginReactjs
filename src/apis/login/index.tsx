import ApiService from "../index";

class ConnectLogin extends ApiService{
    constructor(tenantUrl: string){
        super('/Token', null, tenantUrl)
    }
    
    async login(cred: object){
        return await this.post("/Login",cred)
    }

    async logout(token: string){
        return await this.patch("/Logout",{},token)
    }

}

export default ConnectLogin