"use client"

import { createContext, useEffect, useLayoutEffect, useState } from "react";
import { AuthContextValue, ContextProvider } from "@/types/interfaces";
import { Token } from "@/types/types";

export const AuthContext = createContext<AuthContextValue>({
    token: null,
    setToken: () => {}
})

function AuthProvider({ children }: ContextProvider) {
    const [token, setToken] = useState<Token>(null)

    useEffect(() => {
        const storedToken: Token = localStorage.getItem("token")
        if (storedToken) setToken(JSON.parse(storedToken))
    }, [])

    return (
        <AuthContext.Provider value={{
            token,
            setToken,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
