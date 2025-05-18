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
    forgotPassword: (email: string) => Promise<void>
    validTokenForgotPassword: (token: string, email: string) => Promise<void>
    resetPassword: (token: string, email: string, newPassword: string) => Promise<void>
    logout: () => void
}