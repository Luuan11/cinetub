import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useFavoriteContext } from 'Context/Favorite';
import styles from './Card.module.css';
import iconFavorite from './favorite.png';
import iconDisfavorite from './unfavorite.png';

function Card({ id, title, capa }) {
  const { isFavorite, toggleFavorite } = useFavoriteContext();
  const isVideoFavorite = isFavorite(id);
  const icon = isVideoFavorite ? iconDisfavorite : iconFavorite;
  const altText = isVideoFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos';

  const handleFavoriteClick = () => {
    toggleFavorite({ id, title, capa });
  };

  return (
    <article className={styles.card}>
      <Link className={styles.link} to={`/${id}`} aria-label={`Assistir ${title}`}>
        <img src={capa} alt={title} className={styles.capa} loading="lazy" />
        <h2>{title}</h2>
      </Link>
      <button
        className={styles.favoriteButton}
        onClick={handleFavoriteClick}
        aria-label={altText}
        type="button"
      >
        <img src={icon} alt={altText} className={styles.favorite} />
      </button>
    </article>
  );
}

Card.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  capa: PropTypes.string.isRequired,
};

export default memo(Card);