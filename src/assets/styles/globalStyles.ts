'use client'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none; 
    color: currentColor;
    }

    body{
      width: 100%;
      min-height: 100vh;
      background: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text} ;
    }
`;

export default GlobalStyle;