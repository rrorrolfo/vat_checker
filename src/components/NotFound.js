import React from "react";
import { Link } from "react-router-dom";

// 404 component to be displayed when 404 error happens
const NotFound = () => {
    return(
        <div id="notFound">

            <p>404</p>
            <p>Oops! We couldn´t find the page you were looking for</p>
            <Link to="/" id="return_button">
                Back to VAT Checker
            </Link>

        </div>
    )
}

export default NotFound;