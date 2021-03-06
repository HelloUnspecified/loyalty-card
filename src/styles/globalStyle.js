import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

  ${normalize()};

  html {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 100%;

    box-sizing: border-box;
    font-size: 10px;
    
    scroll-behavior: smooth;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    position: relative;
    min-height: 100%;
  }

  h1, h2, h3 {
    text-transform: uppercase;
    line-height: 0.9;
    
  }

  h4, h5 {
    color: ${({ theme }) => theme.colors.fonts.dark};
    line-height: 1.4;
  }

  h1 {
    font-size: 4.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.fonts.dark};
  }

  h2 {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.colors.fonts.dark};
    margin: 2rem 0;
  }

  h3 {
    font-size: 3rem;
    color: ${({ theme }) => theme.colors.fonts.dark};
  }

  h4 {
   font-size: 2.4rem;
  }

  h5 {
   font-size: 1.8rem;
  }

  p {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.fonts.dark};
  }

  a {
    text-decoration: none;

    &.basic-link {
      color: ${props => props.theme.colors.secondary};
      &:hover {
        color: ${({ theme }) => theme.colors.highlight};
      }
    }
  }

  form {
    margin: 0 2rem;
    margin: auto;
  }

  label {
    position: absolute;
    top: 0.5rem;
    left: 0;
    font-size: 3rem;
    margin: 1rem;
    padding: 0 1rem;
    line-height: 1;
    color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.white};
    -webkit-transition: top .2s ease-in-out, font-size .2s ease-in-out;
    transition: top .2s ease-in-out, font-size .2s ease-in-out;
  }

  .active {
    top: -2rem;
    font-size: 2rem;
  }

  input[type=text] {
    width: 100%;
    padding: 2rem;
    border: 1px solid ${({ theme }) => theme.colors.gray};
    border-radius: 0.5rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray};
  } 

  input[type=text]:focus {
    outline: none;
  }

  button {
    background-color: white;
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    border: none;

    &:hover {
      cursor: pointer;
    }
  }

  //**** FLEX
  .flex-grow {
    flex-grow: 2;
  }

  .flex-end {
    align-self: flex-end;
  }

  //**** ALIGN
  .right {
    text-align: right;
  }
`;

export default GlobalStyle;
