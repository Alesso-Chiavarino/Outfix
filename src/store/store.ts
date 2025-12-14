'use client'

import { create } from 'zustand'
import Cookies from 'js-cookie'
import { persist } from 'zustand/middleware'

import { User } from '@/models/IUser'
import { IEditProduct, Product } from '@/models/IProduct'
import { ICategory } from '@/models/ICategory'
import { IColor } from '@/models/IColor'
import { ICartView } from '@/models/ICart'

interface Error {
    isError: boolean
    message: string
}

interface State {
    // 🔹 auth
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void

    error: Error
    setError: (error: Error) => void

    isLoading: boolean
    setIsLoading: (isLoading: boolean) => void

    user: User
    setUser: (user: User) => void

    // 🔹 products / admin
    editProduct: IEditProduct
    setEditProduct: (editProduct: IEditProduct) => void
    resetEditProduct: () => void

    products: Product[]
    setProducts: (products: Product[]) => void

    categories: ICategory[]
    setCategories: (categories: ICategory[]) => void

    colors: IColor[]
    setColors: (colors: IColor[]) => void

    // 🛒 cart
    cart: ICartView | null
    setCart: (cart: ICartView | null) => void
    clearCart: () => void
}

const token = Cookies.get('_auth')

export const useStore = create<State>()(
    persist(
        (set) => ({
            // 🔹 auth
            isLogged: !!token,
            setIsLogged: (isLogged) => set({ isLogged }),

            error: {
                isError: false,
                message: '',
            },
            setError: (error) => set({ error }),

            isLoading: false,
            setIsLoading: (isLoading) => set({ isLoading }),

            user: {
                id: '',
                name: '',
                email: '',
                password: '',
                role: 'customer',
            },
            setUser: (user) => set({ user }),

            // 🔹 products
            editProduct: {
                Title: '',
                Category: '',
                Description: '',
                UploadImages: [],
                Stock: 0,
                Price: 0,
                Images: [],
                Draft: false,
                Target: 'men',
            },
            setEditProduct: (editProduct) => set({ editProduct }),

            resetEditProduct: () =>
                set({
                    editProduct: {
                        Title: '',
                        Category: '',
                        Description: '',
                        Price: 0,
                        Target: 'men',
                        Draft: false,
                        UploadImages: [],
                        Stock: 0,
                        Images: [],
                    },
                }),

            products: [],
            setProducts: (products) => set({ products }),

            categories: [],
            setCategories: (categories) => set({ categories }),

            colors: [],
            setColors: (colors) => set({ colors }),

            // 🛒 cart
            cart: null,
            setCart: (cart) => set({ cart }),
            clearCart: () => set({ cart: null }),
        }),
        {
            name: 'store',
        }
    )
)