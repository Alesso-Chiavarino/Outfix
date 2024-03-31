'use client'

import { create } from 'zustand';
import Cookies from 'js-cookie';
import { User } from '@/models/IUser';

interface Error {
    isError: boolean
    message: string
}
interface State {
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void,
    error: Error,
    setError: (error: Error) => void,
    isLoading: boolean,
    setIsLoading: (isLoading: boolean) => void,
    user: User,
    setUser: (user: User) => void
}

const token = Cookies.get('_auth')

export const useStore = create<State>((set) => ({
    isLogged: token ? true : false,
    error: {
        isError: false,
        message: ''
    },
    isLoading: false,
    user: {
        id: '',
        name: '',
        email: '',
        password: ''
    },
    setIsLogged: (isLogged: boolean) => set({ isLogged }),
    setError: (error: Error) => set({ error }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
    setUser: (user: User) => set({ user })
}));