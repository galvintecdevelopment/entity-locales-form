// Vendor libs
import React from 'react';

// Component definition
const LangSelector = ({ currentLang, availableLangs, onLangChanged }) => {
  function handleLangChange(e, l) {
    e.preventDefault();
    onLangChanged(l);
  }

  return (
    <ul>
      {availableLangs &&
        availableLangs.map((l) => (
          <li key={l} className='lang'>
            <button type='button' onClick={(e) => handleLangChange(e, l)}>
              {l}
            </button>
          </li>
        ))}
    </ul>
  );
};

// Exportation
export default LangSelector;
