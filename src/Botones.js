import React, { useState } from 'react';
import './Botones.css';

const ClickButtons = () => {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('¡Hiciste clic!');
  };

  const handleDoubleClick = () => {
    setMessage('¡Hiciste doble clic!');
  };

  return (
    <div className="click-buttons-container">
      <h1>Botones con Clic y Doble Clic</h1>
      <button 
        onClick={handleClick} 
        onDoubleClick={handleDoubleClick}
        className="click-button"
      >
        Haz Clic o Doble Clic
      </button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default ClickButtons;
