'use client'

import Link from 'next/link'
import React from 'react'
import { BsArchiveFill, BsCollectionFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
// import { MdDashboard } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { useStore } from '@/store/store'

type SidebarItemProps = {
    href: string
    icon: React.ReactNode
    label: string
    active?: boolean
}

const SidebarItem = ({ href, icon, label, active }: SidebarItemProps) => {
    return (
        <li>
            <Link
                href={href}
                className={`
                    flex items-center gap-3
                    px-3 py-2 rounded-md
                    text-gray-300
                    hover:bg-gray-100 hover:text-zinc-900
                    transition-all duration-200
                    ${active ? 'bg-gray-100 text-zinc-900' : ''}
                `}
            >
                <span className="text-xl w-6 flex justify-center">
                    {icon}
                </span>

                {/* Texto oculto hasta hover */}
                <span className="
                    whitespace-nowrap
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-200
                ">
                    {label}
                </span>
            </Link>
        </li>
    )
}

export const AdminAside = () => {
    const pathname = usePathname()
    const { user } = useStore();

    const isUserAdmin = user?.role === 'admin';

    return (
        <aside
            className="
                group
                bg-zinc-900
                min-h-[94vh]
                w-16 hover:w-64
                transition-all duration-300
                flex flex-col
                border-r border-black
                overflow-hidden
            "
        >
            {/* HEADER */}
            <div className="h-16 flex items-center justify-center border-b border-zinc-800">
                <span className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition">
                    Admin
                </span>
            </div>

            {/* NAV */}
            <nav className="flex-1 py-6">
                <ul className="flex flex-col gap-2 px-2">

                    {/* <SidebarItem
                        href="/admin/dashboard"
                        icon={<MdDashboard />}
                        label="Dashboard"
                        active={pathname.includes('/dashboard')}
                    /> */}

                    {isUserAdmin && <SidebarItem
                        href="/admin/users"
                        icon={<FaUser />}
                        label="Usuarios"
                        active={pathname.includes('/users')}
                    />}

                    <SidebarItem
                        href="/admin/products"
                        icon={<BsCollectionFill />}
                        label="Productos"
                        active={pathname.includes('/products')}
                    />

                    <SidebarItem
                        href="/admin/orders"
                        icon={<BsArchiveFill />}
                        label="Órdenes"
                        active={pathname.includes('/orders')}
                    />
                </ul>
            </nav>
        </aside>
    )
}