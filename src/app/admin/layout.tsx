import { AdminAside } from "@/components/AdminAside";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-[94vh] bg-gray-50">
            <div className='flex h-full w-full'>
                <AdminAside />
                {children}
            </div>
        </main>

    )
}
