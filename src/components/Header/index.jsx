import { memo } from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from 'components/HeaderLink';
import logo from './logo.png';
import styles from './Header.module.css';
import { ROUTES } from 'utils/constants';

function Header() {
  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} aria-label="Go to homepage">
        <img src={logo} alt="CineTub Logo" className={styles.logo} />
      </Link>
      <nav className={styles.nav} aria-label="Main navigation">
        <HeaderLink url={ROUTES.HOME}>
          Home
        </HeaderLink>
        <HeaderLink url={ROUTES.FAVORITES}>
          Favorites
        </HeaderLink>
      </nav>
    </header>
  );
}

export default memo(Header);
