"use client";

import { Formik } from "formik";
import { UserLoginForm } from "../../types/interfaces";
import { userLoginSchema } from "../../utils/validations";
import FormGroup from "../../components/FormGroup";
import { loginUser } from "../api/userApi";
import { useContext } from "react";
import { AuthContext } from "@/context/AuthProvider";
import { useRouter } from 'next/navigation'

const formInitialState: UserLoginForm = {
    email: "",
    password: "",
};

export default function Login() {
    const { setToken } = useContext(AuthContext)
    const router = useRouter()

    const handleOnSubmit = async (values: UserLoginForm) => {
        const token = await loginUser(values);
        setToken(token)
        localStorage.setItem("token", JSON.stringify(token))
        router.push("/")
    };

    return (
        <main>
            <section className="text-center">
                <Formik
                    initialValues={formInitialState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userLoginSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup
                                labelText="Email:"
                                fieldValue={formik.values.email}
                                fieldName="email"
                                onChange={formik.handleChange}
                            />

                            <FormGroup
                                labelText="Password:"
                                fieldValue={formik.values.password}
                                fieldName="password"
                                onChange={formik.handleChange}
                            />
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
