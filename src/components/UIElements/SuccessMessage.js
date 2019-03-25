import React from "react";

const SuccessMessage = ({ vat, name, address, countryCode, vatNumbers}) => {
    return(
        <div id="successMessage">
            <h3>Success!</h3>
            <p>We found the following information for { vat }</p>
            <ul>
                <li>
                    <span>Name:</span> { name }
                </li>
                <li>
                    <span>Address:</span> { address }
                </li>
                <li>
                    <span>Country code:</span> { countryCode }
                </li>
                <li>
                    <span>VAT number:</span> { vatNumbers }
                </li>
            </ul>
        </div>
    )
}

export default SuccessMessage;