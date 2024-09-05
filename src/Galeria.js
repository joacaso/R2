import React, { useState } from 'react';
import './Galeria.css'; 

function Galeria() {
  const images = ['./imagenes/auto1.jpg', './imagenes/autos2.jpg', './imagenes/auto3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="galeria">
      <button onClick={prevImage} className="nav-button prev-button">
        <i className="fa fa-chevron-left"></i>
      </button>
      <img
        src={images[currentIndex]}
        alt={`Imagen ${currentIndex + 1}`}
        className="image"
      />
      <button onClick={nextImage} className="nav-button next-button">
        <i className="fa fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Galeria;
