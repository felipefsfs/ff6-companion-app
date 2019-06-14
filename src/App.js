import React from 'react';
import './App.css';
import data from "./data.json";
import CharBox from "./components/CharBox";

console.log(data);
function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <p>
          {"JSON.stringify(data)"}
        </p>
        {xp()}
      </header>
      <CharBox data={data}/>
    </div>
  );
}

export default App;


function xp(props) {
  return (
      <div className="card-reveal">
<div className="chips">
  <input className="custom-class" />
</div>
      </div>
  );
}