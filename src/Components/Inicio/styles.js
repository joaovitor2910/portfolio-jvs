import styled, { keyframes } from 'styled-components'

const flutuar = keyframes`
  0%, 100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
`

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 300px;
    height: 300px;
    box-shadow: 0 0 20px rgba(79, 70, 229, 0.3);
    border-radius: 50%;
    border: 4px solid var(--vidro);
    animation: ${flutuar} 5s ease-in-out infinite;
  }
  h1 {
    font-size: 3.5rem;
    color: var(--primaria);
    font-weight: bold;
    margin: 20px;
  }

  p {
    font-size: 1.5rem;
    color: var(--claro);
  }
`

export const Sobre = styled.section`
  padding: 6rem 2rem;

  h2 {
    font-size: 3rem;
    color: var(--claro);
    text-align: center;
    margin-bottom: 20px;
  }
`
export const ContainerSobre = styled.div`
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto; //centralizar
  border-radius: 16px;
  border: 1px solid var(--vidro);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.05);

  p {
    text-align: center;
    font-size: 2%.5;
  }
`

export const Projetos = styled.section`
  padding: 6rem 2rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
  }
`
export const ContainerProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`

export const Card = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  border: 1px solid var(--vidro);
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px rgba(79, 70, 229, 0.2);
    transform: translateY(-10px) scale(1.03);
  }

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 5px;
  }

  p {
    color: rgba(226, 232, 240, 0.8);
    line-height: 1.25rem;
  }
`
export const TextContainer = styled.div`
  padding: 1.5rem;
`

export const Contatos = styled.section`
  padding: 2rem 6rem;

  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 50px;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(5px);
    padding: 2rem;
    border: 1px solid var(--vidro);
    border-radius: 16px;
  }
`

export const GrupoForm = styled.div`
  margin-bottom: 1.5rem;

  .text-form {
    width: 100%;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    color: var(--claro);
    border: 1px solid var(--vidro);

    &:focus {
      border-color: var(--secundaria);
      box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
    }
  }
`

export const Button = styled.button`
  color: var(--claro);
  background: linear-gradient(45deg, var(--primaria), var(--secundaria));
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
  transition: all 0.5s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 5px 15px rgba(79, 70, 229, 0.4);
  }
`
export const Particulas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
  background:
    radial-gradient(circle at 10% 20%, var(--primaria) 0%, transparent 20%),
    radial-gradient(
      circle at 90% 80%,
      var(--secundaria) 0%,
      transparent 20%,
      var(--maisEscuro)
    );
`
