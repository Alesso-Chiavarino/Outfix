'use client'

import { IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { UserDropdown } from "./UserDropdown";
import { useEffect } from "react";
import axios from "axios";
import { AuthUtils } from "@/utils/auth.utils";
import { usePathname } from "next/navigation";
import { Search } from "./Search";

export const Navbar = () => {

    const { isLogged, setIsLogged, user, setUser } = useStore(state => {
        return {
            isLogged: state.isLogged,
            setIsLogged: state.setIsLogged,
            user: state.user,
            setUser: state.setUser
        }

    }, shallow)

    const pathname = usePathname()

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

            {pathname === '/login' || pathname === '/signup' ? null : (
                <>
                    {pathname !== '/admin' && <TopicsContainer />}

                    <div className='flex items-center gap-4'>

                        {pathname !== '/admin' && <Search />}

                        <UserDropdown setIsLogged={setIsLogged} user={user} isLogged={isLogged} />

                        {pathname !== '/admin' && <div className="cursor-pointer">
                            <IoCartOutline />
                        </div>}
                    </div>
                </>
            )}

        </nav>
    )
}