import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Classificados from "../components/Classificados";
import Cadastro from "../components/Cadastro";


function Router() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path= "/">
                    <Classificados/>
                </Route>
                <Route exact path="/cadastro">
                    <Cadastro/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;