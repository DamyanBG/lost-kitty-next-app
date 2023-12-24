import { CatResponse } from "@/types/interfaces";
import { CAT_DETAILS_URL, FOUND_CATS_URL } from "@/utils/urls";
import axios from "axios";
import Image from "next/image";

const getCatDetails = async (id: string) => {
    const response = await axios.get(`${CAT_DETAILS_URL}/${id}`);
    const cat: CatResponse = response.data;
    return cat;
};

export async function generateStaticParams() {
    const response = await axios.get(FOUND_CATS_URL);
    const cats: Array<CatResponse> = response.data;

    return cats.map((cat) => ({
        id: String(cat.id),
    }));
}

export default async function FoundCat({ params }: { params: { id: string } }) {
    const cat = await getCatDetails(params.id);

    return (
        <main>
            <section className="text-center">
                <p>{cat.cat_name}</p>
                <p>{cat.microchip}</p>
                <p>{cat.passport_id}</p>
                <div>
                    <Image
                        src={cat.photos_urls[0]}
                        width={200}
                        height={200}
                        alt="Cat"
                    />
                </div>
            </section>
        </main>
    );
}
