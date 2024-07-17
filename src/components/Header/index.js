import { Link } from "react-router-dom";
import logo from "./logo.png";
import HeaderLink from "components/HeaderLink";

import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="logo" />
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>

                <HeaderLink url="./Favorite">
                    Favorites
                </HeaderLink>
            </nav>

        </header>
    )
}
export default Header;
