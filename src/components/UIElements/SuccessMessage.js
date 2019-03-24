import React from "react";

const SuccessMessage = props => {
    return(
        <div id="successMessage">
            <h3>Success!</h3>
            <p>We found the following information for { props.vat }</p>
            <ul>
                <li>
                    <span>Name:</span> { props.name }
                </li>
                <li>
                    <span>Address:</span> { props.address }
                </li>
                <li>
                    <span>Country code:</span> { props.countryCode }
                </li>
                <li>
                    <span>VAT number:</span> { props.vatNumbers }
                </li>
            </ul>
        </div>
    )
}

export default SuccessMessage;