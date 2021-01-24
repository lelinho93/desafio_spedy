import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Anuncio} from "../styled/ClassificadosStyled";
import {Titulo} from "../styled/ClassificadosStyled";
import {Data} from "../styled/ClassificadosStyled";
import {Descricao} from "../styled/ClassificadosStyled";
import {Container} from "../styled/ClassificadosStyled";
import {Header} from "../styled/ClassificadosStyled";
import {H1} from "../styled/ClassificadosStyled";
import {Button} from "../styled/ClassificadosStyled";
import {ContainerAnuncios} from "../styled/ClassificadosStyled";
import {Footer} from "../styled/ClassificadosStyled";
import {TextoFooter} from "../styled/ClassificadosStyled";



function Classificados() {

    const history = useHistory()

    const goToCadastro = () => {        
        history.push("/cadastro")
    };    


    const [anuncios, setAnuncios] = useState([])

    useEffect(() => {

    axios.get('http://localhost:3003/classificados').then(response => {
        
        setAnuncios(response.data)
        
    }).catch(err => {
        console.log(err.message)
    })  
    
}, [])
    
    const anuncio = anuncios.map(anuncio => {
        return <Anuncio>
                    <Titulo>{anuncio.titulo}</Titulo>
                    <Data>{anuncio.data}</Data>
                    <Descricao>{anuncio.descricao}</Descricao>
                </Anuncio>
            })  


    return(
        <Container>
            <Header>                
                <H1>Spedy Classificados</H1>
                <Button onClick={goToCadastro}>+ Novo classificado</Button>
            </Header>
            
            <ContainerAnuncios>
                <>{anuncio}</>
            </ContainerAnuncios>

            <Footer>
                <TextoFooter>{`${anuncios.length} clasificados`}</TextoFooter>
            </Footer>
        </Container>
    )
}
export default Classificados;