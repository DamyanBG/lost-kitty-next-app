import CatCard from "./CatCard"
import { CatCardsContainerProps } from "@/types/interfaces"

const limit: number = 6

const CatCardsContaier = async ({ page, getPaginatedCatsFunc }: CatCardsContainerProps) => {
    const offset = (page - 1) * limit
    const cats = await getPaginatedCatsFunc(offset, limit)

    return (
        <section className="cards-container">
                {cats.map((cat) => (
                    <CatCard
                        key={cat.id}
                        photoUrl={cat.photos_urls[0]}
                        catName={cat.cat_name}
                        microchip={cat.microchip}
                        passportId={cat.passport_id}
                        catId={cat.id}
                    />
                ))}
            </section>
    )
}

export default CatCardsContaier
