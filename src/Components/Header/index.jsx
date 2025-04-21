import { Link } from "react-scroll";
import { Container, Li, Menu } from "./styles";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState("/");
  
  
  return (
    <Container>
      <Menu>
        <Li $isActive={active === "/"}>
          <Link
            to="inicio"
            smooth={true}
            duration={500}
            onClick={() => setActive("/")}
          >
            Inicio
          </Link>
        </Li>
        <Li $isActive={active === "sobre"}>
          <Link
            to="sobre"
            smooth={true}
            duration={500}
            onClick={() => setActive("sobre")}
          >
            Sobre
          </Link>
        </Li>
        <Li $isActive={active.includes("projetos")}>
          <Link
            to="projetos"
            smooth={true}
            duration={500}
            onClick={() => setActive("projetos")}
          >
            Projetos
          </Link>
        </Li>
        <Li $isActive={active.includes("contatos")}>
          <Link
            to="contatos"
            smooth={true}
            duration={500}
            onClick={() => setActive("contatos")}
          >
            Contatos
          </Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
