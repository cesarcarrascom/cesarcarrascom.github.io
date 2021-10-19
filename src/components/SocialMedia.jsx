import styled from "styled-components";

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
const SocialContainerItem = styled.a`
  font-size: 26px;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  margin: 0px 25px;

  &:hover {
    font-size: 28px;
    font-weight: 700;
  }
`;

const SocialMedia = () => {
  return (
    <SocialContainer>
      <SocialContainerItem href="https://linkedin.com/in/cesarcarrascom">
        LINKEDIN
      </SocialContainerItem>
      <SocialContainerItem href="https://github.com/cesarcarrascom">
        GITHUB
      </SocialContainerItem>
      <SocialContainerItem href="https://twitter.com/cesarcarrascom">
        TWITTER
      </SocialContainerItem>
    </SocialContainer>
  );
};

export default SocialMedia;
