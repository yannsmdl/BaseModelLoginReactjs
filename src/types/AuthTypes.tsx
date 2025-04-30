export type User = {
    token: string
    expiration: string
    userDecoded: UserDecoded
}

export type UserDecoded = {
    sub: string
    email: string
    username: string
    roles: string
}

export type AuthContextProps = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}