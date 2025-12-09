'use client'

import { UserLogin, UserToken } from '@/models/IUser'
import { useStore } from '@/store/store'
import axios from 'axios'
import { useState } from 'react'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { AuthUtils } from '@/utils/auth.utils'
import { API_URL } from '@/config/services.config'

export const useLogin = () => {

    const { setIsLogged, setIsLoading, isLoading, error, setError, setUser } = useStore((state) => (
        {
            isLoading: state.isLoading,
            error: state.error,
            setIsLogged: state.setIsLogged,
            setIsLoading: state.setIsLoading,
            setError: state.setError,
            setUser: state.setUser,
        }
    ))

    const router = useRouter()

    const [userLogin, setUserLogin] = useState<UserLogin>({
        Email: '',
        Password: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsLoading(true)

        try {
            const token = await axios.post(`${API_URL}/api/authentication/login`, userLogin)

            if (token.data) {
                Cookies.set('_auth', token.data.token)
                setIsLogged(true)

                const decodedToken: UserToken = AuthUtils.decodeToken(token.data.token)
                const userId = decodedToken.nameid

                const user = await axios.get(`${API_URL}/api/users/${userId}`)

                setUser(user.data)

                router.push('/')
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
        onChange,
        handleSubmit,
        isLoading,
        error
    }
}
