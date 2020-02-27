import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import PeoplesLI from './Peoples.js';

function App() {
  const [Peoples, setPeoples] = useState([]);
  const [Item, setItem] = useState();

  async function SearchPeople() {
    const response = await axios.get('https://swapi.co/api/people/');
    const PeoplesZ = response.data.results.sort(function (a, b) {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    })
    setPeoples(PeoplesZ)
  }


  useEffect(() => {
    SearchPeople()
  }, [])

  function DeletePeople(url) {
    var Peoplesx = Peoples.filter(function (people) {
      return people.url !== url;
    });
    setPeoples(Peoplesx);
  }

  return (
    <div className="App">
      <div className="HeaderSelect">
        <label>Selecione sobre o nome para excluir *: </label><br />
        <select name="SelectPeoples" onChange={e => setItem(e.target.value)}>
          <option>Selecione um Item</option>
          {Peoples.map(P => (
            <option value={P.url} key={P.url}>{P.name}</option>
          ))}
        </select>&nbsp;
        <button onClick={() => (
          DeletePeople(Item)
        )}>Excluir</button>
      </div>

      <ul className="list-peoples">
        <PeoplesLI DeletePeople={DeletePeople} Peoples={Peoples} />
      </ul>

    </div >
  );
}

export default App;
