import React from 'react';
import Galeria from './Galeria';
import Formulario from './Formulario';
import ComponenteJuego from './Componentejuego';
import Botones from './Botones';
import Notas from './Notas' ;

import './App.css';

function App() {
  return (
    <div className="app">
      <Galeria />
      <Formulario />
      <ComponenteJuego />
      <Botones/>
      <Notas/>



      
    </div>
  );
}

export default App;