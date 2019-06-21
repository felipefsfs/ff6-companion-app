import React, { useState } from "react";

export default function CtrlInput(props) {
  const [value, setValue] = useState(0);
  return (
    <div className="input-field"> 
      <i className="material-icons prefix">videogame_asset</i>
      <input id="xp" type="number" className="validate" value={xp} onChange={} />
      <label htmlFor="xp">Enter combat XP!</label>
  </div>
  );
}