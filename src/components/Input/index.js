import React from 'react';
import './Input.css'


const Input = ({inputValue,handleChange,placeholder,type}) => {
    return (
        <input 
            className="Input"
            type={type}
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

export default Input;