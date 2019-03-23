import React, { Component } from 'react';
import Button from "../components/UIElements/Button";

class VatForm extends Component {
    render() {
        return(
            <form>
                <h2>VAT Checker</h2>
                <p>You can get more information about a VAT number, just fill the form with the VAT number you want to look up for.</p>

                <input type="text" id="vatNumber" placeholder="e.g. EE123456789" name="vatNumber"/>
                
                <Button text="Search" type="submit" stylingClass="submit"/>
            </form>
        )
    }
}

export default VatForm;