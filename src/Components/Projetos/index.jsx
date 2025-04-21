import { Container, Card, ContainerProjects, Text } from "./styles";
import Project1 from "../../assets/projeto1.png";
import Project2 from "../../assets/projeto2.png";
import Project3 from "../../assets/projeto3.png";

function Projetos() {
  return (
    <Container id="projetos">
      <h2>Meus Projetos</h2>
      <ContainerProjects>
        <Card>
          <a href="http://project-topcine.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Project1} alt="" />
            <Text>
              <h3>TOPcine</h3>
              <p>
                Aplicação web desenvolvida com React, Styled Components e Axios,
                que consome a API do The Movie Database (TMDb) para exibir
                informações atualizadas sobre filmes e séries. O usuário pode
                explorar produções populares, ver detalhes como sinopse, nota e
                data de lançamento, além de navegar por diferentes categorias
                com uma interface responsiva e moderna.
                <br />
                <br />
                💻 Tecnologias: React, JavaScript, Styled Components, Axios,
                TMDb API
              </p>
            </Text>
          </a>
        </Card>

        <Card>
          <a href="http://projeto-animado-carros-ftgp.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Project2} alt="" />
            <Text>
              <h3>Loja de Carros Esportivos</h3>
              <p>
                Landing Page de uma loja fictícia de carros esportivos, com foco
                em performance visual e impacto. O projeto destaca modelos de
                alto desempenho com um design arrojado, além de botões de ação
                que simulam uma experiência real de navegação em um e-commerce.
                <br />
                <br />
                💻 Tecnologias: HTML, CSS, JavaScript
              </p>
            </Text>
          </a>
        </Card>

        <Card>
          <a href="http://cafeteria-jvs.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Project3} alt="" />
            <Text>
              <h3>Coffee JVS</h3>
              <p>
                Projeto de uma Landing Page de cafeteria com visual moderno e
                aconchegante, criada para destacar produtos, cardápio e
                diferenciais da marca. O layout responsivo proporciona uma
                navegação fluida em qualquer dispositivo, ideal para
                apresentação institucional de um negócio local.
                <br />
                <br />
                💻 Tecnologias: HTML, CSS, JavaScript, Responsividade (Media
                Query)
              </p>
            </Text>
          </a>
        </Card>
      </ContainerProjects>
    </Container>
  );
}

export default Projetos;
