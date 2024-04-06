import UsersTable from "@/components/UsersTable";
import { Suspense } from "react";

export default async function UsersPage() {

    return (
        <main className='flex min-h-screen justify-center w-[80%] gap-20 overflow-hidden'>
            <Suspense fallback={<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="w-14 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </th>
                        <th scope="col" className="px-6 py-3">
                            <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {[...Array(5)].map((_, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-24 h-6 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-14 h-6 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>}>
                <UsersTable />
            </Suspense>
        </main>
    )
}
