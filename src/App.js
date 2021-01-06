import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [digimonName, setDigimonName] = useState("");
  const [digimonChosen, setDigimonChosen] = useState(false);
  const [digimon, setDigimon] = useState({
    name: "",
    level: "",
    img: ""
  })
  const searchDigimon = () => {
    Axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
    .then((response) => {
      console.log(response);
      setDigimon({
        name: digimonName,
        level: response.data[0].level,
        img: response.data[0].img
      });
      setDigimonChosen(true);
    });
  };

  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Digimon Stats</h1>
        <input type="text" onChange={(event) => {setDigimonName(event.target.value); }}/>
        <button onClick={searchDigimon}>Search Digimon</button>
      </div>
      <div className="DisplaySection">
        {!digimonChosen ?
        (<h1>Please choose a Digimon</h1>)
        :
        (
        <>
          <h1>{digimon.name}</h1>
          <img src={digimon.img} alt="Digimon"/>
          <h3>Level: {digimon.level}</h3>
          <h3><a target="_blank" href="https://www.amazon.com/Digimon-Card-Game-New-Evolution%E3%80%90BT-01%E3%80%91/dp/B084C11XKG/ref=sr_1_2?dchild=1&amp;keywords=digimon+tcg&amp;qid=1609955634&amp;sr=8-2&_encoding=UTF8&tag=nelsonsc-20&linkCode=ur2&linkId=86f2c4d5a8db43257872bb3a06c94c9c&camp=1789&creative=9325">Buy Digimon TCG on Amazon now</a></h3>
        </>
        )}

      </div>
    </div>
  );
}

export default App;
