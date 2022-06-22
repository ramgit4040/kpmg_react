import React from 'react';
import './Button.css';

const Button=({handleClick,children,disabled})=>{
    return(
        <button className="Button" disabled={!disabled ? true: false} onClick={handleClick}>{children}</button>
    )
}

export default Button;