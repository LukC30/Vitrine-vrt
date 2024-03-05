import React from 'react';
import ReactDOM from 'react-dom';

// Componente PutANumber
function PutANumber() {
  return (<div>Componente PutANumber.</div>);
}

// Componente App
export default function App() {
 
  const componentes = Array.from({ length: 5 });

  // Usa o map para renderizar os componentes
  return (
    <div>
      {componentes.map((_, index) => (
        <PutANumber key={index} />
      ))}
    </div>
  );
}