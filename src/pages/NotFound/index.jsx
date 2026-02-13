import { memo } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <section className={styles.notFound}>
      <div className={styles.emptyState}>
        <p className={styles.emptyIcon}>🚀</p>
        <p className={styles.emptyMessage}>
          Hey Astronaut, are you lost?
        </p>
        <p className={styles.emptyHint}>
          Page Not Found
        </p>
        <Link to={ROUTES.HOME} className={styles.backButton}>
          Back to Home
        </Link>
      </div>
    </section>
  );
}

export default memo(NotFound);