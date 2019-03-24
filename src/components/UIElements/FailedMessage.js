import React from "react";

const FailedMessage = () => {
    return(
        <div id="failedMessage">
            <h3>Not Successful</h3>
            <p>Oops! Seems that the VAT number you are looking for is not valid or has not been registered yet.</p>
        </div>
    )
}

export default FailedMessage;