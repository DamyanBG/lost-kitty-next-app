"use client";

import Link from "next/link";
import { useContext } from "react";

import styles from "./header.module.css";
import { AuthContext } from "@/context/AuthProvider";
import LogOut from "@/components/LogOut/LogOut";

export default function Header() {
    const { token } = useContext(AuthContext);
    console.log(token)
    const isAuthenticated = !!token;

    return (
        <header className={styles.header}>
            <section className={styles.siteName}>
                <Link href="/">Lost Kitty</Link>
            </section>
            <nav className={styles.centerNav}>
                <ul>
                    <li>
                        <Link href="/lost">Lost cats</Link>
                    </li>
                    <li>
                        <Link href="/found">Found cats</Link>
                    </li>
                    <li>
                        <Link href="/add-cat">Add cat</Link>
                    </li>
                </ul>
            </nav>
            <nav>
                {isAuthenticated ? (
                    <ul>
                        <li>
                            <Link href="/profile">Profile</Link>
                        </li>
                        <li>
                            <LogOut />
                        </li>
                    </ul>
                ) : (
                    <ul>
                        <li>
                            <Link href="/register">Register</Link>
                        </li>
                        <li>
                            <Link href="/login">Log In</Link>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
}
