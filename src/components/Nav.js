import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return(
        <nav>
            <ul id="mainNav">
                <li><NavLink to="/">VAT Checker</NavLink></li>
                <li><NavLink to="/about">About this project</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;