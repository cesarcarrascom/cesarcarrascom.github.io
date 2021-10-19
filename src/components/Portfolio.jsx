import styled from "styled-components";
import PortfolioCard from "./PortfolioCard";
import data from "../data";
import { mobile } from "../responsive";

const PortfolioContainer = styled.div`
  height: 100vh;
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${mobile({ padding: "10px" })};
`;
const PortfolioTitle = styled.h1`
  font-weight: 700;
  font-size: 50px;
`;

const PortfolioList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioList>
        {data.map((item) => (
          <PortfolioCard key={item.id} link={item.url} image={item.image} />
        ))}
      </PortfolioList>
    </PortfolioContainer>
  );
};

export default Portfolio;
