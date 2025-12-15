'use client'

import { IoCartOutline } from "react-icons/io5"
import { Brand } from './Brand'
import { TopicsContainer } from "./TopicsContainer"
import { useStore } from "@/store/store"
import { shallow } from "zustand/shallow"
import { UserDropdown } from "./UserDropdown"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { SearchPanel } from "./SearchPanel"
import { routesForAdmin } from "@/constants/route.constant"
import { CartService } from "@/services/carts.service"
import Link from "next/link"

export const Navbar = () => {
    const {
        isLogged,
        setIsLogged,
        user,
        cart,
        setCart,
    } = useStore(
        state => ({
            isLogged: state.isLogged,
            setIsLogged: state.setIsLogged,
            user: state.user,
            cart: state.cart,
            setCart: state.setCart,
        }),
        shallow
    )

    const pathname = usePathname()
    const [isHydrated, setIsHydrated] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)

    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setIsHydrated(true)
    }, [])

    useEffect(() => {
        if (!isLogged) return

        CartService.getCart()
            .then(cart => setCart(cart))
            .catch(() => setCart(null))
    }, [isLogged])

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

    const totalItems =
        cart?.items?.reduce((acc, item) => acc + item.quantity, 0) ?? 0

    return (
        <nav className="w-full sticky top-0 z-50 bg-white shadow-md">
            <div className="w-full flex items-center justify-between px-6 py-4 relative">

                <Brand />

                {pathname !== '/login' && pathname !== '/signup' && (
                    <>
                        {!routesForAdmin.includes(pathname) && (
                            <TopicsContainer />
                        )}

                        <div className="flex items-center gap-4">

                            {!routesForAdmin.includes(pathname) && (
                                <div ref={searchRef}>
                                    <button
                                        onClick={() => setSearchOpen(true)}
                                        className="
                                            flex items-center gap-2
                                            px-3 py-1.5 border rounded-md
                                            hover:border-gray-400 transition
                                        "
                                    >
                                        Buscar
                                    </button>

                                    {searchOpen && (
                                        <SearchPanel onClose={() => setSearchOpen(false)} />
                                    )}
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
                                <Link href="/cart" className="relative">
                                    <IoCartOutline size={22} />

                                    {totalItems > 0 && (
                                        <span
                                            className="
                                                absolute -top-2 -right-2
                                                min-w-[18px] h-[18px]
                                                bg-black text-white
                                                text-[11px] font-semibold
                                                rounded-full
                                                flex items-center justify-center
                                                px-1
                                            "
                                        >
                                            {totalItems}
                                        </span>
                                    )}
                                </Link>
                            )}
                        </div>
                    </>
                )}
            </div>
        </nav>
    )
}