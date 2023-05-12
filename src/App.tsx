import { data } from './data';
import { useState } from 'react';
import './app.css';
function App() {
  const { lugares } = data;
  const [number, setNumber] = useState(0);
  const randomPlace = () => {
    const lata = Math.floor(Math.random() * lugares.length);
    setNumber(lata);
  };
  return (
    <>
      <main className="all">
        <img src={lugares[number].img} alt="" className="img" />
        <h1 className="title">{lugares[number].name}</h1>
        {number === 12&&(<p>Haz econtrado al Quokka de la felicidad, puede elegir el lugar</p>)}
        <button onClick={randomPlace}>Iniciar</button>
      </main>
    </>
  );
}

export default App;
