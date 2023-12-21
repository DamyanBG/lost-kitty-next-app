import Link from "next/link";

import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <section className={styles.siteName}>
                Lost Kitty
            </section>
            <nav>
                <ul>
                    <li>
                        <Link href="/register">
                            Register
                        </Link>
                    </li>
                    <li>
                        <Link href="/login">
                            Log In
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}