import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

const App = () => {
  const [langauge, setLanguage] = useState('english');
  const [color, setColor] = useState('primary')

  const handleUS = () => {
      setLanguage('english');
      setColor('primary');
  }

  const handleNL = () => {
      setLanguage('dutch');
      setColor('negative');
  }

  return (
    <div className='ui container'>
      <div>
        Select a langauge:{' '}
        <i className='flag us' onClick={handleUS}></i>
        <i className='flag nl' onClick={handleNL}></i>
        <br />
        <br />
        <LanguageContext.Provider value={langauge}>
          <ColorContext.Provider value={color}>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    </div>
  );
};

export default App;
