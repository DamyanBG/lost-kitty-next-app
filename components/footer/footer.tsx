import styles from "./footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section>
                <h3>About</h3>
                <hr />
                <p>Project information</p>
                <p>Contact Us</p>
                <p>For developers</p>
            </section>
            <section>
                <h3>Information</h3>
                <hr />
                <p>How to post lost cat</p>
                <p>How to post found cat</p>
                <p>Search by Microchip or Passport ID</p>
            </section>
            <section>
                <h3>Connect with us</h3>
                <hr />
                <p>Facebook</p>
                <p>Instagram</p>
            </section>
        </footer>
    )
}

export default Footer