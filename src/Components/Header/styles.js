import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(15, 23, 42, 0.8);
  width: 100%;
  z-index: 100;
  padding: 1.5rem;

  @media (max-width: 480px) {
    padding: 2rem 1rem;

  }
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;

  
`

export const Li = styled.li`
  cursor: pointer;
  position: relative;

  a {
    text-decoration: none;
    color: var(--claro);
    font-weight: 500;
    padding: 0.5rem 0;
    cursor: pointer;
  }

  &::after {
    content: '';
    height: 3px;
    width: ${({ $isActive }) => ($isActive ? '100%' : 0)};
    background: linear-gradient(90deg, var(--secundaria), var(--secundaria));
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;
  }

  &:hover::after {
    width: 100%;
  }

  
`
