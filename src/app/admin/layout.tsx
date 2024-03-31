import { AdminAside } from "@/components/AdminAside";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex'>
            <AdminAside />
            {children}
        </div>
    )
}
