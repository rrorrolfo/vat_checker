import React, { Component } from 'react';
import Button from "../components/UIElements/Button";
import axios from 'axios';

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

    // Handles the submission of the form
    handleSubmit = event => {

        event.preventDefault();

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

    }

    render() {
        return(

            <form onSubmit={ this.handleSubmit }>
                <h2>VAT Checker</h2>
                <p>You can get more information about a VAT number, just fill the form with the VAT number you want to look up for.</p>

                <input type="text" id="vatNumber" placeholder="e.g. EE123456789" name="vatNumber" onChange={ this.handleChange }/>
                
                <Button text="Search" type="submit" stylingClass="submit"/>
            </form>

        )
    }
}

export default VatForm;