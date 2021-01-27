import React from 'react';
import { useHistory } from "react-router-dom";
import useAnuncios from "../hooks/useAnuncios";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import SvgIcon from '@material-ui/core/SvgIcon';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.linkedin.com/in/wesley-aquino-5880841b9/">Wesley Aquino</Link>{' '}{new Date().getFullYear()}{'.'}
    </Typography>
  );
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Classificados() {
  
  const classes = useStyles();
  const history = useHistory()
  const anuncios = useAnuncios()

    const goToCadastro = () => {        
        history.push("/cadastro")
      };     

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
        <HomeIcon style={{ fontSize: 40 }} />
          <Typography variant="h5" color="inherit"></Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
              SPEDY CLASSIFICADOS
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Aqui você pode anunciar e encontrar de tudo. 
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={goToCadastro} variant="contained" color="primary">
                    Fazer um anúncio
                  </Button>
                </Grid>
               </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {anuncios.sort((a, b) => a.id < b.id ? 1 : - 1).map(anuncio => (
              <Grid item key={anuncio.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>                            
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">{anuncio.titulo}</Typography>
                    <Typography>{anuncio.data}</Typography>
                      <CardMedia
                      className={classes.cardMedia}
                      image="https://source.unsplash.com/random"/>                          
                    <Typography>{anuncio.descricao}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          {`Exibindo ${anuncios.length} anúncios`}
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}