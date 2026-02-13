import { useParams } from "react-router-dom";
import Banner from "components/Banner";
import Title from "components/Title";
import Loading from "components/Loading";
import ErrorMessage from "components/ErrorMessage";
import NotFound from "pages/NotFound";
import { useFetch } from "hooks/useFetch";
import { API_ENDPOINTS } from "utils/constants";

import styles from "./Player.module.css";

function Player() {
  const { id } = useParams();
  const { data: videos, loading, error, refetch } = useFetch(API_ENDPOINTS.VIDEO_BY_ID(id));

  if (loading) {
    return (
      <>
        <Banner image="player" />
        <Loading />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Banner image="player" />
        <ErrorMessage message={error} onRetry={refetch} />
      </>
    );
  }

  const video = videos?.[0];

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1 className={styles.h1}>{video.title}</h1>
      </Title>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </section>
    </>
  );
}

export default Player;
