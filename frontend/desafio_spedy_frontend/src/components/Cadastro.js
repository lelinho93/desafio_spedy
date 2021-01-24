import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Router from "../router/Router";

const Container = styled.div`
overflow: auto;
background-color: rgb(240, 240, 240);
`

function Cadastro() {

const history = useHistory()    

const goToClassificados = () => {
    history.push("/classificados")
}

    return(
        <Container>
            <button onClick={goToClassificados}>Voltar</button>
            <label>Título</label>
            <input></input>
            <label>Descrição</label>
            <input></input>
            <button>Enviar</button>

        </Container>
    )


}
export default Cadastro;