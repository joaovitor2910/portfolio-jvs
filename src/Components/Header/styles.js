import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  background: rgba(15, 23, 42, 0.8);
  width: 100%;
  z-index: 100;
  padding: 1.5rem;
`

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  gap: 3rem;

  a {
    color: var(--claro);
    font-weight: 500;
    position: relative;
    padding: 0.5rem 0;
    cursor: pointer;
  }
  a::after {
    content: '';
    height: 2px;
    width: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    background: linear-gradient(90deg, var(--primaria), var(--secundaria));
    transition: width 0.5s ease-in-out;
  }
  a:hover::after {
    width: 100%;
  }
`

export const Li = styled.li``
