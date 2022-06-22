import React from 'react';
import './CheckBox.css';

const CheckBox = ({ label, value, onChange }) => {
    return(
        <label className='CheckBox-label'>
            <input type="checkbox" checked={value} onChange={onChange} className="CheckBox"/>
        {label}    
        </label>
    )
}

export default CheckBox;