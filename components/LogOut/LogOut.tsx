'use client'

import { useContext } from "react"
import styles from "./logout.module.css"
import { AuthContext } from "@/context/AuthProvider"
import { useRouter } from 'next/navigation'

export default function LogOut() {
    const { setToken } = useContext(AuthContext)
    const router = useRouter()

    const handleClick = () => {
        localStorage.removeItem("token")
        setToken(null)
        router.push("/")
    }

    return (
        <button
            type="button"
            className={styles.logout}
            onClick={handleClick}
        >
            Log Out
        </button>
    )
}
