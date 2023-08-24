import React, { useState } from "react";
import "./styles.css";
import styled, { ThemeProvider } from "styled-components";
import AccountBox from "./components/accountBox/index";
import { lightTheme, darkTheme } from "./theme/theme";
import { GlobalStyles } from "./globalStyle";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <AppContainer>
          <AccountBox />
          <input type="checkbox" id="switch" onClick={toggleTheme} /><label for="switch">Toggle</label>
        </AppContainer>
      </>
    </ThemeProvider>
  )
}
