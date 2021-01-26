import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {Container} from "../styled/ClassificadosStyled";
import {Header} from "../styled/ClassificadosStyled";
import {Button} from "../styled/ClassificadosStyled";
import {ContainerAnuncios} from "../styled/ClassificadosStyled";
import {Footer} from "../styled/ClassificadosStyled";
import {TextoFooter} from "../styled/ClassificadosStyled";
import {Logo} from "../styled/ClassificadosStyled"; 
import logo from "../img/logo.png";
import {Capa} from "../styled/ClassificadosStyled";
import anuncioscapa from "../img/anuncios.png";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      maxWidth: 40
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });

function Classificados() {

    const [anuncios, setAnuncios] = useState([])

    const classes = useStyles();
    const history = useHistory()

    const goToCadastro = () => {        
        history.push("/cadastro")
    };

    useEffect(() => {
    axios.get('http://localhost:3003/classificados').then(response => {        
    setAnuncios(response.data)        
    })
    .catch(err => {
        console.log(err.message)
    })}, [])
    
    const anuncio = anuncios.sort((a, b) => a.id < b.id ? 1 : - 1).map(anuncio => {
        return (
        <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">{anuncio.titulo}</Typography>
          <Typography className={classes.pos} color="textSecondary">{anuncio.data}</Typography>
          <Typography variant="body2" component="p">{anuncio.descricao}</Typography>
        </CardContent>
      </Card>
        )
    })

    return(
        <Container>
            <Header>
                <Logo src={logo}></Logo>             
                <Capa src={anuncioscapa}></Capa>
                <Button onClick={goToCadastro}>+ Novo classificado</Button>
            </Header>
            
            <ContainerAnuncios>{anuncio}</ContainerAnuncios>

            <Footer>
                <TextoFooter>{`Exibindo ${anuncios.length} clasificados`}</TextoFooter>
            </Footer>
        </Container>
    )
}
export default Classificados;