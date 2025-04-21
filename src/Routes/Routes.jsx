import { Route, Routes } from "react-router-dom";
import Home from "../Containers/Home";
import Inicio from "../Components/Inicio";
import Projetos from "../Components/Projetos";
import Contatos from "../Components/Contatos";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<Inicio />} />
            <Route path="/projetos" element={<Projetos />}/>
            <Route path="/contatos" element={ <Contatos/> }/>
        </Routes>
    )
}

export default Router