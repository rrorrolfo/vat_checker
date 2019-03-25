import React from "react";

// This component contains information and especifications about this web application
const About = () => {
    return(
        <div id="about">
            <h1>Information about this project:</h1>
            <p>This application consists of a form where an user can type a VAT number and search for more information regarding that number. The form retrieves information from the endpoint "https://vat.erply.com/numbers". If the request is successful the information related to the VAT number will be displayed in a success message.</p>

            <h2>Technical Specifications:</h2>
            <ul>
                <li>Application built with <strong>React.js</strong> library.</li>
                <li><strong>JSX and JavaScript</strong> was used to build out the components for the application in a modular fashion.</li>
                <li><strong>React Router</strong> was used to set up routes and create navigation links.</li>
                <li><strong>Axios</strong> was used to fetch data from the API. I chose this tool considering the good cross-browser consistency it has.</li>
                <li><strong>Regular expression</strong> used to validate the input of the user in real time.</li>
                <li>Layout styled using <strong>CSS3</strong>.</li>
                <li>Layout designed and created from scratch.</li>
                <li>Application deployed using Netlify services.</li>
            </ul>

            <h2>Technologies used:</h2>
            <ul>
                <li>React.js</li>
                <li>React Router</li>
                <li>JSX</li>
                <li>Axios</li>
                <li>Regular Expressions</li>
                <li>CSS3</li>
            </ul>
        </div>
    )
}

export default About;