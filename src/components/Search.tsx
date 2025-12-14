// Search.tsx
import { IoSearchOutline } from 'react-icons/io5'

export const Search = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
            className="
                flex items-center gap-2 
                border px-3 py-1.5 rounded-md 
                hover:border-gray-400 transition
            "
        >
            <IoSearchOutline />
            <span>Buscar</span>
        </button>
    )
}