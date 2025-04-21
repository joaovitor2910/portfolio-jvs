import styled from 'styled-components'

export const Container = styled.section`
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
    @media(max-width: 480px) {
      width: 100%;
      padding: 10px;
    }
  
`

export const GrupoForm = styled.div`
  margin-bottom: 1.5rem;

  .text-form {
    width: 100%;
    resize: none;
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
    box-shadow: 0 5px 15px rgba(56, 189, 248, 0.2);
  }
`

export const IconContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  column-gap: 20px;

  .github {
    width: 50px;
    height: 50px;
  }
  
`

export const Icon = styled.img`
  width: 40px;
  height: 40px;
`
