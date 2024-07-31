import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";
import { useParams } from "react-router-dom";

import NotFound from "pages/NotFound";

import { useEffect, useState } from "react";

function Player() {
  const [video, setVideo] = useState();
  const params = useParams();

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/luuan11/cinetub-api/videos?id=${params.id}`)
    .then(res => res.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])

  if (!video) {
    return <NotFound />
  }
  return (
    <>
      <Banner image="player" />
        <Title>
            <h1 className={styles.h1}> 
                Player
            </h1>
        </Title>
          <section className={styles.container}>
            <iframe 
            width="100%"
            height="100%"
            src={video.link}
            title={video.title}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
          </section>
    </>
  );
}

export default Player;
