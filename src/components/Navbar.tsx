'use client'

import { IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";
import { useStore } from "@/store/store";
import { shallow } from "zustand/shallow";
import { UserDropdown } from "./UserDropdown";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { SearchPanel } from "./SearchPanel";
import { routesForAdmin } from "@/constants/route.constant";

export const Navbar = () => {

    const { isLogged, setIsLogged, user } = useStore(state => ({
        isLogged: state.isLogged,
        setIsLogged: state.setIsLogged,
        user: state.user
    }), shallow)

    const pathname = usePathname()
    const [isHydrated, setIsHydrated] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setSearchOpen(false)
            }
        }

        if (searchOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [searchOpen])

    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md">

            <div className="w-full flex items-center justify-between px-6 py-4 relative">

                <Brand />

                {pathname !== '/login' && pathname !== '/signup' && (
                    <>
                        {!routesForAdmin.includes(pathname) && <TopicsContainer />}

                        <div className="flex items-center gap-4">

                            {!routesForAdmin.includes(pathname) && (
                                <div ref={searchRef}>
                                    <button
                                        onClick={() => setSearchOpen(true)}
                                        className="flex items-center gap-2 px-3 py-1.5 border rounded-md 
                                                   hover:border-gray-400 transition"
                                    >
                                        Buscar
                                    </button>

                                    {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}
                                </div>
                            )}

                            {isHydrated && (
                                <UserDropdown
                                    setIsLogged={setIsLogged}
                                    user={user}
                                    isLogged={isLogged}
                                />
                            )}

                            {!routesForAdmin.includes(pathname) && (
                                <div className="cursor-pointer">
                                    <IoCartOutline size={20} />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}