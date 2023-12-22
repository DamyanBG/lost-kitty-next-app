"use client";

import { useContext } from "react";
import { Formik, FormikErrors } from "formik";
import { useRouter } from 'next/navigation';

import { AddCatForm } from "@/types/interfaces";
import { CatStatus } from "@/types/enums";
import { postCat } from "../api/catApi";
import { addCatSchema } from "@/utils/validations";
import FormGroup from "@/components/FormGroup";
import { AuthContext } from "@/context/AuthProvider";

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
        <main>
            <section className="text-center">
                <Formik
                    initialValues={initialFormState}
                    onSubmit={handleOnSubmit}
                    validationSchema={addCatSchema}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <FormGroup
                                labelText="Cat Name:"
                                fieldValue={formik.values.cat_name}
                                fieldName="cat_name"
                                onChange={formik.handleChange}
                            />

                            <FormGroup
                                labelText="Microchip:"
                                fieldValue={formik.values.microchip}
                                fieldName="microchip"
                                onChange={formik.handleChange}
                            />

                            <FormGroup
                                labelText="Passport ID:"
                                fieldValue={formik.values.passport_id}
                                fieldName="passport_id"
                                onChange={formik.handleChange}
                            />

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

                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </section>
        </main>
    );
}
