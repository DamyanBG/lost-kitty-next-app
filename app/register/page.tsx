"use client";

import { Formik } from "formik";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { UserRegisterForm as UserRegisterFormValues } from "../../types/interfaces";
import { userRegisterSchema } from "../../utils/validations";
import { postUser } from "../api/userApi";
import { convertUserRegisterForm } from "../../utils/caseConversion";
import InputField from "@/components/form/InputField";
import FormSubmitButton from "@/components/form/FormSubmitBtn";
import { wrapSubmitting } from "@/utils/wrappers";


const formInitialState: UserRegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
};

export default function Register() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const handleOnSubmit = async (values: UserRegisterFormValues) => {
        await postUser(convertUserRegisterForm(values))
        router.push("/login");
    };

    return (
        <main className="main">
            <section className="form-container">
                <Formik
                    initialValues={formInitialState}
                    onSubmit={wrapSubmitting(setIsSubmitting, handleOnSubmit)}
                    validationSchema={userRegisterSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Registration</h1>

                            <section className="input-section">
                                <InputField
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    placeholder="First Name"
                                    iconClassName="bx bxs-user"
                                />
                                <InputField
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    placeholder="Last Name"
                                    iconClassName="bx bxs-user"
                                />
                            </section>

                            <section className="input-section">
                                <InputField
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="Email"
                                    iconClassName="bx bxs-envelope"
                                />
                                <InputField
                                    name="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    placeholder="Phone Number"
                                    iconClassName="bx bxs-phone"
                                />
                            </section>

                            <section className="input-section">
                                <InputField
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Password"
                                    iconClassName="bx bxs-lock-alt"
                                    type="password"
                                />
                                <InputField
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    placeholder="Confirm Password"
                                    iconClassName="bx bxs-lock-alt"
                                    type="password"
                                />
                            </section>

                            <label htmlFor="">
                                <input 
                                    type="checkbox"
                                />
                                I agree with site&apos;s Terms and Conditions
                            </label>

                            <FormSubmitButton text="Register" disabled={isSubmitting} />
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
