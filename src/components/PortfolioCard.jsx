import styled from "styled-components";
import { mobile } from "../responsive";

const CardContainer = styled.div`
  width: 30%;
  height: 40vh;
  margin: 20px 10px;
  border: 2px solid lightgrey;
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  ${mobile({ width: "40%", height: "20vh" })};
`;

const CardDecoration = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
`;

const CardLink = styled.a``;
const CardImage = styled.img`
  width: 100%;
`;

const PortfolioCard = ({ image, link }) => {
  return (
    <CardContainer>
      <CardDecoration />

      <CardLink target="_blank" rel="noopener noreferrer" href={link}>
        <CardImage src={image}></CardImage>
      </CardLink>
    </CardContainer>
  );
};

export default PortfolioCard;
