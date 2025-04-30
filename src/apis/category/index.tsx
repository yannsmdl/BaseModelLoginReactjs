import ApiService from "../index";

class ConnectCategory extends ApiService{
    constructor(token: string, tenantUrl: string){
        super('/Category', token, tenantUrl)
    }
    
    async getAll(){
        return await this.get("")
    }

}

export default ConnectCategory