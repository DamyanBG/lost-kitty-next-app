import Image from "next/image"
import { getAllCats } from "../api/catApi"
import styles from "./card.module.css"

export default async function Lost() {
    const cats = await getAllCats()

    return (
        <main>
            <section className={styles.cardContainer}>
                {cats.map((cat) => (
                    <article className={styles.catCard} key={cat.id}>
                        <article>
                            {/* <Image
                             src={cat.photos_urls[0]}
                             alt="Cat"
                             width={100}
                             height={100}
                            /> */}
                        </article>
                        <h2>{cat.cat_name}</h2>
                        <p>Microchip: {cat.microchip}</p>
                        <p>Passport ID: {cat.passport_id}</p>
                    </article>
                ))}
            </section>
        </main>
    )
}