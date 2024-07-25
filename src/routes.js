import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoritesProvider from "Context/Favorite";

import Favorites from "pages/Favorites";
import Home from "pages/Home";
import Player from "pages/Player";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />

      <Container>
        <FavoritesProvider>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/favorite" element={<Favorites />}></Route>
            <Route path="/:id" element={<Player />}></Route>
          </Routes>
        </FavoritesProvider>
      </Container>

      <Footer />
    </BrowserRouter>
  );
}
export default AppRoutes;
