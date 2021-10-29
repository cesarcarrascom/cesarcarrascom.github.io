import styled from "styled-components";
import { mobile } from "../responsive";
import { ThemeContext } from "../context";
import { useContext } from "react";

const Container = styled.div`
  width: 100%;
  height: 155px;
  //   border: 2px solid grey;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 5px;
  margin-top: 5px;
  ${mobile({ width: "99%", height: "100%" })};
`;

const ItemTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //   background-color: yellow;
  ${mobile({ flexDirection: "column" })};
`;
const ItemTitle = styled.a`
  //   background-color: teal;
  text-decoration: none;
  color: inherit;
  flex: 2;
  font-size: 30px;
  font-weight: 700;
  display: flex;
  justify-content: start;
  ${mobile({ justifyContent: "center" })};
`;
const ItemTagsContainer = styled.div`
  //   background-color: lightcoral;
  flex: 1;
  display: flex;
  justify-content: space-around;

  ${mobile({ marginTop: "5px" })};
`;
const ItemTag = styled.span`
  background-color: ${(props) => (props.darkMode ? "" : "lightgrey")};
  height: 25px;
  width: fit-content;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3px 10px;
  border-radius: 4px;
  ${mobile({ marginRight: "8px" })};

  font-weight: 200;
  font-size: 14px;
`;
const ItemDescription = styled.p`
  //   background-color: lightgreen;
  margin-top: 5px;
  padding: 5px;
  font-weight: 300;
  font-size: 18px;
  line-height: 20px;
`;

const PortfolioItem = ({ item }) => {
  const theme = useContext(ThemeContext);
  return (
    <Container>
      <ItemTitleWrapper>
        <ItemTitle target="_blank" rel="noopener noreferrer" href={item.url}>
          {item.title}
        </ItemTitle>

        <ItemTagsContainer>
          {item.tags.map((t) => (
            <ItemTag darkMode={theme.state.darkMode} key={t}>
              {t}
            </ItemTag>
          ))}
        </ItemTagsContainer>
      </ItemTitleWrapper>

      <ItemDescription>{item.description}</ItemDescription>
    </Container>
  );
};

export default PortfolioItem;
