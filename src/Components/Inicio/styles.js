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
    width: 200px;
    height: 200px;
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.2), 0 0 16px rgba(56, 189, 248, 0.1);
    border-radius: 50%;
    border: 4px solid var(--vidro);
    animation: ${flutuar} 5s ease-in-out infinite;
  }
  h1 {
    font-size: 3.5rem;
    color: var(--claro);
    font-weight: bold;
    margin: 20px;
    text-align: center;

    @media (max-width: 480px) {
    
      font-size: 1.5rem;
      text-align: center;
  }
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
    font-size: 1.7rem;
  }
  @media(max-width: 480px) {
    p {
      font-size: 1.2rem;
    }
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
    radial-gradient(circle at 10% 20%, var(--secundaria) 0%, transparent 20%),
    radial-gradient(
      circle at 90% 80%,
      var(--secundaria) 0%,
      transparent 20%,
      var(--maisEscuro)
    );

    @media(max-width: 480px) {
      background:
    radial-gradient(circle at 5% 10%, var(--secundaria) 0%, transparent 15%),
    radial-gradient(
      circle at 95% 95%,
      var(--secundaria) 0%,
      transparent 15%,
      var(--maisEscuro)
    );
    }
`
