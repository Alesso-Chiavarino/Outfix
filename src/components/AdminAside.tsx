'use client'

import Link from 'next/link'
import React from 'react'
import { BsArchiveFill, BsCollectionFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { MdDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'

export const AdminAside = () => {

    const pathname = usePathname()

    return (
        <aside className='bg-zinc-900 py-10 w-[20%] flex flex-col gap-10 items-center text-gray-100'>
            <div className='w-full flex flex-col items-center gap-2'>
                <h1 className='text-xl font-semibold'>Admin Manager</h1>
                <hr className='w-[80%] border-gray-50 opacity-35' />
            </div>

            <nav className='w-full'>
                <ul className='flex flex-col items-center gap-5 w-full px-4'>
                    <li className={`hover:bg-gray-50 hover:text-zinc-800 w-full px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 ${pathname.includes('/dashboard') ? 'bg-gray-50 text-zinc-800' : ''}`}>
                        <MdDashboard />
                        <Link href="/admin/dashboard">Dashboard</Link>
                    </li>
                    <li className={`hover:bg-gray-50 hover:text-zinc-800 w-full px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 ${pathname.includes('/users') ? 'bg-gray-50 text-zinc-800' : ''}`}>
                        <FaUser />
                        <Link href="/admin/users">Usuarios</Link>
                    </li>
                    <li className={`hover:bg-gray-50 hover:text-zinc-800 w-full px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 ${pathname.includes('/products') ? 'bg-gray-50 text-zinc-800' : ''}`}>
                        <BsCollectionFill />
                        <Link href="/admin/products">Productos</Link>
                    </li>
                    <li className={`hover:bg-gray-50 hover:text-zinc-800 w-full px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 ${pathname.includes('/orders') ? 'bg-gray-50 text-zinc-800' : ''}`}>
                        <BsArchiveFill />
                        <Link href="/admin/orders">Ordenes</Link>
                    </li>
                </ul>
            </nav>

        </aside >
    )
}
