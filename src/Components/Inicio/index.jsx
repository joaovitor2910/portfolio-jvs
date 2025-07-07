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
            Profissional em transição de carreira para a área de programação, com experiência em Mecânica 
              Industrial. Desenvolvi habilidades transferíveis como raciocínio lógico, análise de processos, resolução de problemas e trabalho em equipe, que agregam valor ao meu desempenho como desenvolvedor.
              <br />
              Atuo como Desenvolvedor Front-End, com experiência prática em projetos utilizando HTML, CSS, 
              JavaScript, React e versionamento com Git/GitHub. Capaz de transformar wireframes e protótipos em soluções web funcionais e acessíveis.
              <br />
              Busco oportunidades para atuar em equipes colaborativas, onde possa contribuir com meu conhecimento 
              técnico, visão prática e perfil proativo, ao mesmo tempo em que continuo evoluindo como profissional de tecnologia
          </p>
        </ContainerSobre>
      </Sobre>
    </>
  );
}

export default Inicio;
