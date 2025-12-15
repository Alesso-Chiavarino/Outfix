import { User } from "@/models/IUser";
import { UsersService } from "@/services/users.service";
import ModalClientController from "./ModalClientController";

const UsersTable = async () => {
    const users = await UsersService.getUsers();

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">

            <ModalClientController />

            <div className="flex items-center justify-between md:flex-row flex-wrap 
          space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">

                <div>
                    {/* <button
                        id="dropdownActionButton"
                        data-dropdown-toggle="dropdownAction"
                        type="button"
                        className="inline-flex items-center text-gray-500 bg-white border border-gray-300 
            hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-3 py-1.5 
            dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700"
                    >
                        Action
                        <svg className="w-2.5 h-2.5 ms-2.5" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button> */}

                    <div
                        id="dropdownAction"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 
              dark:bg-gray-700 dark:divide-gray-600"
                    >
                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
                            <li><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Reward</a></li>
                            <li><a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600">Promote</a></li>
                        </ul>
                        <div className="py-1">
                            <a className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Delete User</a>
                        </div>
                    </div>
                </div>

                {/* <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 11 1 8a7 7 0 0114 0Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block pt-2 ps-10 text-sm border rounded-lg w-80 bg-gray-50 
              border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white"
                        placeholder="Search for users"
                    />
                </div> */}
            </div>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-700">
                    <tr>
                        <th className="p-4"><input type="checkbox" className="w-4 h-4" /></th>
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Role</th>
                        <th className="px-6 py-3">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user: User) => (
                        <tr key={user.id}
                            className="bg-white border-b dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                            <td className="w-4 p-4"><input type="checkbox" className="w-4 h-4" /></td>

                            <td className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                <img className="w-10 h-10 rounded-full" src={`https://robohash.org/${user.email}`} />
                                <div className="ps-3">
                                    <div className="text-base font-semibold">{user.name}</div>
                                    <div className="text-gray-500">{user.email}</div>
                                </div>
                            </td>

                            <td className="px-6 py-4">{user.role}</td>

                            <td className="px-6 py-4">
                                <button
                                    type="button"
                                    data-modal-target={`editUserModal-${user.id}`}
                                    data-modal-toggle={`editUserModal-${user.id}`}
                                    className="font-medium text-blue-600 hover:underline"
                                >
                                    Edit user
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {users.map((user: User) => (
                <div key={user.id}>
                    <div id={`editUserModal-${user.id}`}
                        tabIndex={-1}
                        aria-hidden="true"
                        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden 
            overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">

                        <div className="relative w-full max-w-2xl max-h-full">
                            <form
                                action={`/api/users/${user.id}`}
                                method="POST"
                                className="relative bg-white rounded-lg shadow dark:bg-gray-700"
                            >
                                <div className="flex items-start justify-between p-4 border-b dark:border-gray-600">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        Edit user – {user.name}
                                    </h3>
                                    <button
                                        type="button"
                                        data-modal-hide={`editUserModal-${user.id}`}
                                        className="text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 
                      rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center">
                                        ✕
                                    </button>
                                </div>

                                <div className="p-6 space-y-6">
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="text-sm font-medium">Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                defaultValue={user.name}
                                                className="block w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-600 dark:text-white"
                                            />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3">
                                            <label className="text-sm font-medium">Role</label>
                                            <input
                                                type="text"
                                                name="role"
                                                defaultValue={user.role}
                                                className="block w-full p-2.5 rounded-lg border bg-gray-50 dark:bg-gray-600 dark:text-white"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center p-6 space-x-3 border-t dark:border-gray-600">
                                    <button type="submit"
                                        className="px-5 py-2.5 rounded-lg bg-blue-700 text-white hover:bg-blue-800">
                                        Save changes
                                    </button>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
            ))}

        </div>
    );
};

export default UsersTable;