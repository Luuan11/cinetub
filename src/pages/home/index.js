import Header from "components/Header";
import Footer from "components/Footer";
import Banner from "components/Banner";
import Title from "components/Title";
import Cards from "components/Cards";

import videos from 'json/db.json';

import styles from './Home.module.css'

function Home(){
    return (
        <>
            <Header />
            <Banner image="home" />
            <Title>
                <h1>Local perfeito para seus videos especiais!</h1>
            </Title>
            <section className={styles.videoContainer}>

                {videos.map((video) => {
                    return <Cards {...video} key={video.id} />
                })}

            </section>

            <Footer />
        </>
    )
}
export default Home;