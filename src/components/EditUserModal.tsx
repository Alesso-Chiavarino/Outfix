'use client'

import { useState } from 'react'
import { User } from '@/models/IUser'

export default function EditUserModal({ user }: { user: User }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="text-blue-600 hover:underline"
            >
                Editar
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
                        
                        <h3 className="text-xl font-semibold mb-4">Editar usuario</h3>

                        <div className="flex flex-col gap-3">
                            <div>
                                <label className="text-sm text-gray-600">Nombre</label>
                                <input
                                    defaultValue={user.name}
                                    className="w-full border px-3 py-2 rounded bg-gray-100"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Email</label>
                                <input
                                    defaultValue={user.email}
                                    disabled
                                    className="w-full border px-3 py-2 rounded bg-gray-200 cursor-not-allowed"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">Rol</label>
                                <select
                                    defaultValue={user.role}
                                    className="w-full border px-3 py-2 rounded bg-gray-100"
                                >
                                    <option value="USER">Usuario</option>
                                    <option value="ADMIN">Administrador</option>
                                </select>
                            </div>

                            <button
                                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-500"
                                disabled
                            >
                                Guardar cambios (no implementado)
                            </button>

                            <button
                                className="mt-2 text-gray-600 hover:underline text-sm"
                                onClick={() => setOpen(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}