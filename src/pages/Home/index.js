import Banner from "components/Banner";
import Title from "components/Title";
import Cards from "components/Cards";
import Loading from "components/Loading";
import ErrorMessage from "components/ErrorMessage";
import { useFetch } from "hooks/useFetch";
import { API_ENDPOINTS } from "utils/constants";

import styles from "./Home.module.css";

function Home() {
  const { data: videos, loading, error, refetch } = useFetch(API_ENDPOINTS.VIDEOS);

  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>The perfect place for your special videos!</h1>
      </Title>

      {loading && <Loading />}

      {error && <ErrorMessage message={error} onRetry={refetch} />}

      {!loading && !error && videos && (
        <section className={styles.videoContainer}>
          {videos.length > 0 ? (
            videos.map((video) => <Cards {...video} key={video.id} />)
          ) : (
            <p className={styles.emptyMessage}>No videos available at this time.</p>
          )}
        </section>
      )}
    </>
  );
}

export default Home;
