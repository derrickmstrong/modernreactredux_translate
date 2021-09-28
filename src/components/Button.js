// Using contextType._currentValue - for a single context object
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
// Consumer objects must return a function
import React from 'react';
import ColorContext from '../contexts/ColorContext';
import LanguageContext from '../contexts/LanguageContext';

const Button = () => {
  return (
    <ColorContext.Consumer>
      {(color) => (
        <button className={`ui button ${color}`}>
          <LanguageContext.Consumer>
            {language => (language === 'english' ? 'Submit' : 'Voorleggen')}
          </LanguageContext.Consumer>
        </button>
      )}
    </ColorContext.Consumer>
  );
};

export default Button;
