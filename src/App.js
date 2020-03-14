import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import baseTheme from './styles/baseTheme';
import Header from './components/Header';
import AddNew from './components/AddNew';
import RecentCustomers from './components/RecentCustomers';

const Page = styled.div`
  text-align: center;
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.primary},
    ${({ theme }) => theme.colors.secondary}
  );
  min-height: 100vh;
  min-width: 100vw;
`;

function App() {
  const [addingNew, setAddingNew] = useState(false);

  return (
    <ThemeProvider theme={baseTheme}>
      <>
        <GlobalStyle />
        <Page>
          <Header setAddingNew={setAddingNew} />
          {addingNew && <AddNew closeForm={() => setAddingNew(false)} />}
          {!addingNew && <RecentCustomers />}
        </Page>
      </>
    </ThemeProvider>
  );
}

export default App;
