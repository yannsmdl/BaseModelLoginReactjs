import ApiService from "../index";

class ConnectCity extends ApiService{
    constructor(token: string, tenantUrl: string){
        super('/City', token, tenantUrl)
    }
    
    async getByNameAndUf(url: string){
        return await this.get("/Name"+url)
    }

}

export default ConnectCity