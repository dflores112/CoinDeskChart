import styled from 'styled-components';

const Button = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid #0F72E5;
border-radius: 3px;
background-color: #7f7b9200;
color: #0F72E5;
&:hover{
background-color:#0F72E5;
color: white;
cursor: pointer;
}
&:focus{
    outline:none;
    box-shadow: none;
}
`;

const Container = styled.div`
width:80%;
padding: 10px;
height 600px;
border-radius: 3px;
margin: auto;
`;
const ContainerGrid = styled.div`
display: grid;
grid-template-columns: 25% 80%
`;

const Header = styled.h1`
left: 10%;
position: relative;
color: #FF6384;
`;

const styles = {
  Button, Container, ContainerGrid, Header,
};

export { styles as default };
