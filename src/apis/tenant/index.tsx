import ApiService from "../index";

class ConnectTenant extends ApiService{
    constructor(){
        super('/Tenant', null, null)
    }
    
    async existsTenant(tenantUrl: string){
        return await this.get("/TenantUrl?TenantUrl="+tenantUrl)
    }
}

export default ConnectTenant