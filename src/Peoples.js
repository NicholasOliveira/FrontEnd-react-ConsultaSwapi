import React from 'react';
import './App.css';

function PeoplesLI({ Peoples, DeletePeople }) {
  return (
    Peoples.map(P => (
      <li key={P.url} className="Header" >
        <h3 style={{ 'color': P.eye_color, textDecoration: 'underline' }}>{P.name}</h3>
        <h4>Olhos: {P.hair_color}</h4>
        <h4>Nasc: {P.birth_year}</h4>
        <h5>Genêro: {P.gender}</h5>
        <button onClick={() => (
          DeletePeople(P.url)
        )}>Excluir</button>
      </li>
    ))
  )
}

export default PeoplesLI;