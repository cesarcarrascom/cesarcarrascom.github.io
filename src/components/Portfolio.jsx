import styled from "styled-components";

import data from "../data";
import { mobile } from "../responsive";
import PortfolioItem from "./PortfolioItem";

const PortfolioContainer = styled.div`
  // height: 100vh;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  ${mobile({ padding: "10px" })};
`;
const PortfolioTitle = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;

const PortfolioList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>What I've been building</PortfolioTitle>
      <PortfolioList>
        {data.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </PortfolioList>
    </PortfolioContainer>
  );
};

export default Portfolio;
