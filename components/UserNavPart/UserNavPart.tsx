"use client";

import { MouseEventHandler, useContext } from "react";
import Link from "next/link";

import { AuthContext } from "@/context/AuthProvider";
import LogOut from "../LogOut/LogOut";

const UserNavPart = ({ handleLinkClick }: { handleLinkClick: MouseEventHandler}) => {
    const { token } = useContext(AuthContext);
    const isAuthenticated = !!token;

    if (isAuthenticated) {
        return (
            <>
                <li>
                    <Link onClick={handleLinkClick} href="/profile">Profile</Link>
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
                <Link onClick={handleLinkClick} href="/register">Register</Link>
            </li>
            <li>
                <Link onClick={handleLinkClick} href="/login">Log In</Link>
            </li>
        </>
    );
};

export default UserNavPart;
