"use client";

import Link from "next/link";

import styles from "./header.module.css";
import UserNavPart from "@/components/UserNavPart/UserNavPart";
import { useState } from "react";


export default function Header() {
    const [isActive, setIsActive] = useState<boolean>(false)

    const navBarClassName = isActive
        ? `${styles.navBar} ${styles.active}`
        : styles.navBar

    const handleHamburgerClick = () => {
        setIsActive(!isActive)
    }

    const handleLinkClick = () => {
        setIsActive(false)
    }

    return (
        <header className={styles.header}>
            <article className={styles.siteName}>
                Lost Kitty
            </article>
            <article className={styles.hamburger} onClick={handleHamburgerClick}>
                <article className={styles.line}></article>
                <article className={styles.line}></article>
                <article className={styles.line}></article>
            </article>
            <nav className={navBarClassName}>
                <ul>
                    <li>
                        <Link onClick={handleLinkClick} className={styles.active} href="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href="/lost">Lost cats</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href="/found">Found cats</Link>
                    </li>
                    <li>
                        <Link onClick={handleLinkClick} href="/add-cat">Add cat</Link>
                    </li>
                    <UserNavPart handleLinkClick={handleLinkClick} />
                </ul>
            </nav>
        </header>
    );
}
