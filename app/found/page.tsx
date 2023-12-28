import { getPaginatedFoundCats, getTotalFoundCats } from "../../api/catApi";
import CatCardsContaier from "@/components/cards/CatCardsContainer";
import Pagination from "@/components/Pagination";

export default async function Found({
    searchParams
}: {
    searchParams?: {
        page?: string
    }
}) {
    const page = Number(searchParams?.page) || 1
    const total = await getTotalFoundCats();
    const totalPages = Math.ceil(+total / 6)

    return (
        <main className="cards-main">
            <CatCardsContaier page={page} getPaginatedCatsFunc={getPaginatedFoundCats} />
            <Pagination totalPages={totalPages} currentPage={page} />
        </main>
    );
}
