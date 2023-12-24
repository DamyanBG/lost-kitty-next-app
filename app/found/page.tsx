import Image from "next/image";
import Link from "next/link";

import { getFoundCats } from "../api/catApi";

export default async function Found() {
    const cats = await getFoundCats();

    return (
        <main className="cards-main">
            <section className="cards-container">
                {cats.map((cat) => (
                    <section className="card" key={cat.id}>
                        <article className="card-image-container">
                            <Image
                                src={cat.photos_urls[0]}
                                alt="Cat"
                                priority
                                fill
                            />
                        </article>
                        <article className="card-info">
                            <h2>{cat.cat_name}</h2>
                            <br />
                            <p>Microchip: {cat.microchip}</p>
                            <br />
                            <p>Passport ID: {cat.passport_id}</p>
                            <br />

                            <Link className="" href={`/found/${cat.id}`}>
                                Details
                            </Link>
                        </article>
                    </section>
                ))}
            </section>
        </main>
    );
}
