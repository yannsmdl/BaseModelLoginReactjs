import ApiService from "../index";

class ConnectProfession extends ApiService{
    constructor(token: string, tenantUrl: string){
        super('/Profession', token, tenantUrl)
    }
    
    async getAll(){
        return await this.get("")
    }

}

export default ConnectProfession