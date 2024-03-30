'use client'

import { UserLogin } from "@/models/IUser";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/store";

export default function LoginPage() {

    const { isLogged, setIsLogged } = useStore((state) => (
        {
            isLogged: state.isLogged,
            setIsLogged: state.setIsLogged
        }
    ))

    const router = useRouter()

    if (isLogged) router.push('/')

    const [user, setUser] = useState<UserLogin>({
        Email: '',
        Password: ''
    })

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const token = await axios.post('https://outfixapi.azurewebsites.net/api/authentication/validate', user)

        if (token.data) {
            Cookies.set('_auth', token.data.token)
            setIsLogged(true)
            router.push('/')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="flex justify-center py-40 h-screen">
            <form className="w-full max-w-sm" onSubmit={handleSubmit} >
                <h1 className="text-3xl text-center mb-6">Log in</h1>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="Email"
                        onChange={onChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        onChange={onChange}
                        name="Password"
                        required
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="submit">
                    Log in
                </button>
            </form>
        </div>
    );
}