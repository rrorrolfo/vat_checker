import React from "react";

const Button = props => {
    return(
        <button className={ props.stylingClass } type={ props.type }>
            { props.text }
        </button>
    )
}

export default Button;