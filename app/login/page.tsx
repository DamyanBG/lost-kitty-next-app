"use client";

import { Formik } from "formik";
import { useContext } from "react";
import { useRouter } from "next/navigation";

import { UserLoginForm } from "../../types/interfaces";
import { userLoginSchema } from "../../utils/validations";
import { loginUser } from "../api/userApi";
import { AuthContext } from "@/context/AuthProvider";
import InputField from "@/components/form/InputField";
import FormSubmitButton from "@/components/form/FormSubmitBtn";

const formInitialState: UserLoginForm = {
    email: "",
    password: "",
};

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const router = useRouter();

    const handleOnSubmit = async (values: UserLoginForm) => {
        const token = await loginUser(values);
        setToken(token);
        localStorage.setItem("token", JSON.stringify(token));
        router.push("/");
    };

    return (
        <main className="main">
            <section className="form-container">
                <Formik
                    initialValues={formInitialState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userLoginSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Log In</h1>

                            <section className="input-section">
                                <InputField
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Email"
                                    iconClassName="bx bxs-envelope"
                                />
                                <InputField
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Password"
                                    iconClassName="bx bxs-lock-alt"
                                />
                            </section>

                            <FormSubmitButton text="Log In" />
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
