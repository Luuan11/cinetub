import styles from "./NotFound.module.css"

function NotFound(){
    return(
        <section className={styles.notFound}>
            <div className={styles.divnot}>
                <h2>Hey Astronaut</h2>
                <p>Are you lost ? </p>
                <p>Page Not Found :C </p>
            </div>
        </section>
    )
}

export default NotFound;