export interface UserLogin {
    Email: string;
    Password: string;
}

export interface UserRegister {
    Email: string;
    Password: string;
    Name: string;
}

export interface User {
    email: string;
    name: string;
    password: string;
    // TODO add role
    // Role: string;
    id: string;
}