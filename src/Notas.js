import React, { useState, useEffect } from 'react';
import './Notas.css';

const AutoSaveNotes = () => {
  const [note, setNote] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      if (note) {
        setStatus('Guardado automáticamente');
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [note]);

  const handleInputChange = (e) => {
    setNote(e.target.value);
    setStatus('Escribiendo...');
  };

  return (
    <div className="notes-container">
      <h1>Aplicación de Notas con Guardado Automático</h1>
      <textarea
        value={note}
        onChange={handleInputChange}
        placeholder="Escribe tus notas aquí..."
      />
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default AutoSaveNotes;
