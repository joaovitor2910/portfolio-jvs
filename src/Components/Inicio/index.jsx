import { Container, ContainerSobre, Particulas, Sobre } from "./styles";
import Foto from "../../assets/profile-portfolio.jpg";

function Inicio() {
  return (
    <>
      <Particulas></Particulas>
      <Container id="inicio">
        <img src={Foto} alt="image-profile" />
        <h1>João Vitor dos Santos Siqueira</h1>
        <p>Desenvolvedor Full Stack</p>
      </Container>

      <Sobre id="sobre">
        <h2>Sobre Mim</h2>
        <ContainerSobre>
          <p>
           Muito prazer! Meu nome é João Vitor e sou um desenvolvedor Full Stack em transição de carreira. Antes de mergulhar no mundo da tecnologia, atuei na área de mecânica industrial, onde aprendi na prática a importância de ser detalhista, resolver problemas sob pressão e trabalhar de forma colaborativa. Hoje, levo toda essa experiência para o desenvolvimento de software, atuando tanto no front-end quanto no back-end. Gosto de criar interfaces que sejam intuitivas, acessíveis e visualmente agradáveis, além de construir arquiteturas de back-end eficientes, seguras e escaláveis. Estou sempre em busca de novos aprendizados e desafios que me façam evoluir como profissional e entregar soluções de qualidade.
          </p>
        </ContainerSobre>
      </Sobre>
    </>
  );
}

export default Inicio;
