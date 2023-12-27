"use client";

import { Formik } from "formik";
import { useRouter } from "next/navigation";

import InputField from "@/components/form/InputField";
import { SearchByFormValues } from "@/types/interfaces";
import SelectField from "@/components/form/SelectField";
import FormSubmitButton from "@/components/form/FormSubmitBtn";
import { searchCatByMicrochip, searchCatByPassportId } from "@/api/catApi";
import { useState } from "react";

const formInitialValues: SearchByFormValues = {
    id: "",
    searchBy: "microchip",
};

export default function Search() {
    const router = useRouter();
    const [searchMessage, setSearchMessage] = useState<string | undefined>();

    const handleSubmit = async (values: SearchByFormValues) => {
        const requestFunc =
            values.searchBy === "microchip"
                ? searchCatByMicrochip
                : searchCatByPassportId;
        const { id, message } = await requestFunc(values.id);
        if (id) {
            router.push(`/details/${id}`);
            return;
        }
        setSearchMessage(message);
    };

    return (
        <main className="main">
            <section className="form-container">
                <Formik
                    initialValues={formInitialValues}
                    onSubmit={handleSubmit}
                >
                    {(formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <h1>Search Cat</h1>

                            <section className="input-section">
                                <InputField
                                    name="id"
                                    value={formik.values.id}
                                    onChange={formik.handleChange}
                                    placeholder={`Enter ${
                                        formik.values.searchBy === "microchip"
                                            ? "Microchip"
                                            : "Passport ID"
                                    }`}
                                    iconClassName={`bx ${
                                        formik.values.searchBy === "microchip"
                                            ? "bx-chip"
                                            : "bxs-id-card"
                                    }`}
                                />
                                <SelectField
                                    name="searchBy"
                                    value={formik.values.searchBy}
                                    onChange={formik.handleChange}
                                    iconClassName="bx bx-category-alt"
                                >
                                    <option value="microchip">Microchip</option>
                                    <option value="passportId">
                                        Passport ID
                                    </option>
                                </SelectField>
                            </section>
                            <FormSubmitButton text="Search" />
                        </form>
                    )}
                </Formik>
                {searchMessage && (
                    <section className="search-result">
                        <h3>{searchMessage}</h3>
                    </section>
                )}
            </section>
        </main>
    );
}
