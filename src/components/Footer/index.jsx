import { memo } from 'react';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <p>&#x1F49C; Made by <a href='https://github.com/Luuan11' target='_blank' rel='noopener noreferrer'>Luan</a> &copy; {currentYear}</p>
    </footer>
  );
}

export default memo(Footer);