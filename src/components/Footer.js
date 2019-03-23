import React from "react";
import Button from "../components/UIElements/Button";

const Footer = () => {
    return(
        <footer>
            <Button text="Import" stylingClass="footer_button"/>
            <Button text="Export" stylingClass="footer_button"/>
        </footer>
    )
}

export default Footer;