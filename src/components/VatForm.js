import React, { Component } from 'react';
import Button from "../components/UIElements/Button";
import axios from 'axios';
import SuccessMessage from "./UIElements/SuccessMessage";
import FailedMessage from "./UIElements/FailedMessage";

class VatForm extends Component {

    state = {
        vatNumber: "",
        returnedData: "",
        isValid: ""
    }

    // Handles change in an input, updates state to the value of the correspondant input
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Validates if the input value is formated as "AA000000000"
    validateInput = () => {

        const vat_field = document.querySelector("#vatNumber");
        const vat_regex = input => /^([A-Z]){2}([0-9]){9}$/i.test(input);
        const validation_error_message = document.querySelector("#not_valid_vat");

        if(vat_regex(vat_field.value) === false) {
            //display error message
            validation_error_message.className = "isShown";
            vat_field.style.border = "2px solid rgb(190, 0, 0)";
            return false
        } else {
            //hide error message
            validation_error_message.className = "isHidden";
            vat_field.style.border = "2px solid rgb(29, 167, 1)";
            return true
        }
    }


    // Handles the submission of the form
    handleSubmit = event => {

        event.preventDefault();

        if ( this.validateInput () ){
            // Makes POST request to endpoint
            axios.post("https://vat.erply.com/numbers", null, { 
                params: {
                vatNumber: this.state.vatNumber
                    }
                }
            )
            .then( response => {

                if(response.data.Valid) {
                    this.setState({
                        returnedData: response.data,
                        isValid: true
                    })
                } else {
                    this.setState({
                        isValid: false
                    })
                }
            })
            .catch(error => console.error(error))
        } else {
            console.log("not valid input");
        }

    }

    render() {
        return(
            <div id="form_container">

                <form onSubmit={ this.handleSubmit }>
                    <h2>VAT Checker</h2>
                    <p>You can get more information about a VAT number, just fill the form with the VAT number you want to look up for.</p>

                    <input type="text" id="vatNumber" placeholder="e.g. EE123456789" name="vatNumber" onChange={ this.handleChange } onKeyUp={ this.validateInput }/>

                    <p id="not_valid_vat" className="isHidden">The VAT number must be in the format: AA999999999</p>
                    
                    <Button text="Search" type="submit" stylingClass="submit"/>
                </form>

                {/* Displays success message if valid data is returned form endpoint */}
                { this.state.isValid && this.state.returnedData ? (
                    <SuccessMessage 
                vat={ this.state.vatNumber }
                name={ this.state.returnedData.Name }
                address={ this.state.returnedData.Address}
                countryCode={ this.state.returnedData.CountryCode }
                vatNumbers={ this.state.returnedData.VATNumber } />
                ) : ("")}
                
                {/* Displays failed message if unvalid data is returned form endpoint */}
                { this.state.isValid === false ? (<FailedMessage />) : ("")}

            </div>

        )
    }
}

export default VatForm;