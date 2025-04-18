import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { Container, Li, Menu } from "./styles";

function Header() {
  const { pathname } = useLocation();
  return (
    <Container>
      <Menu>
        <Li $isActive={pathname === "/#inicio"}>
          <Link to="inicio" smooth={true} duration={500}>Inicio</Link>
        </Li>
        <Li $isActive={pathname.includes("/#sobre")}>
          <Link to="sobre" smooth={true} duration={500} >Sobre</Link>
        </Li>
        <Li $isActive={pathname.includes("/#projetos")}>
          <Link to="projetos" smooth={true} duration={500}>Projetos</Link>
        </Li>
        <Li $isActive={pathname.includes("/#contatos")}>
          <Link to="contatos" smooth={true} duration={500}>Contatos</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
