import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        text-decoration: none;
        list-style: none;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
        background-color: var(--escuro);
        color: var(--claro);
    }

    :root {
        --primaria: #4f46e5;
        --secundaria: #7c3aed;
        --escuro: #0f172a;
        --maisEscuro: #0a0f1c;
        --claro: #e2e8f0;
        --vidro: rgba(255, 255, 255, 0.1);
    }
`
