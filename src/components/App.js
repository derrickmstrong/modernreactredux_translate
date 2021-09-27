import React, { useState } from 'react';

const App = () => {
  const [langauge, setLanguage] = useState('english');
  return (
    <div className='ui container'>
      <div>
        Select a langauge:{' '}
        <i className='flag us' onClick={() => setLanguage('english')}></i>
        <i className='flag nl' onClick={() => setLanguage('dutch')}></i>
      </div>
      {langauge}
    </div>
  );
};

export default App;
