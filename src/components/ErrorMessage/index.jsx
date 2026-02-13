import PropTypes from 'prop-types';
import styles from './ErrorMessage.module.css';

function ErrorMessage({ message, onRetry }) {
  return (
    <div className={styles.errorContainer} role="alert">
      <div className={styles.errorIcon}>⚠️</div>
      <h2 className={styles.errorTitle}>Oops! Something went wrong</h2>
      <p className={styles.errorMessage}>{message || 'Error loading data.'}</p>
      {onRetry && (
        <button 
          className={styles.retryButton}
          onClick={onRetry}
          type="button"
        >
          Tentar novamente
        </button>
      )}
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

export default ErrorMessage;
