'use client'

import { IoSearchOutline, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";
import { useStore } from "@/store/store";
import Link from "next/link";
import Cookies from "js-cookie";
import { shallow } from "zustand/shallow";

export const Navbar = () => {

    const { isLogged, setIsLogged } = useStore((state) => (
        {
            isLogged: state.isLogged,
            setIsLogged: state.setIsLogged
        }
    ), shallow)

    return (
        <nav className='w-full flex items-center justify-between p-4 sticky z-50 top-0 bg-white shadow-lg'>

            <Brand />

            <TopicsContainer />

            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-1 border-gray-200 px-2 py-1 hover:border-gray-400 transition-all rounded-md border-[1px]'>
                    <IoSearchOutline />
                    <span>Buscar</span>
                </button>
                <div className="cursor-pointer">
                    {isLogged ? <button onClick={() => {
                        Cookies.remove('_auth')
                        setIsLogged(false)
                        window.location.reload()
                    }}>Cerrar Sesion</button> : <Link href={'/login'}>Inicia Sesion</Link>}
                    {/* <IoPersonOutline /> */}
                </div>
                <div className="cursor-pointer">
                    <IoCartOutline />
                </div>
            </div>

        </nav>
    )
}