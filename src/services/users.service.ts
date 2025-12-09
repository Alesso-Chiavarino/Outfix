import { OutfixApi } from "@/config/axios.config";
import { API_URL } from "@/config/services.config";
import { User, UserUpdateRequest } from "@/models/IUser";

export class UsersService {
    static async getUsers() {

        // await new Promise(resolve => setTimeout(resolve, 4000))

        const outfixApi = new OutfixApi(true)

        console.log("test", process.env.API_URL?.concat('/users'))

        const users = (await outfixApi.Get(`${API_URL}/api/users`)).data

        return users;
    }

    static async updateUser(id: string, user: UserUpdateRequest) {
        const outfixApi = new OutfixApi(true)

        const response = await outfixApi.Put(`${API_URL}/api/users/${id}`, user)

        return response.data
    }
}