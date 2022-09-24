import React, { useState } from "react";
import "./App.css";

function App() {
  const [bin, setBin] = useState("");
  const [dec, setDec] = useState("");
  const [textError, setTextError] = useState("");
  const regex = /^[0-1]+$/g;

  function bin2dec() {
    if (bin.match(regex) == null) {
      setTextError("Somente 0 ou 1 pra números Binários");
      setDec("");
    } else {
      setTextError("");
      let n = 0;
      for (let i = 0; i < bin.length; i++) {
        n += Math.pow(2, i) * bin[bin.length - i - 1];
      }
      setDec(n);
    }
  }

  return (
    <div className="container">
      <h1>Conversor de Binário para Decimal</h1>
      <form>
        <div className="bin">
          <span className="span1">Número Binário:</span>
          <span className="span2">{textError}</span>
          <input
            className="input"
            required=""
            type="text"
            name="binário"
            placeholder="Coloque o valor Binário composto por 0 e 1"
            onChange={(e) => {
              setBin(e.target.value);
              console.log(bin);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              bin2dec();
            }}
          >
            <span>converter</span>
          </button>
        </div>
        <br />
        <div className="containerRes">
          <span>Número Decimal:</span>
          <h2 className="res">{dec}</h2>
        </div>
      </form>
    </div>
  );
}

export default App;
