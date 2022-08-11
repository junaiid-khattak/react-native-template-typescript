export interface CredentialsType {
    email: string;
    password: string;
}

export interface UserProfileType {
    firstName?: string;
    lastName?: string;
    email?: string;
    picture?: string;
}

export interface UserType {
    profile: UserProfileType,
    token: string
}