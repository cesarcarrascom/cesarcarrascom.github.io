import { useContext } from "react";
import { ThemeContext } from "./context";

import Contact from "./components/Contact";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Toggle from "./components/Toggle";

import styled from "styled-components";
import { mobile } from "./responsive";

const AppContainer = styled.div`
  background-color: ${(props) => (props.darkMode ? "#222" : "white")};
  color: ${(props) => props.darkMode && "white"};
  ${mobile({ width: "100%" })};
`;

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <AppContainer darkMode={darkMode}>
      <Toggle />

      <Info />
      <Portfolio />
      <Contact />
    </AppContainer>
  );
}

export default App;
