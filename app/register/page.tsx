"use client";

import { Formik } from "formik";

import { UserRegisterForm as UserRegisterFormValues } from "../../types/interfaces";
import FormGroup from "../../components/FormGroup";
import { userRegisterSchema } from "../../utils/validations";
import { postUser } from "../api/userApi";
import { convertUserRegisterForm } from "../../utils/caseConversion";
import styles from "./register.module.css"


const formInitialState: UserRegisterFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
};

export default function Register() {
    const handleOnSubmit = (values: UserRegisterFormValues) => {
        postUser(convertUserRegisterForm(values))
    };

    return (
        <main className={styles.main}>
            <section className={styles.formContainer}>
                <Formik
                    initialValues={formInitialState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userRegisterSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Registration</h1>

                            <section className={styles.inputBox}>
                                <article className={styles.inputField}>
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                    />
                                    <i className='bx bxs-user' />
                                </article>
                                <article className={styles.inputField}>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                    />
                                    <i className='bx bxs-user' />
                                </article>
                            </section>

                            <section className={styles.inputBox}>
                                <article className={styles.inputField}>
                                    <input
                                        type="text"
                                        placeholder="Email"
                                    />
                                    <i className='bx bxs-envelope' />
                                </article>
                                <article className={styles.inputField}>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                    />
                                    <i className='bx bxs-phone' />
                                </article>
                            </section>

                            <section className={styles.inputBox}>
                                <article className={styles.inputField}>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                    />
                                    <i className='bx bxs-lock-alt' />
                                </article>
                                <article className={styles.inputField}>
                                    <input
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                    <i className='bx bxs-lock-alt' />
                                </article>
                            </section>

                            <label htmlFor="">
                                <input 
                                    type="checkbox"
                                />
                                I agree with site's Terms and Conditions
                            </label>

                            <button
                                type="submit"
                                className={styles.btn}
                            >
                                Register
                            </button>


                            {/* <FormGroup
                                labelText="First Name:"
                                fieldValue={formik.values.firstName}
                                fieldName="firstName"
                                onChange={formik.handleChange}
                            />

                            <FormGroup
                                labelText="Last Name:"
                                fieldValue={formik.values.lastName}
                                fieldName="lastName"
                                onChange={formik.handleChange}
                            />

                            <FormGroup
                                labelText="Phone number:"
                                fieldValue={formik.values.phoneNumber}
                                fieldName="phoneNumber"
                                onChange={formik.handleChange}
                            />

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
                            <button type="submit">Submit</button> */}
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
