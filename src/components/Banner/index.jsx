import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './Banner.module.css';

function Banner({ image, alt }) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url('/images/banner-${image}.jpg')` }}
      role="img"
      aria-label={alt || `Banner ${image}`}
    />
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default memo(Banner);