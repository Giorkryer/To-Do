import{
    BrowserRouter as Router,
    Routes,
    Route
}   from "react-router-dom";


import { Cadastro } from "./pages/cadastro/Cadastro";
import { Login } from "./pages/login/Login";


export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </Router>
    )
}