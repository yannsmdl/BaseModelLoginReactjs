import ApiService from "../index";

class ConnectClient extends ApiService{
    constructor(token: string, tenantUrl: string){
        super('/Client', token, tenantUrl)
    }
    
    async create(cred: object){
        return await this.post("",cred)
    }
}

export default ConnectClient