export interface UserLogin {
    Email: string;
    Password: string;
}

export interface UserRegister {
    Email: string;
    Password: string;
    Name: string;
}

export enum UserRole {
    admin = 'admin',
    customer = 'customer',
    seller = 'seller',
}

export interface User {
    email: string;
    name: string;
    password: string;
    role: keyof typeof UserRole;
    id: string;
}

export interface UserToken {
    nameid: string;
    email: string;
    role: string;
    exp: number;
    iat: number;
}