import { memo } from 'react';
import Banner from 'components/Banner';
import Title from 'components/Title';
import Card from 'components/Cards';
import { useFavoriteContext } from 'Context/Favorite';
import styles from './Favorites.module.css';

function Favorites() {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Banner image="favorite" alt="Banner de favoritos" />
      <Title>
        <h1>My Favorites</h1>
      </Title>
      <section className={styles.section}>
        {favorites.length > 0 ? (
          favorites.map((fav) => <Card {...fav} key={fav.id} />)
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyIcon}>⭐</p>
            <p className={styles.emptyMessage}>
              You haven't added any videos to your favorites yet.
            </p>
            <p className={styles.emptyHint}>
              Click on the heart icon on the videos to add them to your favorites!
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default memo(Favorites);