import { memo } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import styles from './HeaderLink.module.css';

function HeaderLink({ url, children }) {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <Link
      to={url}
      className={`${styles.link} ${isActive ? styles.active : ''}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

HeaderLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default memo(HeaderLink);