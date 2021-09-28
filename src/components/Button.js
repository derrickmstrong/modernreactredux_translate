import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
    // console.log("Language:", Button.contextType._currentValue)
    
    const text =
    Button.contextType._currentValue === 'english' ? 'Submit' : 'Voorleggen';
    
    return <button className='ui button primary'>{text}</button>;
};

export default Button;

Button.contextType = LanguageContext;