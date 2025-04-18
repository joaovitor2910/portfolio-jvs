import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Inicio from "../Components/Inicio";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Inicio/>}/>
            <Route path="/projetos"/>
            <Route path="/contatos"/>
        </Routes>
    )
}

export default Router