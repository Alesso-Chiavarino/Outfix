'use client'

import { IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { UserDropdown } from "./UserDropdown";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthUtils } from "@/utils/auth.utils";
import { usePathname } from "next/navigation";
import { Search } from "./Search";
import { UserToken } from "@/models/IUser";
import { routesForAdmin } from "@/constants/route.constant";

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

    // useEffect(() => {

    //     if (isLogged) return

    //     const loadUser = async () => {

    //         const token = AuthUtils.getToken()

    //         if (token) {
    //             const decodedToken: UserToken = AuthUtils.decodeToken(token)
    //             const userId = decodedToken.nameid
    //             setIsLogged(true)

    //             const user = await axios.get(`https://outfixapi.azurewebsites.net/api/users/${userId}`)

    //             setUser(user.data)
    //         }
    //     }
    //     loadUser()


    // }, [isLogged])

    const [isHydrated, setIsHydrated] = useState(false)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    return (
        <nav className='w-full flex items-center justify-between p-4 sticky z-50 top-0 bg-white shadow-lg'>

            <Brand />

            {pathname === '/login' || pathname === '/signup' ? null : (
                <>
                    {!routesForAdmin.includes(pathname) && <TopicsContainer />}

                    <div className='flex items-center gap-4'>

                        {!routesForAdmin.includes(pathname) && <Search />}

                        {isHydrated && <UserDropdown setIsLogged={setIsLogged} user={user} isLogged={isLogged} />}

                        {!routesForAdmin.includes(pathname) && <div className="cursor-pointer">
                            <IoCartOutline />
                        </div>}
                    </div>
                </>
            )}

        </nav>
    )
}