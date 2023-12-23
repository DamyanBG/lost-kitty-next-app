"use client";

import { useContext } from "react";
import { Formik, FormikErrors } from "formik";
import { useRouter } from 'next/navigation';

import { AddCatForm } from "@/types/interfaces";
import { CatStatus } from "@/types/enums";
import { postCat } from "../api/catApi";
import { addCatSchema } from "@/utils/validations";
import { AuthContext } from "@/context/AuthProvider";
import FormSubmitButton from "@/components/form/FormSubmitBtn";
import InputField from "@/components/form/InputField";

const initialFormState: AddCatForm = {
    cat_name: "",
    microchip: "",
    passport_id: "",
    status: CatStatus.Lost,
    photos: [""],
};

export default function AddCat() {
    const { token } = useContext(AuthContext);
    const router = useRouter()

    const handleOnSubmit = async (values: AddCatForm) => {
        const [catId, status] = await postCat(values, token);
        router.push(`/${status}/${catId}`)
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
                <Formik
                    initialValues={initialFormState}
                    onSubmit={handleOnSubmit}
                    validationSchema={addCatSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <section className="input-section">
                                <InputField
                                    name="cat_name"
                                    value={formik.values.cat_name}
                                    onChange={formik.handleChange}
                                    placeholder="Cat Name"
                                    iconClassName="bx bxs-cat"
                                />
                                <InputField
                                    name="microchip"
                                    value={formik.values.microchip}
                                    onChange={formik.handleChange}
                                    placeholder="Microchip"
                                    iconClassName="bx bxs-microchip"
                                />
                            </section>

                            <section className="input-section">
                                <InputField
                                    name="passport_id"
                                    value={formik.values.passport_id}
                                    onChange={formik.handleChange}
                                    placeholder="Passport ID"
                                    iconClassName="bx bx-id-card"
                                />
                                {/* <InputField
                                    name="microchip"
                                    value={formik.values.microchip}
                                    onChange={formik.handleChange}
                                    placeholder="Microchip"
                                    iconClassName="bx bxs-microchip"
                                /> */}
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

                            <FormSubmitButton text="Add cat" />
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
