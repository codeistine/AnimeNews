import React, { useState } from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './components/Theme'
import AnimeList from './components/AnimeList';

const StyledApp = styled.div `
  // color: ${props => props.theme.fontColor};
`
function App() {

  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme}>
      <StyledApp>
        <button onClick={() => themeToggler()}>Change Theme</button>
      </StyledApp>
      <AnimeList /> 
      <GlobalStyles />
   
      </ThemeProvider>
  )
}

export default App;