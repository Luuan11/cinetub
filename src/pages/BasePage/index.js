import Container from "components/Container"
import styles from "./BasePage.module.css"
import FavoritesProvider from "Context/Favorite";
import { Outlet } from "react-router-dom";
import Header from "components/Header";

function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
        </main>
    )
}

export default BasePage;