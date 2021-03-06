import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/globalStyle';
import baseTheme from '../../styles/baseTheme';

import Header from '../../components/Header';

const Page = styled.div`
  text-align: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  min-height: 100vh;
  min-width: 100vw;
`;

const Content = styled.div`
  width: 90%;
  max-width: 90rem;
  margin: auto;
  padding-bottom: 4rem;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={baseTheme}>
      <>
        <GlobalStyle />
        <Page>
          <Header />
          <Content>{children}</Content>
        </Page>
      </>
    </ThemeProvider>
  );
};

export default Layout;
