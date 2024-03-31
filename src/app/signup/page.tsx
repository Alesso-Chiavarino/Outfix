'use client'

import { Brand } from '@/components/Brand';
import { useSignUp } from '@/hooks/useSignUp';
import Link from 'next/link';
import React from 'react'

export default function SignUpPage() {

    const { isLogged, router, handleSubmit, error, isLoading, onChange } = useSignUp()

    if (isLogged) router.push('/')

    return (
        <main className="flex justify-center py-10 h-screen">
            <div className="border-2 border-gray-100 h-fit overflow-hidden rounded-lg w-[35%]">
                <form className="w-full flex flex-col gap-4 items-center p-10" onSubmit={handleSubmit} >
                    <Brand />

                    <div className="flex flex-col gap-8 items-center w-full">
                        <div className="mt-2 w-full">
                            {error.isError && <p className="text-red-700 self-start mb-2">{error.message}</p>}
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="JhonDoe"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="w-full">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                name="Email"
                                placeholder="JhonDoe@gmail.com"
                                onChange={onChange}
                                required
                            />
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="block text-gray-700 text-sm font-bold" htmlFor="password">Contraseña</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                placeholder="*********"
                                type="password"
                                onChange={onChange}
                                name="Password"
                                required
                            />
                        </div>
                        <button
                            className="bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full"
                            type="submit">
                            {isLoading ? 'Cargando...' : 'Registrarse'}
                        </button>
                        <div className="border-t-[1px] h-[15px] text-center relative border-gray-400 w-full">
                            <span className="bg-white text-gray-500 px-2 py-1 relative bottom-[0.8rem]">o</span>
                        </div>
                        <Link
                            className="  hover:text-gray-950 hover:border-gray-950 text-gray-700 font-bold border-[1px] border-gray-700 py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full text-center"
                            href={'/login'}>
                            Iniciar Sesion
                        </Link>
                    </div>
                </form>
            </div >
        </main >
    );
}
