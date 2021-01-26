import styled from "styled-components";

export const Container = styled.div`
overflow: auto;
min-height: 100vh;
`
export const Header = styled.header`
display: flex;
justify-content: space-between;
margin: 2vw;
color: rgb(90, 90, 90);
`

export const Button = styled.h3`
display: flex;
justify-content: center;
align-items: center;
width: 15%;
height: 5vh;
border-radius: 1vw;
background: #D01E1E;
background-image: -webkit-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -moz-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -ms-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -o-linear-gradient(top, #D01E1E, #F63D7A);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
color: #FFFFFF;
font-family: Andale Mono, monospace;
font-size: 1vw;
box-shadow: 1px 1px 20px 0 #DD380D;
cursor: pointer;
`

export const ContainerAnuncios = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
align-items: center;
width: 100%;
padding: 4vw;
`
export const Footer = styled.div`
display: flex;
justify-content: center;
font-family: Andale Mono, monospace;
font-size: 1vw;
`
export const H1 = styled.h1`
color: black;
font-size: 3vw;
font-family: Andale Mono, monospace;
`

export const TextoFooter = styled.h3`
font-family: Andale Mono, monospace;
color: black;
`
export const Logo = styled.img`
border-radius: 1vw;
height: 5vw;
`
export const Capa = styled.img`
width: 32vw;
height: 20vh;
`

