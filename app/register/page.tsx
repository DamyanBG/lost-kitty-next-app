"use client";

import { UserRegisterForm as UserRegisterFormValues } from "../../types/interfaces";
import FormGroup from "../../components/FormGroup";
import { Formik } from "formik";
import { userRegisterSchema } from "../../utils/validations";
import { postUser } from "../api/userApi";
import { convertUserRegisterForm } from "../../utils/caseConversion";

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
        <main>
            <section className="text-center">
                <Formik
                    initialValues={formInitialState}
                    onSubmit={handleOnSubmit}
                    validationSchema={userRegisterSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup
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
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}