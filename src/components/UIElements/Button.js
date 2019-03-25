import React from "react";

const Button = ({ stylingClass, type, text}) => {
    return(
        <button className={ stylingClass } type={ type }>
            { text }
        </button>
    )
}

export default Button;