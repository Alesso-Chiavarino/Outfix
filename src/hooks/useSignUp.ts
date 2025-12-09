'use client'

import { UserRegister } from '@/models/IUser'
import { useStore } from '@/store/store'
import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { API_URL } from '@/config/services.config'

export const useSignUp = () => {

    const { isLogged, setIsLoading, isLoading, error, setError } = useStore((state) => (
        {
            isLogged: state.isLogged,
            isLoading: state.isLoading,
            error: state.error,
            setIsLoading: state.setIsLoading,
            setError: state.setError
        }
    ))

    const router = useRouter()

    const [user, setUser] = useState<UserRegister>({
        Email: '',
        Password: '',
        Name: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const res = await axios.post(`${API_URL}/api/users`, user)

            if (res.status === 201) {
                router.push('/login')
            }
        }
        catch (err: any) {
            setError({
                isError: true,
                message: err.response.data.message[0]
            })
        }
        finally {
            setIsLoading(false)
        }
    }

    return {
        isLogged,
        router,
        onChange,
        handleSubmit,
        isLoading,
        error
    }
}
