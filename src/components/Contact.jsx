import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";

import { mobile } from "../responsive";

const ContactContainer = styled.div`
  height: 75vh;
  position: relative;
  ${mobile({ height: "100vh" })};
`;

const ContactBackground = styled.div`
  width: 20px;
  height: 100%;
  background-color: green;
  position: absolute;
`;

const ContactWrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection: "column",
    padding: "0px 50px",
  })};
`;
const ContactLeft = styled.div`
  flex: 1;
`;
const ContactTitle = styled.h1`
  font-size: 60px;
  width: 80%;
  ${mobile({ fontSize: "30px" })};
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
  width: 70%;
  ${mobile({ margin: "20px 0px", width: "100%" })};
`;
const InfoItemText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 10px;
`;

const ContactRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  ${mobile({ marginTop: "0px" })};
`;
const FormInput = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 16px;
  padding-left: 10px;
  background-color: ${(props) => props.darkMode && "#888"};
  ${mobile({ margin: "10px", marginLeft: "0" })};
`;
const FormTextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 16px;
  padding-left: 10px;
  background-color: ${(props) => props.darkMode && "#888"};
`;
const FormSubmit = styled.button`
  border: none;
  padding: 15px;
  background-color: green;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ width: "100%" })};
`;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1j5vroc",
        "template_nsaxxtq",
        formRef.current,
        "user_1794dnNXnrxhI5sC2OxK9"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <ContactContainer>
      <ContactBackground />
      <ContactWrapper>
        <ContactLeft>
          <ContactTitle>Contact me!</ContactTitle>

          <ContactInfoItem>
            <LocalPhoneIcon />
            <InfoItemText>+56 9 3577 8400</InfoItemText>
          </ContactInfoItem>
          <ContactInfoItem>
            <MailIcon />
            <InfoItemText>cc.cesar94@gmail.com</InfoItemText>
          </ContactInfoItem>
          <ContactInfoItem>
            <HomeIcon />
            <InfoItemText>Santiago, Chile </InfoItemText>
          </ContactInfoItem>
        </ContactLeft>
        <ContactRight>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <FormInput
              type="text"
              name="user_name"
              id=""
              placeholder="Your name..."
              darkMode={theme.state.darkMode}
              required
            />
            <FormInput
              type="text"
              name="user_subject"
              id=""
              placeholder="Subject..."
              darkMode={theme.state.darkMode}
              required
            />
            <FormInput
              type="text"
              name="user_email"
              id=""
              placeholder="Your email..."
              darkMode={theme.state.darkMode}
              required
            />
            <FormTextArea
              rows="5"
              placeholder="Message..."
              name="message"
              darkMode={theme.state.darkMode}
              required
            />
            <FormSubmit>Submit</FormSubmit>
            {done &&
              "Thank you contacting me, I'll be replying you as soon as I can."}
          </Form>
        </ContactRight>
      </ContactWrapper>
    </ContactContainer>
  );
};

export default Contact;
