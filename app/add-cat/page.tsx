"use client";

import { useContext, useState } from "react";
import { Formik, FormikErrors } from "formik";
import { useRouter } from "next/navigation";

import { AddCatForm, SubmittingFunction } from "@/types/interfaces";
import { CatStatus } from "@/types/enums";
import { postCat } from "../../api/catApi";
import { addCatSchema } from "@/utils/validations";
import { AuthContext } from "@/context/AuthProvider";
import FormSubmitButton from "@/components/form/FormSubmitBtn";
import InputField from "@/components/form/InputField";
import Link from "next/link";
import { wrapSubmitting } from "@/utils/wrappers";

const initialFormState: AddCatForm = {
    cat_name: "",
    microchip: "",
    passport_id: "",
    status: CatStatus.Lost,
    photos: [""],
    area: "",
};

export default function AddCat() {
    const { token } = useContext(AuthContext);
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const isAuthenticated = !!token;

    const handleOnSubmit: SubmittingFunction = async (values: AddCatForm) => {
        const catId = await postCat(values, token);
        router.push(`/details/${catId}`);
    };

    const handleOnFileUpload = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFieldValue: (
            field: string,
            value: any,
            shouldValidate?: boolean | undefined
        ) => Promise<void | FormikErrors<AddCatForm>>
    ) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setFieldValue("photos", [reader.result as string]);
        };
        if (e.target.files) {
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    return (
        <main className="main">
            <section className="form-container">
                {isAuthenticated ? (
                    <Formik
                        initialValues={initialFormState}
                        onSubmit={wrapSubmitting(
                            setIsSubmitting,
                            handleOnSubmit
                        )}
                        validationSchema={addCatSchema}
                    >
                        {(formik) => (
                            <form onSubmit={formik.handleSubmit}>
                                <section className="input-section">
                                    <InputField
                                        name="cat_name"
                                        value={formik.values.cat_name}
                                        onChange={formik.handleChange}
                                        placeholder="Име"
                                        iconClassName="bx bxs-cat"
                                    />
                                    <InputField
                                        name="microchip"
                                        value={formik.values.microchip}
                                        onChange={formik.handleChange}
                                        placeholder="Микрочип"
                                        iconClassName="bx bxs-microchip"
                                    />
                                </section>

                                <section className="input-section">
                                    <InputField
                                        name="passport_id"
                                        value={formik.values.passport_id}
                                        onChange={formik.handleChange}
                                        placeholder="Паспорт номер"
                                        iconClassName="bx bx-id-card"
                                    />
                                    <article className="input-field">
                                        <select
                                            name="status"
                                            value={formik.values.status}
                                            onChange={formik.handleChange}
                                        >
                                            {Object.values(CatStatus).map((status) => (
                                                <option value={status} key={status}>{status === "lost" ? "Изгубен" : "Намерен"}</option>
                                            ))}
                                        </select>
                                        <i className="bx bxs-info-square" />
                                    </article>
                                </section>

                                <section className="input-section">
                                    <InputField
                                        name="area"
                                        value={formik.values.area}
                                        onChange={formik.handleChange}
                                        placeholder="Място"
                                        iconClassName="bx bx-map"
                                    /> 
                                </section>

                                <article className="form-group">
                                    <label htmlFor="">Cat Photo:</label>
                                    <input
                                        type="file"
                                        onChange={(e) => {
                                            handleOnFileUpload(
                                                e,
                                                formik.setFieldValue
                                            );
                                        }}
                                    />
                                </article>

                                <FormSubmitButton
                                    text="Добави"
                                    disabled={isSubmitting}
                                />
                            </form>
                        )}
                    </Formik>
                ) : (
                    <section className="not-authenticated-message">
                        <h1>Нужна е регистрация, за да добавите котка!</h1>
                        <p>
                            Отиде на <Link href="/register">регистрация</Link>!
                        </p>
                    </section>
                )}
            </section>
        </main>
    );
}
