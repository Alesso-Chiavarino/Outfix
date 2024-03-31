'use client'

import React from 'react'
import { IoPersonOutline } from 'react-icons/io5'
import Cookies from 'js-cookie'
import { User } from '@/models/IUser'
import Link from 'next/link'

interface UserDropdownProps {
    setIsLogged: (isLogged: boolean) => void
    user: User
    isLogged: boolean
}

export const UserDropdown = ({ setIsLogged, user, isLogged }: UserDropdownProps) => {

    const handleSignOut = () => {
        Cookies.remove('_auth')
        setIsLogged(false)
        window.location.href = '/login'
    }

    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="p-2 flex rounded-full md:me-0 focus:ring-[1px] focus:ring-zinc-700 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                    <IoPersonOutline />
                </button>
                {/* <!-- Dropdown menu --> */}
                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                    {isLogged ? (
                        <>
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{user.name}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{user.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Mis compras</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Configuración</a>
                                </li>
                                <li>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
                                        onClick={handleSignOut}
                                    >Cerrar sesion</button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <Link
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full text-left"
                            href={'/login'}
                        >Iniciar sesion</Link>
                    )}
                </div>
            </div>

        </div>
    )
}
