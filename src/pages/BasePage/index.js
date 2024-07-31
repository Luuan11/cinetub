import Container from "components/Container"
import FavoritesProvider from "Context/Favorite";
import { Outlet } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";

function BasePage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}

export default BasePage;