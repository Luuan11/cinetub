import Banner from "components/Banner";
import Title from "components/Title";
import Cards from "components/Cards";

import styles from "./Home.module.css";
import { useEffect, useState } from "react";

function Home() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/luuan11/cinetub-api/videos')
    .then(res => res.json())
    .then(dados => [
      setVideos(dados)
    ])
  }, [])

  return (
    <>

        <Banner image="home" />

        <Title>
            <h1>Local perfeito para seus videos especiais!</h1>
        </Title>

        <section className={styles.videoContainer}>
            {videos.map((video) => {
            return <Cards {...video} key={video.id} />;
            })}
        </section>

    </>
  );
}
export default Home;
