export type Tenant = {
    url: string
}

export type TenantContextProps = {
    tenant: Tenant | null
    existsTenant: () => Promise<void>
}
