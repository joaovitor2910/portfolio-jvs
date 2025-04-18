import {
  Button,
  Card,
  Container,
  ContainerProjects,
  ContainerSobre,
  Contatos,
  GrupoForm,
  Particulas,
  Projetos,
  Sobre,
  TextContainer,
} from "./styles";
import Foto from "../../assets/profile-portfolio.jpg";
import Project1 from "../../assets/projeto1.png";
import Project2 from "../../assets/projeto2.png";
import Project3 from "../../assets/projeto3.png";
import { useRef } from "react";



function Inicio() {
  const inputRef = useRef()
  const textareaRef = useRef()

  const enviarWhats = (event) => {
    event.preventDefault() //faz a tela nao recarregar
  
    const nome = inputRef.current.value
    const mensagem = textareaRef.current.value
    const telefone = '5574981270332'
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`
  
    window.open(url, '_blank')
    console.log(url)
  }

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
            especialmente ao desenvolvimento de interfaces, buscando sempre unir
            organização, funcionalidade e uma boa experiência para o usuário
          </p>
        </ContainerSobre>
      </Sobre>

      <Projetos id="projetos">
        <h2>Meus Projetos</h2>
        <ContainerProjects>
          <Card>
            <img src={Project1} alt="" />
            <TextContainer>
              <h3>TOPcine</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perferendis nesciunt dignissimos facilis nostrum nemo? Totam
                exercitationem, soluta cum quidem suscipit provident, pariatur
                sit architecto, repellendus eveniet quis voluptatem. Eveniet,
                iure.
              </p>
            </TextContainer>
          </Card>

          <Card>
            <img src={Project2} alt="" />
            <TextContainer>
              <h3>Loja de carros de luxo</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                illum et corrupti repellat hic! Atque obcaecati, modi
                perferendis, dolore itaque nam, nisi doloribus illo rem
                reprehenderit totam ratione tenetur blanditiis!
              </p>
            </TextContainer>
          </Card>

          <Card>
            <img src={Project3} alt="" />
            <TextContainer>
              <h3>Página de viagens</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam corrupti excepturi doloribus sit, nesciunt beatae atque
                totam repellat, quo at asperiores? Earum suscipit nulla
                exercitationem ducimus voluptate deleniti dolores aspernatur?
              </p>
            </TextContainer>
          </Card>
        </ContainerProjects>
      </Projetos>

      <Contatos id="contatos">
        <h2>Contatos</h2>
        <form onSubmit={enviarWhats}>
          <GrupoForm>
            <input className="text-form" placeholder="Nome" type="text"  ref={inputRef}/>
          </GrupoForm>
          <GrupoForm>
            <textarea className="text-form" placeholder="Digite sua mensagem" ref={textareaRef}></textarea>
          </GrupoForm>

          <Button type="submit">Enviar WhatsApp</Button>
        </form>
      </Contatos>
    </>
  );
}


export default Inicio;

