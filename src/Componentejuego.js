import React, { useState } from 'react';
import './ComponenteJuego.css';

const GuessNumber = () => {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);

  
  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleInputChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(guess);
    if (isNaN(userGuess)) {
      setMessage('Por favor, ingresa un número válido');
      return;
    }

    setAttempts(attempts + 1);

    if (userGuess === targetNumber) {
      setMessage(`¡Felicidades! Adivinaste el número en ${attempts + 1} intentos.`);
    } else if (userGuess < targetNumber) {
      setMessage('Más alto');
    } else {
      setMessage('Más bajo');
    }
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  };

  return (
    <div className="game-container">
      <h1>Adivina el Número</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleInputChange}
          placeholder="Ingresa un número"
        />
        <button type="submit">Adivinar</button>
      </form>
      {message && <p className="message">{message}</p>}
      <button onClick={handleReset} className="reset-button">
        Reiniciar
      </button>
    </div>
  );
};

export default GuessNumber;
