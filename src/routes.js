import Container from "components/Container"
import Footer from "components/Footer"
import Header from "components/Header"

import Favorites from "pages/Favorites"
import Home from "pages/Home"

import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes(){
    return (
        <BrowserRouter>
        <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/favorites" element={<Favorites/>}></Route>
                </Routes>
            </Container>
        <Footer />
        </BrowserRouter>
    )
}
export default AppRoutes