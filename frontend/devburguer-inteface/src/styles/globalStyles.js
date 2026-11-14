import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;  
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  body {
    overflow-x: hidden; /* Impede qualquer scroll horizontal indesejado */
  }

  button, a, img, svg {
    user-select: none;
  }

  button, a {
    cursor: pointer;
  }

  ::selection {
    background: transparent;
    color: inherit;
  }

  input::selection,
  textarea::selection,
  p::selection,
  span::selection,
  h1::selection,
  h2::selection,
  h3::selection,
  h4::selection,
  h5::selection,
  h6::selection,
  li::selection,
  code::selection {
    background: #9758a6;
    color: #ffffff;
  }
`;

export default GlobalStyle;
