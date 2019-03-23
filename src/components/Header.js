import React from "react";
const logo = require("../img/erply_blue_logo.png");

const Header = () => {
    return(
        <header>
            <img src={ logo } alt="Erply - Business Software" title="Erply - Business Software" id="logo"/>
            <div id="yellow_bar"></div>
        </header>
    )
}

export default Header;