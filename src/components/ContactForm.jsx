import { useContext, useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { ThemeContext } from "../context";
import { mobile } from "../responsive";

const Form = styled.form``;
const FormInput = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 16px;
  padding-left: 10px;
  background-color: ${(props) => props.darkMode && "#888"};
  ${mobile({ width: "100%" })};
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

const ContactForm = () => {
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
  );
};

export default ContactForm;
