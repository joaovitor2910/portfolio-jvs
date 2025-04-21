import {
  Container,
  ContainerSobre,
  Particulas,
  Sobre
} from "./styles";
import Foto from "../../assets/profile-portfolio.jpg";

function Inicio() {
  
  return (
    <>
      <Particulas></Particulas>
      <Container id="inicio">
        <img src={Foto} alt="foto-joao-vitor" />
        <h1>João Vitor dos Santos Siqueira</h1>
        <p>Desenvolvedor Front End</p>
      </Container>

      <Sobre id="sobre">
        <h2>Sobre Mim</h2>
        <ContainerSobre>
          <p>
            Olá! Sou um desenvolvedor em transição de carreira, vindo da área de
            mecânica industrial, onde desenvolvi um olhar atento aos detalhes,
            comunicação e resolução de problemas. Hoje, aplico essas mesmas
            qualidades no universo da programação, tendo me dedicado
            especialmente ao desenvolvimento de interfaces, transformando ideias em interfaces funcionais e intuitivas.
          </p>
        </ContainerSobre>
      </Sobre>
    </>
  );
}


export default Inicio;

