// Using Provider - for a single context object
// import React from 'react';
// import LanguageContext from '../contexts/LanguageContext';

// const Button = () => {
//     // console.log("Language:", Button.contextType._currentValue)
//     const language = Button.contextType._currentValue;

//     const text = language === 'english' ? 'Submit' : 'Voorleggen';
    
//     return <button className='ui button primary'>{text}</button>;
// };

// export default Button;
// Button.contextType = LanguageContext;

// Using Consumer - for multiple context objects
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {    
    return (
      <button className='ui button primary'>
        <LanguageContext.Consumer>
          {value => value === 'english' ? 'Submit' : 'Voorleggen'}
        </LanguageContext.Consumer>
      </button>
    );
};

export default Button;
