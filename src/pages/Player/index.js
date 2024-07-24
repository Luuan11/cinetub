import Banner from "components/Banner";
import styles from "./Player.module.css";
import Title from "components/Title";

function Player() {
  return (
    <>
      <Banner image="player" />
        <Title>
            <h1 className={styles.h1}> 
                Player
            </h1>
        </Title>
    </>
  );
}

export default Player;
