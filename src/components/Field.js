import React from 'react'
import LanguageContext from '../contexts/LanguageContext';

const Field = () => {
    // console.log("Language:", Field.contextType._currentValue)
    
    const text =
    Field.contextType._currentValue === 'english' ? 'Name' : 'Naam';
    return (
        <div className="ui field">
            <label htmlFor={text}>{text}</label>
            <input type="text" />
        </div>
    )
}

export default Field

Field.contextType = LanguageContext;
