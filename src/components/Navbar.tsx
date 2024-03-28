import { IoSearchOutline, IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { Brand } from './Brand';
import { TopicsContainer } from "./TopicsContainer";

export const Navbar = () => {

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
                    <IoPersonOutline />
                </div>
                <div className="cursor-pointer">
                    <IoCartOutline />
                </div>
            </div>

        </nav>
    )
}