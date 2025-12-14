"use client";

import { useState } from "react";
import { User } from "@/models/IUser";

export default function EditUserModal({ user }: { user: User }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="font-medium text-blue-600 hover:underline"
            >
                Edit user
            </button>
            {open && (
                <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 bg-black/40 
                    h-screen flex justify-center items-center">

                    <div className="bg-white dark:bg-gray-700 rounded-lg w-full max-w-2xl shadow-lg">

                        <div className="flex justify-between p-4 border-b dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Edit user – {user.name}
                            </h3>
                            <button
                                className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 
                                rounded-lg w-8 h-8 flex items-center justify-center"
                                onClick={() => setOpen(false)}
                            >
                                ✕
                            </button>
                        </div>

                        <form
                            action={`/api/users/${user.id}`}
                            method="POST"
                            className="p-6 space-y-6"
                        >
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium">Name</label>
                                    <input
                                        name="name"
                                        defaultValue={user.name}
                                        className="block w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-600 dark:text-white"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium">Role</label>
                                    <input
                                        name="role"
                                        defaultValue={user.role}
                                        className="block w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-600 dark:text-white"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end p-4 border-t dark:border-gray-600">
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800"
                                >
                                    Save changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}