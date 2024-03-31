'use client'

import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { UserDropdown } from "./UserDropdown";
import { useEffect } from "react";
import axios from "axios";
import { AuthUtils } from "@/utils/auth.utils";

export const Navbar = () => {

    const { isLogged, setIsLogged, user, setUser } = useStore(state => {
        return {
            isLogged: state.isLogged,
            setIsLogged: state.setIsLogged,
            user: state.user,
            setUser: state.setUser
        }

    }, shallow)

    useEffect(() => {

        const loadUser = async () => {

            const token = AuthUtils.getToken()

            if (token) {
                const decodedToken = AuthUtils.decodeToken(token)
                const userId = decodedToken.nameid
                setIsLogged(true)

                const user = await axios.get(`https://outfixapi.azurewebsites.net/api/users/${userId}`)

                setUser(user.data)
            }
        }
        loadUser()


    }, [isLogged])

    return (
        <nav className='w-full flex items-center justify-between p-4 sticky z-50 top-0 bg-white shadow-lg'>

            <Brand />

            <TopicsContainer />

            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-1 border-gray-200 px-2 py-1 hover:border-gray-400 transition-all rounded-md border-[1px]'>
                    <IoSearchOutline />
                    <span>Buscar</span>
                </button>

                <UserDropdown setIsLogged={setIsLogged} user={user} isLogged={isLogged} />

                <div className="cursor-pointer">
                    <IoCartOutline />
                </div>
            </div>

        </nav>
    )
}