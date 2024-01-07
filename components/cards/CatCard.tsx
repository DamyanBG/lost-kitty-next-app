import { CatCardProps } from "@/types/interfaces";
import Image from "next/image";
import Link from "next/link";

const CatCard = ({ photoUrl, catName, microchip, passportId, catId }: CatCardProps) => (
    <section className="card">
        <article className="card-image-container">
            <Image src={photoUrl} alt="Cat" priority fill />
        </article>
        <article className="card-info">
            <h2>{catName}</h2>
            <br />
            <p>Микрочип: {microchip}</p>
            <br />
            <p>Паспорт номер: {passportId}</p>
            <br />

            <Link className="" href={`/details/${catId}`}>
                Детайли
            </Link>
        </article>
    </section>
);

export default CatCard;
