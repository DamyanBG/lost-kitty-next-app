import { CatResponse } from "@/types/interfaces";
import { CATS_URL, CAT_DETAILS_URL } from "@/utils/urls";
import axios from "axios";
import Image from "next/image";

const getCatDetails = async (id: string) => {
    const response = await axios.get(`${CAT_DETAILS_URL}/${id}`);
    const cat: CatResponse = response.data;
    return cat;
};

export async function generateStaticParams() {
    const response = await axios.get(CATS_URL);
    const cats: Array<CatResponse> = response.data;

    return cats.map((cat) => ({
        id: String(cat.id),
    }));
}

export default async function LostCat({ params }: { params: { id: string } }) {
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
