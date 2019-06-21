import React from 'react';
import './App.css';
import data from "./data.json";
import CharBox from "./components/CharBox";
import XPBox from "./components/XPBox";
import XPProvider from "./providers/XPProvider";
//src="kitty.png" x={topLeftCornerX} y={topLeftCornerY} cropHeight={cropHeight} cropWidth={cropWidth}
console.log(data);
function App() {
  return (
    <div className="App container">
      <XPProvider>
        <header className="App-header">
          <XPBox />
          <CharBox data={data}/>
        </header>
      </XPProvider>
    </div>
  );
}

export default App;

