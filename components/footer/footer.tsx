import Link from "next/link"

import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <h3>За нас</h3>
                <hr />
                <p>Относно проекта</p>
                <p>Контакт</p>
                <p>За разработчици</p>
            </section>
            <section>
                <h3>Информация</h3>
                <hr />
                <p>Как да добавим котка</p>
                <p><Link href="/search">Търсене по номер на паспорт или микрочип</Link></p>
            </section>
            <section>
                <h3>Свържете се с нас</h3>
                <hr />
                <p><i className="bx bxl-facebook-square" /> Facebook</p>
                <p><i className="bx bxl-instagram-alt" /> Instagram</p>
            </section>
        </footer>
    )
}

export default Footer