import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: Georgia, sans-serif;
        background-color: #f9f9f9;
    }
`;

export default GlobalStyles;
