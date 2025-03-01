import { CatResponse } from "@/types/interfaces";
import { CAT_DETAILS_URL } from "@/utils/urls";
import axios from "axios";
import Image from "next/image";

const getCatDetails = async (id: string) => {
    const response = await axios.get<CatResponse>(`${CAT_DETAILS_URL}/${id}`);
    const cat = response.data;
    return cat;
};

export default async function LostCat({ params }: { params: { id: string } }) {
    const cat = await getCatDetails(params.id);

    return (
        <main className="details-main">
            <section className="details-section">
                <article className="details-image-container">
                    <Image src={cat.photos_urls[0]} alt="Cat" priority fill />
                </article>
                <article className="details">
                    <h3>Име:</h3>
                    <br />
                    <p>{cat.cat_name}</p>
                    <br />
                    <br />
                    <h3>Микрочип:</h3>
                    <br />
                    <p>{cat.microchip}</p>
                    <br />
                    <br />
                    <h3>Паспорт номер:</h3>
                    <br />
                    <p>{cat.passport_id}</p>
                    <br />
                    <br />
                    <h3>
                        {cat.status === "lost" ? "Изгубен" : "Намерен"}
                        {" "}
                        около:
                    </h3>
                    <br />
                    <p>{cat.area}</p>
                </article>
            </section>
        </main>
    );
}
