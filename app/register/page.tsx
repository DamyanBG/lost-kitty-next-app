"use client";

import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import { UserRegisterForm as UserRegisterFormValues } from "../../types/interfaces";
import { userRegisterSchema } from "../../utils/validations";
import { postUser } from "../../api/userApi";
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
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isAgreed, setIsAgreed] = useState<boolean>(false);
    const [formValues, setFormValues] = useState<UserRegisterFormValues>(formInitialState)

    const handleOnSubmit = async (values: UserRegisterFormValues) => {
        if (!isAgreed) return;
        await postUser(convertUserRegisterForm(values));
        router.push("/login");
    };

    const handleAgreeChange = () => {
        setIsAgreed(!isAgreed);
    };

    const handleTermsClick = (values: UserRegisterFormValues) => () => {
        const { password, confirmPassword, ...valuesToStore } = values
        sessionStorage.setItem("formValues", JSON.stringify(valuesToStore))
    }

    useEffect(() => {
        const storedValues = sessionStorage.getItem("formValues")
        if (storedValues) {
            const valuesToSet = {
                ...JSON.parse(storedValues),
                password: "",
                confirmPassword: ""
            }
            setFormValues(valuesToSet)
        }   
    }, [])

    return (
        <main className="main">
            <section className="form-container">
                <Formik
                    initialValues={formValues}
                    enableReinitialize
                    onSubmit={wrapSubmitting(setIsSubmitting, handleOnSubmit)}
                    validationSchema={userRegisterSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Регистрация</h1>

                            <section className="input-section">
                                <InputField
                                    name="firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    placeholder="Име"
                                    iconClassName="bx bxs-user"
                                />
                                <InputField
                                    name="lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    placeholder="Фамилия"
                                    iconClassName="bx bxs-user"
                                />
                            </section>

                            <section className="input-section">
                                <InputField
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    placeholder="И-мейл"
                                    iconClassName="bx bxs-envelope"
                                />
                                <InputField
                                    name="phoneNumber"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    placeholder="Телефон за връзка"
                                    iconClassName="bx bxs-phone"
                                />
                            </section>

                            <section className="input-section">
                                <InputField
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    placeholder="Парола"
                                    iconClassName="bx bxs-lock-alt"
                                    type="password"
                                />
                                <InputField
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    placeholder="Потвърди паролата"
                                    iconClassName="bx bxs-lock-alt"
                                    type="password"
                                />
                            </section>

                            <label htmlFor="">
                                <input
                                    type="checkbox"
                                    checked={isAgreed}
                                    onChange={handleAgreeChange}
                                />
                                Съгласявам се с 
                                {" "}
                                <Link href="/terms-conditions" onClick={handleTermsClick(formik.values)}>
                                    Условията
                                </Link>
                                {" "}
                                на сайта!
                            </label>

                            <FormSubmitButton
                                text="Регистриране"
                                disabled={isSubmitting}
                            />
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
