import {
  Button,
  Container,
  GrupoForm,
  Icon,
  IconContainer
} from "./styles";
import { useRef } from "react";
import Github from '../../assets/github-icon.png'
import Linkedin from '../../assets/linkedin.png'

function Contatos() {
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
    <Container id="contatos">
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

        <IconContainer>
        <a href="https://github.com/jv-dev007" target="_blank">
            <Icon className="github" src={Github} alt="" />
        </a>

        <a  href="https://www.linkedin.com/in/joao-vitor-dos-santos-siqueira/" target="_blank">
          <Icon src={Linkedin} alt="" />
        </a>
        </IconContainer>
      </Container>
    
  );
}

export default Contatos;
