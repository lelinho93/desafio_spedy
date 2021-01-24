import styled from "styled-components";

export const Container = styled.div`
overflow: auto;
background-color: rgb(240, 240, 240);
`
export const Header = styled.header`
display: flex;
justify-content: space-between;
width: 93vw;
padding: 0.5vw;
border: 2px solid black;
border-radius: 1vw;
margin: 2vw;
color: rgb(90, 90, 90);
background-color: rgb(204, 204, 204);
padding: 1vw;
`

export const Anuncio = styled.div`
border-radius: 8px;
background-color: rgb(204, 204, 204);
margin: 1vw;
max-width: 13vw;
padding: 20px;
border: 2px solid black;
`
export const Titulo = styled.h3`
font-family: Andale Mono, monospace;
margin: 1vw;
color: rgb(90, 90, 90);
`
export const Data = styled.h4`
font-family: Andale Mono, monospace;
margin: 1vw;
color: rgb(90, 90, 90);
`
export const Descricao = styled.a`
font-family: Andale Mono, monospace;
margin: 1vw;
color: rgb(120, 120, 120);
`
export const Button = styled.h3`
display: flex;
justify-content: center;
align-items: center;
width: 20%;
border-radius: 8px;
margin: 1vw;
background: #D01E1E;
background-image: -webkit-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -moz-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -ms-linear-gradient(top, #D01E1E, #F63D7A);
background-image: -o-linear-gradient(top, #D01E1E, #F63D7A);
-webkit-border-radius: 20px;
-moz-border-radius: 20px;
border-radius: 20px;
color: #FFFFFF;
font-family: Andale Mono, monospace;
font-size: 30px;
font-weight: 300;
padding: 10px;
-webkit-box-shadow: 1px 1px 20px 0 #DD380D;
-moz-box-shadow: 1px 1px 20px 0 #DD380D;
box-shadow: 1px 1px 20px 0 #DD380D;
cursor: pointer;
text-align: center;
`

export const ContainerAnuncios = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 93vw;
margin-left: 2vw;
margin-right: 2vw;
border: 2px solid black;
border-radius: 1vw;
padding: 1vw;
`
export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: left;
margin-top: 1vw;
margin-left: 2vw;
margin-right: 2vw;
margin-bottom: 2vw;
background-color: rgb(204, 204, 204);
border-radius: 1vw;
height: 8vh;
font-family: Andale Mono, monospace;
padding-left: 2vw;
border: 2px solid black;
`
export const H1 = styled.h1`
color: black;
font-size: 3vw;
margin-left: 1vw;
font-family: Helvetica;
`

export const TextoFooter = styled.h3`
font-family: Andale Mono, monospace;
color: rgb(90, 90, 90);
`

