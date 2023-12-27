import { CatResponse } from "@/types/interfaces";
import { LOST_CATS_URL, CAT_DETAILS_URL } from "@/utils/urls";
import axios from "axios";
import Image from "next/image";

const getCatDetails = async (id: string) => {
    const response = await axios.get(`${CAT_DETAILS_URL}/${id}`);
    const cat: CatResponse = response.data;
    return cat;
};

export async function generateStaticParams() {
    const response = await axios.get(LOST_CATS_URL);
    const cats: Array<CatResponse> = response.data;

    return cats.map((cat) => ({
        id: String(cat.id),
    }));
}

export default async function LostCat({ params }: { params: { id: string } }) {
    const cat = await getCatDetails(params.id);

    return (
        <main className="details-main">
            <section className="details-section">
                <article className="details-image-container">
                    <Image src={cat.photos_urls[0]} alt="Cat" priority fill />
                </article>
                <article className="details">
                    <h3>Cat name:</h3>
                    <br />
                    <p>{cat.cat_name}</p>
                    <br />
                    <br />
                    <h3>Microchip:</h3>
                    <br />
                    <p>{cat.microchip}</p>
                    <br />
                    <br />
                    <h3>Passport ID:</h3>
                    <br />
                    <p>{cat.passport_id}</p>
                </article>
            </section>
        </main>
    );
}
