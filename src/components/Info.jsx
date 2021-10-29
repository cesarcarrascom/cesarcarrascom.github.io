import styled from "styled-components";
import SocialMedia from "./SocialMedia";
import { mobile } from "../responsive";

const InfoContainer = styled.div`
  display: flex;
  height: 100vh;
  ${mobile({ flexDirection: "column", overflow: "hidden" })};
`;

const InfoLeft = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ width: "100vw" })};
`;
const InfoLeftWrapper = styled.div`
  padding: 50px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({
    padding: "10px",
    alignItems: "center",
    justifyContent: "space-between",
    textAlign: "center",
  })};
`;

const InfoName = styled.h1`
  font-weight: 800;
  font-size: 70px;
`;
const InfoSubName = styled.h3`
  font-weight: 500;
  font-size: 20px;
`;

const InfoDescription = styled.p`
  font-size: 18px;
  font-weight: 500;
  ${mobile({ display: "none" })};
`;
const InfoRight = styled.div`
  flex: 1;
  ${mobile({ display: "none" })};
`;
const InfoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = () => {
  return (
    <InfoContainer>
      <InfoLeft>
        <InfoLeftWrapper>
          <InfoName class="aboutName">César Carrasco</InfoName>
          <InfoSubName class="aboutDescription">
            Software Developer
          </InfoSubName>

          <InfoDescription class="aboutInfo">
            Hi, I'm a software developer 💻 focusing mainly on Javascript &
            Python 🐍 in love with the excitement of building and sharing
            products. NodeJS & React is my current stack of choice since they
            work so well together. Working, building and securing APIs on a
            daily basis is how I stay updated in the best practices of coding.
          </InfoDescription>
          <SocialMedia />
        </InfoLeftWrapper>
      </InfoLeft>
      <InfoRight>
        <InfoImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=872&q=80"></InfoImage>
      </InfoRight>
    </InfoContainer>
  );
};

export default Info;
