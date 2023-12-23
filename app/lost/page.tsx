import Image from "next/image"
import { getAllCats } from "../api/catApi"
import styles from "./card.module.css"
import Link from "next/link"

export default async function Lost() {
    const cats = await getAllCats()

    return (
        <main>
            <section className={styles.cardContainer}>
                {cats.map((cat) => (
                    <article className={styles.catCard} key={cat.id}>
                        <article className={styles.imageContainer}>
                            <Image
                             src={cat.photos_urls[0]}
                             alt="Cat"
                                fill
                                object-fit="contain"
                            />
                        </article>
                        <h2>{cat.cat_name}</h2>
                        <p>Microchip: {cat.microchip}</p>
                        <p>Passport ID: {cat.passport_id}</p>
                        
                        <Link className={styles.detailsLink} href={`/lost/${cat.id}`}>Details</Link>
                        
                    </article>
                ))}
            </section>
        </main>
    )
}