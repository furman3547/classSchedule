import React, { useState } from 'react';

import Welcome from './Welcome';

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        < Welcome handleToggleDarkMode={setDarkMode} />
        
        
      </div>
    </div>
  );
};

export default Toggle;