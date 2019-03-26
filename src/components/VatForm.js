import React, { Component } from 'react';
import Button from "../components/UIElements/Button";
import axios from 'axios';
import SuccessMessage from "./UIElements/SuccessMessage";
import FailedMessage from "./UIElements/FailedMessage";

// Component that renders a form where user can type a VAT number and information about that VAT number will be returned from a database.

class VatForm extends Component {

    // State Properties
    // vatNumber: The value of the #vatNumber field which the user enters
    // returnedData: Data returned by the POST request after submitting the form
    // isValid: -boolean- Property data.Valid returned from POST request after submitting the form
    // isLoading: -boolean- Displays loader text in submit button when it is true
    // isLoading: -boolean- Keeps state of the validation outcome of the #vatNumber input
    state = {
        vatNumber: "",
        returnedData: "",
        isValid: "",
        isLoading: false,
        hasErrors: false
    }

    // Handles change in an input, updates state to the value of the correspondant input
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    // Validates if the input value is formated as "AA000000000"
    validateInput = () => {

        /**
        * @param {string} input - Input element that will be tested against the regular expression
        */
        const vat_regex = input => /^([A-Z]){2}([0-9]){9}$/i.test(input);

        if(vat_regex(this.state.vatNumber) === false) {
            this.setState({
                hasErrors: true
            })
            return false
        } else {
            this.setState({
                hasErrors: false
            })
            return true
        }
    }


    // Handles the submission of the form
    handleSubmit = event => {

        event.preventDefault();

        // Validates the input value is correct before making the request to endpoint
        if ( this.validateInput() ){

            this.setState({
                isLoading: true
            })
            
            // Makes POST request to endpoint
            axios.post("https://vat.erply.com/numbers", null, { 
                params: {
                vatNumber: this.state.vatNumber
                    }
                }
            )
            .then( response => {

                const { data } = response

                this.setState({
                    isLoading: false
                })

                if(response.data.Valid) {
                    this.setState({
                        returnedData: data,
                        isValid: data.Valid
                    })
                } else {
                    this.setState({
                        isValid: data.Valid
                    })
                }
            })
            .catch(error => {
                const failed_message = document.querySelector("#failedMessage p");
                failed_message.textContent = "Oops! seems that there was an error on the request, please try again later"
            })
        }

    }

    render() {

        const { Name, Address, CountryCode, VATNumber } = this.state.returnedData;
        const { isLoading, isValid, returnedData, hasErrors } = this.state;

        return(
            <div id="form_container">

                <form onSubmit={ this.handleSubmit }>
                    <h2>VAT Checker</h2>
                    <p>You can get more information about a VAT number, just fill the form with the VAT number you want to look up for.</p>

                    <input type="text" id="vatNumber" className={ hasErrors ? ("hasErrors") : ("isCorrect")} placeholder="e.g. EE123456789" name="vatNumber" onChange={ this.handleChange } onKeyUp={ this.validateInput }/>

                    {/* Validation  error message */}
                    <p id="not_valid_vat" className={ hasErrors ? ("isShown") : ("isHidden")}>The VAT number must be in the format: AA999999999</p>
                    
                    <Button text={ isLoading ? ("Searching..."): ("Search")} type="submit" stylingClass="submit"/>
                </form>

                {/* Displays success message if valid data is returned form endpoint */}
                { isValid && returnedData ? (
                    <SuccessMessage 
                vat={ `${CountryCode}${VATNumber}` }
                name={ Name }
                address={ Address}
                countryCode={ CountryCode }
                vatNumbers={ VATNumber } />
                ) : ("")}
                
                {/* Displays failed message if unvalid data is returned form endpoint */}
                { isValid === false ? (<FailedMessage />) : ("")}

            </div>

        )
    }
}

export default VatForm;