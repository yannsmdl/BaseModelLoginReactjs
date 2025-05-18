import ApiService from "../index";

class ConnectLogin extends ApiService{
    constructor(tenantUrl: string){
        super('/Token', null, tenantUrl)
    }
    
    async login(cred: object){
        return await this.post("/Login",cred)
    }

    async forgotPassword(cred: object){
        return await this.post("/ForgotPassword",cred)
    }

    async validForgotPassword(cred: object){
        return await this.post("/VerifyToken",cred)
    }

    async resetPassword(cred: object){
        return await this.post("/ResetPassword",cred)
    }

    async logout(token: string){
        return await this.patch("/Logout",{},token)
    }

}

export default ConnectLogin