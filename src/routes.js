import Home from "pages/home"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function AppRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoutes