import React, { useRef, useState } from 'react'
import styled from "styled-components"
import emailjs from '@emailjs/browser';


const Section = styled.div`
height:100vh;
scroll-snap-align:center;

@media only screen and (max-width: 480px) {
  height: 30vh; /* Adjusted height for smaller screens */
}
`
const Container = styled.div`
width : 100%;
height: 100%;
display: flex;
justify-content: space-between;
gap: 50px;
`
const Left = styled.div`
flex : 1;
display : flex;
align-items : center;
justify-content : flex-end;

@media only screen and (max-width: 768px){
  justify-content : center;
}

`
const Right = styled.div`
flex: 1;  

@media only screen and (max-width: 768px){
  display : none;
}

`

const Title = styled.h1`
font-weight : 200;
`
const Form = styled.form`
width : 500px;
display : flex;
flex-direction : column;
gap : 25px;

@media only screen and (max-width: 768px){
width : 300px;
}
`


const Input = styled.input`
padding: 20px; 
background-color: #e8e6e6;
border: none;
border-radius: 5px;
`
const TextArea = styled.textarea`
padding: 20px; 
background-color: #e8e6e6;
border: none;
border-radius: 5px;
`
const Button = styled.button`
background-color : #da4ea2;
color : white;
border: none;
font-weight : bold ;
cursor : pointer ;
border-radius : 5px;
padding : 20px;
`

const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null)
  const handleSubmit = e => {
    e.preventDefault();

    emailjs.sendForm('service_pcm7nkq', 'template_k97fqt3', ref.current, 'dr419Lq7hi3LtTLwJ')
      .then((result) => {
        console.log(result.text);
        setSuccess(true)
      }, (error) => {
        console.log(error.text);
        setSuccess(false)
      });

  };
  return (
    <Section>
      <Container className='call'>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me!</Title>
            <Input placeholder="Name" name="name"></Input>
            <Input placeholder="Email" name="email"></Input>
            <TextArea placeholder="Write your message." name='message' rows={10}></TextArea>
            <Button>Send</Button>

            {success && "Your message has been sent. We will get back to you soon :)  "}
          </Form>
        </Left>
        <Right ><img src="./img/Contactpic.png" alt="logo" height="400px" style={{position :"relative", top:"140px", left:"76px" ,animation: "animate 1s infinite ease alternate"}}/></Right>
      </Container>
    </Section>
  )
}

export default Contact
