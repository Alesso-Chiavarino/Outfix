import axios from "axios";

export class OutfixApi {

    public axiosInstance;
    private _isServerSide: boolean;

    constructor(_isServerSide: boolean) {

        this._isServerSide = _isServerSide;

        this.axiosInstance = axios.create();

        this.axiosInstance.interceptors.request.use(
            config => {

                let token: any;

                if (this._isServerSide) {
                    const { cookies } = require('next/headers');
                    token = cookies().get('_auth').value;
                } else {
                    const Cookies = require("js-cookie");
                    token = Cookies.get('_auth');
                }
                if (token) {
                    config.headers['Authorization'] = `Bearer ${token}`;
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            }
        )
    }

    public Get(url: string) {
        return this.axiosInstance.get(url);
    }

    public Post(url: string, payload: any) {
        return this.axiosInstance.post(url, payload);
    }

    public Put(url: string, payload: any) {
        return this.axiosInstance.put(url, payload);
    }

    public Delete(url: string) {
        return this.axiosInstance.delete(url);
    }
}