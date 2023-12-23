'use client'

import { useContext } from "react"
import styles from "./logout.module.css"
import { AuthContext } from "@/context/AuthProvider"

import Link from "next/link"

export default function LogOut() {
    const { setToken } = useContext(AuthContext)

    const handleClick = () => {
        console.log("click")
        localStorage.removeItem("token")
        setToken(null)
    }

    return (
        <Link
            href={"/"}
            replace
            className={styles.logout}
            onClick={handleClick}
        >
            Log Out
        </Link>
    )
}
