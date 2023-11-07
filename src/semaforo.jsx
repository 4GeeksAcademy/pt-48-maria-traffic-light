import React, { useState, useEffect } from "react";

const Semaforo = () => {
  const [color, setColor] = useState("rojo");

  const cambiarColor = (luzActual) => {
    setColor(luzActual)
    if (luzActual === 'rojo') {
      setTimeout(() => cambiarColor('verde'), 2000);
    } else if (luzActual === 'verde') {
      setTimeout(() => cambiarColor('amarillo'), 2000);
    } else {
      setTimeout(() => cambiarColor('rojo'), 2000);
    }
   
  };
  useEffect(() =>{
    cambiarColor('rojo');
  },[]);

  return (
    <div className="semaforo">
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: color === 'rojo' ? 'red' : 'gray', marginBottom: '10px' }}></div>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: color === 'amarillo' ? 'yellow' : 'gray', marginBottom: '10px' }}></div>
      <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: color === 'verde' ? 'green' : 'gray' }}></div>
    </div>
  );
  
};

export default Semaforo;
