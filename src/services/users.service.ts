import { OutfixApi } from "@/config/axios.config";

export class UsersService {
    static async getUsers() {

        // await new Promise(resolve => setTimeout(resolve, 4000))

        const outfixApi = new OutfixApi(true)

        console.log("test", process.env.API_URL?.concat('/users'))

        const users = (await outfixApi.Get('https://outfixapi.azurewebsites.net/api/users')).data

        return users;
    }
}