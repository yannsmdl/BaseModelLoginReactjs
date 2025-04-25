import ApiService from "../index";

class ConnectLogin extends ApiService{
    constructor(){
        super('/Token')
    }
    
    async login(cred: object){
        return await this.post("/Login",cred)
    }

    async logout(token: string){
        return await this.patch("/Logout",{},token)
    }

}

export default ConnectLogin