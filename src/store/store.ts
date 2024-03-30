'use client'

import { create } from 'zustand';
import Cookies from 'js-cookie';

interface State {
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void
}

const token = Cookies.get('_auth')

export const useStore = create<State>((set) => ({
    isLogged: token ? true : false,
    setIsLogged: (isLogged: boolean) => set({ isLogged }),
}));