import React, { useState } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

const App = () => {
  const [langauge, setLanguage] = useState('english');
  return (
    <div className='ui container'>
      <div>
        Select a langauge:{' '}
        <i className='flag us' onClick={() => setLanguage('english')}></i>
        <i className='flag nl' onClick={() => setLanguage('dutch')}></i>
        <LanguageContext.Provider value={langauge}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    </div>
  );
};

export default App;
