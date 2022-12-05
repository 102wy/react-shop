import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-weight: 300;
    }
    body,html{
        margin: 0 auto;
        height: 100%;
    }
    a{
        text-decoration: none;
        color: black;
        cursor: pointer;
    }
    p,span,h1,h2,h3,h4,h5 {
        cursor: default;
    }
    button{
        cursor: pointer;
        background: none;
        border: none;
    }
`;

export default GlobalStyles;
