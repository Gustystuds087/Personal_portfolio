import React from 'react';
import styled from 'styled-components';
import "../../public/img/style.css"

const Section = styled.div`
display: flex;
scroll-snap-align: center;
justify-content:center;

@media only screen and (max-width: 768px){
    width : 100%;
}

`;
const Container = styled.div`
scroll-snap-align: center;
width: 1200px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;
@media only screen and (max-width: 768px){
    width : 100%;
    padding : 10px;
}
@media only screen and (min-width: 1900px){
    width : 1700px;
}

`;  
const Links = styled.div`
display : flex;
align-items: center;
gap: 24px;   
`;
const Logo = styled.img`
height: 50px;
`;
const List = styled.ul`
display: flex;
gap: 20px;
list-style: none;

@media only screen and (max-width: 768px){
    display: none;
}
`;
const ListItem = styled.li`
cursor: pointer;
`;

const Icons = styled.div`
display : flex;
align-items: center;
gap: 20px;  
`;
const Button = styled.button`
width: 120px;
padding: 10px;
background-color: #da4ea2;
color: white;
border: none;
border-radius: 5px;
cursor: pointer;
`;
const Icon = styled.img`
width: 20px;
cursor: pointer;
`;


const Navbar = () => {

    return (
        <Section>
            <Container className="navbar">
                <Links>
                    <Logo src="./img/logoA.png" alt='logo' />
                    {/* <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Who</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List> */}
                </Links>
                <Icons>
                    {/* <Icon src="./img/search.png"/> */}
                    <Button style={{fontSize:"15px"}}> <a href="https://drive.google.com/file/d/1TV2bhXGl2j8gz7VMF85tM-PlT9LxFbyT/view?usp=sharing" target='_blank' style={{textDecoration:"none",color:"white"}}>Resume</a> </Button>
                </Icons>
            </Container>
        </Section>
    );
};


export default Navbar;
