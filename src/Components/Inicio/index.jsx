import { Container, ContainerSobre, Particulas, Sobre } from "./styles";
import Foto from "../../assets/profile-portfolio.jpg";

function Inicio() {
  return (
    <>
      <Particulas></Particulas>
      <Container id="inicio">
        <img src={Foto} alt="image-profile" />
        <h1>João Vitor dos Santos Siqueira</h1>
        <p>Desenvolvedor Front End</p>
      </Container>

      <Sobre id="sobre">
        <h2>Sobre Mim</h2>
        <ContainerSobre>
          <p>
            Muito prazer! Meu nome é João Vitor e sou um desenvolvedor web em
            transição de carreira. Antes de entrar para o mundo da tecnologia,
            atuei na área de mecânica industrial, onde aprendi na prática o
            valor de ser detalhista, resolver problemas sob pressão e trabalhar
            bem em equipe. Hoje, trago toda essa bagagem para a programação.
            Minha principal paixão está no front-end, criando interfaces que vão
            além da estética: que sejam intuitivas, acessíveis e agradáveis de
            usar. Estou em constante evolução, buscando aprender mais a cada
            projeto.
          </p>
        </ContainerSobre>
      </Sobre>
    </>
  );
}

export default Inicio;
