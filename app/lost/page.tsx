import { getPaginatedLostCats, getTotalLostCats } from "../../api/catApi"
import CatCardsContaier from "@/components/cards/CatCardsContainer"
import Pagination from "@/components/Pagination"

export default async function Lost({
    searchParams
}: {
    searchParams?: {
        page?: string
    }
}) {
    const page = Number(searchParams?.page) || 1
    const total = await getTotalLostCats();
    const totalPages = Math.ceil(+total / 6)

    return (
        <main className="cards-main">
            <CatCardsContaier page={page} getPaginatedCatsFunc={getPaginatedLostCats} />
            <Pagination totalPages={totalPages} currentPage={page} />
        </main>
    )
}