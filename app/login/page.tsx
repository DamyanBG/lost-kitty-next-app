"use client";

import { Formik } from "formik";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

import { UserLoginForm } from "../../types/interfaces";
import { userLoginSchema } from "../../utils/validations";
import { loginUser } from "../../api/userApi";
import { AuthContext } from "@/context/AuthProvider";
import InputField from "@/components/form/InputField";
import FormSubmitButton from "@/components/form/FormSubmitBtn";
import { wrapSubmitting } from "@/utils/wrappers";

const formInitialState: UserLoginForm = {
    email: "",
    password: "",
};

export default function Login() {
    const { setToken } = useContext(AuthContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

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
                    onSubmit={wrapSubmitting(setIsSubmitting, handleOnSubmit)}
                    validationSchema={userLoginSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Вход</h1>

                            <section className="input-section">
                                <InputField
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="И-мейл"
                                    iconClassName="bx bxs-envelope"
                                />
                                <InputField
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Парола"
                                    iconClassName="bx bxs-lock-alt"
                                    type="password"
                                />
                            </section>

                            <FormSubmitButton text="Влез" disabled={isSubmitting} />
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
