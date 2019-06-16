import React from 'react';
import './App.css';
import CharBox from "./components/CharBox";
import XPBox from "./components/XPBox";
import XPProvider from "./providers/XPProvider";
import data from "./data.json";
import char_data from "./char_list_data.json";
//src="kitty.png" x={topLeftCornerX} y={topLeftCornerY} cropHeight={cropHeight} cropWidth={cropWidth}
console.log(data);
function App() {
  return (
    <div className="App container">
      <XPProvider>
        <header className="App-header teal lighten-5">
          <XPBox />
          <CharBox data={data} charData={char_data} />
        </header>
      </XPProvider>
    </div>
  );
}

export default App;

