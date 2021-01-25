import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";
import axios from "axios";


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 49vw;
max-height: 100%;
overflow: auto;
background-color: rgb(240, 240, 240);
`

const Container = styled.div`
margin: 1vw;
display: inline-flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
border: 1px solid black;
border-radius: 2vw;
width: 30%;
background-color: rgb(204, 204, 204);
height: 40vw;
box-shadow: 0px 10px 14px -7px black;
`
const InputTitulo = styled.input`
font-family: 'Courier New', Courier, monospace;
margin: 1vw;
-webkit-border-radius: 5px; 
-moz-border-radius: 5px; 
border-radius: 5px; 
border: 1px solid #848484; 
outline:0; 
height: 3vw; 
width: 25vw;
padding: 2%;
`
const InputDescricao = styled.textarea`
font-family: 'Courier New', Courier, monospace 100%;
-webkit-border-radius: 5px; 
-moz-border-radius: 5px; 
border-radius: 5px; 
border: 1px solid #848484; 
outline:0; 
height:50vw; 
width: 25vw;
padding: 2%;
`

const ButtonCadastrar = styled.button`
box-shadow: 0px 10px 14px -7px #3e7327;
background:linear-gradient(to bottom, #77b55a 5%, #72b352 100%);
background-color:#77b55a;
border-radius:4px;
border:1px solid #4b8f29;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size:95%;
font-weight:bold;
padding:6px 12px;
text-decoration:none;
text-shadow:0px 1px 0px #5b8a3c;
margin: 1vw;
width: 8vw;
`
const ButtonVoltar = styled.button`
box-shadow: 0px 10px 14px -7px #e67a73;
background-color:#e4685d;
border-radius:4px;
border:1px solid #e67a73;
display:inline-block;
cursor:pointer;
color:#ffffff;
font-family:Arial;
font-size: 100%;
padding:6px 15px;
text-decoration:none;
text-shadow:0px 1px 0px #b23e35;
margin: 1vw;
width: 8vw;
`
const H1 = styled.h1`
font-size: 3vw;
text-align: center;
`





function Cadastro() {

const history = useHistory()    

const goToClassificados = () => {
    history.push("/")
}

const [titulo, onChangeTitulo] = useInput("");
const [descricao, onChangeDescricao] = useInput("");

const onSubmitForm = () => {
    const body = {
        titulo: titulo,
        descricao: descricao        
    }
    
    axios.post("http://localhost:3003/criarclassificado", body)
    .then(response => {
        alert("Anúncio cadastrado com sucesso!")
        history.push("/")
    })    
    .catch(error => {
        alert("Preencha todos os campos!")
        console.log(error.message)
    })
}





    return(
        <Div>
        <Container>
            <H1>Formulário de cadastro</H1>
            <InputTitulo
            type={"text"}
            placeholder={"Título"}
            value={titulo}
            onChange={onChangeTitulo}
            />
            <InputDescricao
            type={"text"}
            placeholder={"Descrição"}
            value={descricao}
            onChange={onChangeDescricao}
            />
            <ButtonCadastrar onClick={onSubmitForm}>Cadastrar</ButtonCadastrar>
            <ButtonVoltar onClick={goToClassificados}>Voltar</ButtonVoltar>
        </Container>
        </Div>
    )
}
export default Cadastro;