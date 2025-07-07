import { Container, Card, ContainerProjects, Text } from "./styles";
import Project1 from "../../assets/projeto1.png";
import Project2 from "../../assets/weather-picture.png";
import Project3 from "../../assets/projeto2.png";
import Project4 from "../../assets/projeto3.png";
import StoreProject from '../../assets/jvstore-project.png'
import YoutubeProject from '../../assets/youtube-clone.png'

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
          <a href="https://jvs-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={StoreProject} alt="" />
            <Text>
              <h3>JVStore</h3>
              <p>
                Aplicação web de e-commerce desenvolvida com React e Tailwind CSS, focada em responsividade e boa experiência do usuário. O projeto inclui um layout moderno, carrossel de produtos, filtragem por categorias e navegação otimizada. Trabalhei conceitos de design responsivo, usabilidade e performance, com atenção à organização de código e boas práticas de desenvolvimento front-end.
                <br />
                <br />
                💻 Tecnologias: React, JavaScript, Tailwind CSS e Axios
              </p>
            </Text>
          </a>
        </Card>

         <Card>
          <a href="http://previsao-do-tempo-eta.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Project2} alt="" />
            <Text>
              <h3>Previsão Do Tempo</h3>
              <p>
                Weather JVS é uma aplicação web de previsão do tempo, com o objetivo de praticar e demonstrar habilidades em consumo de APIs, manipulação de dados e desenvolvimento de interfaces intuitivas. A aplicação permite ao usuário buscar por qualquer cidade e visualizar informações meteorológicas atualizadas.
                <br />
                <br />
                💻 Tecnologias: React, JavaScript, Node e Axios
              </p>
            </Text>
          </a>
        </Card>

        <Card>
          <a href="http://projeto-animado-carros-ftgp.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={Project3} alt="" />
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
            <img src={Project4} alt="" />
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

        <Card>
          <a href="https://jvs-ecommerce.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img src={YoutubeProject} alt="" />
            <Text>
              <h3>Youtube Clone - JVS</h3>
              <p>
                Projeto desenvolvido como parte dos meus estudos em TypeScript, APIs REST e integração entre Frontend e Backend. O YouTube Clone conta com consumo de dados via Axios, interface inspirada na plataforma original e armazenamento das informações em banco de dados relacional MySQL/MariaDB. A proposta é simular funcionalidades básicas da plataforma, como exibição e navegação entre vídeos, enquanto pratico boas práticas com TypeScript, organização de código e modelagem de dados no backend.
                <br />
                <br />
                💻 Tecnologias: TypeScript, React, Axios, API REST
                </p>
            </Text>
          </a>
        </Card>
      </ContainerProjects>
    </Container>
  );
}

export default Projetos;
