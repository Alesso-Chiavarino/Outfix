import React, { useState, useEffect, useRef } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import Cookies from 'js-cookie';
import { User, UserRole } from '@/models/IUser';
import Link from 'next/link';
import { useStore } from '@/store/store';

interface UserDropdownProps {
    setIsLogged: (isLogged: boolean) => void;
    user: User;
    isLogged: boolean;
}

export const UserDropdown = ({ setIsLogged, user }: UserDropdownProps) => {
    const { isLogged } = useStore(state => {
        return {
            isLogged: state.isLogged
        };
    });

    const [isToggle, setIsToggle] = useState(true);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSignOut = () => {
        Cookies.remove('_auth');
        setIsLogged(false);
        window.location.href = '/login';
        setIsToggle(true);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                const target = event.target as HTMLElement;
                if (!target.closest('.p-2')) {
                    setIsToggle(true);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                <button type="button" className="p-2 flex rounded-full md:me-0 focus:ring-[1px] focus:ring-zinc-700" onClick={(e) => {
                    setIsToggle(!isToggle);
                    e.stopPropagation();
                }}>
                    <IoPersonOutline />
                </button>

                {/* <!-- Dropdown menu --> */}
                <div ref={dropdownRef} className={`z-50 absolute top-12 right-0 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow ${isToggle ? 'hidden' : ''}`}>
                    {isLogged ? (
                        <>
                            <div className="px-4 py-3">
                                <span className="block text-sm text-black">{user.name}</span>
                                <span className="block text-sm  text-gray-400">{user.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                {user.role === UserRole.admin ? (
                                    <li>
                                        <Link href="/admin/users" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsToggle(true)}>Panel de Administrador</Link>
                                    </li>
                                ) : (
                                    // <li>
                                    //     <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mis compras</a>
                                    // </li>
                                    <li>
                                        <Link href="/admin/products" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsToggle(true)}>Panel de Vendedor</Link>
                                    </li>
                                )}
                                <li>
                                    <Link href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsToggle(true)}>Mis Pedidos</Link>
                                </li>
                                <li>
                                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" onClick={handleSignOut}>Cerrar sesión</button>
                                </li>
                            </ul>
                        </>
                    ) : (
                        <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" href={'/login'}>Iniciar sesión</Link>
                    )}
                </div>
            </div>
        </div>
    );
};
