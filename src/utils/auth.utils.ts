'use client'

import { jwtDecode } from "jwt-decode"
import Cookies from "js-cookie"

export class AuthUtils {
    static isLogged(): boolean {
        const token = Cookies.get('_auth')

        if (token) {
            return true
        }

        return false
    }

    static getToken(): string {
        const token = Cookies.get('_auth')

        return token || ''
    }

    static decodeToken(token: string): any {
        return jwtDecode(token)
    }
}