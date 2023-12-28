"use client";

import { generatePagination } from "@/utils/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Pagination = ({
    totalPages,
    currentPage,
}: {
    totalPages: number;
    currentPage: number;
}) => {
    const pathname = usePathname();

    const createPageURL = (pageNumber: number | string) => {
        const params = new URLSearchParams(`page=${currentPage}`);
        params.set("page", pageNumber.toString());
        return `${pathname}?${params.toString()}`;
    };

    const allPages = generatePagination(currentPage, totalPages);

    return (
        <section className="pagination-section">
            {allPages.map((page) => (
                <article key={page}>
                    <Link href={createPageURL(page)}>{page}</Link>
                </article>
            ))}
        </section>
    );
};

export default Pagination;
