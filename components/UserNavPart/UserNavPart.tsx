"use client";

import { useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/context/AuthProvider";
import LogOut from "../LogOut/LogOut";

const UserNavPart = () => {
    const { token } = useContext(AuthContext);
    const isAuthenticated = !!token;

    if (isAuthenticated) {
        return (
            <>
                <li>
                    <Link href="/profile">Profile</Link>
                </li>
                <li>
                    <LogOut />
                </li>
            </>
        );
    }

    return (
        <>
            <li>
                <Link href="/register">Register</Link>
            </li>
            <li>
                <Link href="/login">Log In</Link>
            </li>
        </>
    );
};

export default UserNavPart;
