"use client";

import { useContext, useEffect, useState } from "react";

import ReadOnlyInput from "@/components/form/ReadOnlyInput";
import { AuthContext } from "@/context/AuthProvider";
import { getUserInfo } from "../api/userApi"; 
import { ProfileInfo } from "@/types/interfaces";

const infoInitialState: ProfileInfo = {
    first_name: "",
    last_name: "",
    email: "",
    phone_number: ""
}

export default function Profile() {
    const { token } = useContext(AuthContext)
    const [profileInfo, setProfileInfo] = useState(infoInitialState)

    useEffect(() => {
        if (!token) return
        const requestUserInfo = async () => {
            const userInfo = await getUserInfo(token)
            setProfileInfo(userInfo)
        }

        requestUserInfo()
    }, [token])

    return (
        <main className="main">
            <section className="form-container">
               
                <form>
                    <h1>Profile Information</h1>

                    <section className="input-section">
                        <ReadOnlyInput value={profileInfo.first_name} iconClassName="bx bxs-user" />
                        <ReadOnlyInput value={profileInfo.last_name} iconClassName="bx bxs-user" />
                    </section>

                    <section className="input-section">
                        <ReadOnlyInput value={profileInfo.email} iconClassName="bx bxs-envelope" />
                        <ReadOnlyInput value={profileInfo.phone_number} iconClassName="bx bxs-phone" />
                    </section>

                </form>
            </section>
        </main>
    );
}
