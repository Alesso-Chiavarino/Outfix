'use client'

import { create } from 'zustand';
import Cookies from 'js-cookie';
import { User } from '@/models/IUser';
import { IEditProduct, Product } from '@/models/IProduct';
import { persist } from "zustand/middleware";

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
    setUser: (user: User) => void,
    editProduct: IEditProduct,
    setEditProduct: (editProduct: IEditProduct) => void,
    products: Product[],
    setProducts: (products: Product[]) => void
}

const token = Cookies.get('_auth')

export const useStore = create<State>()(
    persist(
        (set) => ({
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
                password: '',
                role: 'customer'
            },
            editProduct: {
                Title: '',
                Category: '',
                Description: '',
                UploadImages: [],
                Stock: 0,
                Price: 0,
                Images: []
            },
            products: [],
            setIsLogged: (isLogged: boolean) => set({ isLogged }),
            setError: (error: Error) => set({ error }),
            setIsLoading: (isLoading: boolean) => set({ isLoading }),
            setUser: (user: User) => set({ user }),
            setEditProduct: (editProduct: IEditProduct) => set({ editProduct }),
            setProducts: (products: Product[]) => set({ products }),
        }),
        {
            name: "store", // default to LocalStorage
        }
    )
);