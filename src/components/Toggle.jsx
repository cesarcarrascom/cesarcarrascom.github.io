import styled from "styled-components";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Brightness2OutlinedIcon from "@mui/icons-material/Brightness2Outlined";
import { useContext } from "react";
import { ThemeContext } from "../context";

const ToggleContainer = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1px solid #999;
  background-color: white;
  position: fixed;
  top: 10px;
  right: 50px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const ToggleButton = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  cursor: pointer;
  left: ${(props) => (props.darkMode ? "0px" : "25px")};
`;
const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <ToggleContainer>
      <WbSunnyOutlinedIcon style={{ color: "yellow" }} />
      <Brightness2OutlinedIcon style={{ color: "blue" }} />
      <ToggleButton onClick={handleClick} darkMode={theme.state.darkMode} />
    </ToggleContainer>
  );
};

export default Toggle;
