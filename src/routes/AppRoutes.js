import React from "react";
import { 
    Route,
    Switch,
    Redirect } from "react-router-dom";
import VatForm from "../components/VatForm";
import About from "../components/About";
import NotFound from "../components/NotFound";

const AppRoutes = () => {
    return(
        <Switch>
            <Route exact path="/" component={ VatForm }/>
            <Route path="/about" component={ About }/>
            <Route path="/notfound" component={ NotFound }/>
            <Route render={ () => <Redirect to="/notfound" /> }/>
        </Switch>
    )
}

export default AppRoutes;