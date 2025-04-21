import Contatos from "../../Components/Contatos";
import Header from "../../Components/Header";
import Inicio from "../../Components/Inicio";
import Projetos from "../../Components/Projetos";

function Home() {
    return (
        <>
        <Header />
        <Inicio />
        <Projetos />
        <Contatos />
        </>
    )
}

export default Home