import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  ${normalize}

  /* Full height layout */
  html,
  body {
    display: flex;
    font-family: ${({ theme }) => theme.fontFamily};
    min-height: 100vh;
    width: 100%;
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;
