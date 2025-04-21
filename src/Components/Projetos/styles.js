import styled from 'styled-components'

export const Container = styled.section`
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
  background: var(--primaria);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  border: 1px solid var(--vidro);
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 10px 20px rgba(56, 189, 248, 0.2);
    transform: translateY(-10px) scale(1.03);
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  h3 {
    margin-bottom: 5px;
    color: var(--claro);
  }

  p {
    color: rgba(226, 232, 240, 0.8);
    line-height: 1.25rem;
  }
`
export const Text = styled.div`
  padding: 1.5rem;
`

