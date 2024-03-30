import axios from "axios";
import { cookies } from "next/headers";
// axios.create({
//     baseURL: 'https://outfixapi.azurewebsites.net',
//     headers: {
//         'Content-Type': 'application/json'
//     },

// })

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
    config => {
        const token = cookies().get('_auth');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token.value}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)