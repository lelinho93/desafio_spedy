import React from 'react';
import { useHistory } from "react-router-dom";
import { useInput } from "../hooks/useInput";
import axios from "axios";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AssignmentIcon from '@material-ui/icons/Assignment';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/wesley-aquino-5880841b9/">
        Wesley Aquino
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function Cadastro() {

  const classes = useStyles();

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

    if(!titulo || !descricao) {
        alert("Preencha todos os campos!")
    }
    
    axios.post("http://localhost:3003/criarclassificado", body)
    .then(response => {
        alert("Anúncio cadastrado com sucesso!")        
    })    
    .catch(error => {
        console.log(error.message)
    })
}

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
         <Avatar className={classes.avatar}>
          <AssignmentIcon />
        </Avatar> 
        <Typography component="h1" variant="h5">
          Cadastar anúncio
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="titulo"
            label="Título"
            name="titulo"
            autoFocus
            onChange={onChangeTitulo}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            multiline
            fullWidth
            name="descricao"
            label="Descrição"
            type="text"
            id="descricao"
            onChange={onChangeDescricao}
          />
          
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmitForm}
          >
            Cadastrar
          </Button >
          <Grid container>
            <Grid item xs>
                <Button
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={goToClassificados}>
                Voltar
            </Button>
            </Grid>            
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default Cadastro;