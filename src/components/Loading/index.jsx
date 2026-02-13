import styles from './Loading.module.css';

function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.spinner} role="status" aria-label="Loading">
        <span className={styles.srOnly}>Loading...</span>
      </div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
}

export default Loading;
