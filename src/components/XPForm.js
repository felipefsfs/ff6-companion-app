import React, { useState, useContext } from "react";
import {ActiveXPsContext, SavedXPsContext} from "../store/xp_context";

export default function XPForm() {
  const store = useContext(ActiveXPsContext);
  const saved_store = useContext(SavedXPsContext);
  const [xp, setXP] = useState("");
  
  return (
    <form onSubmit={submit}>
      <div className="input-field" style={{display: "inline-block", "margin-right": " 10px"}}> 
        <i className="material-icons prefix">videogame_asset</i>
        <input id="xp" type="number" className="validate" value={xp} onChange={changeXP} />
        <label htmlFor="xp">Enter combat XP!</label>
      </div>
      <button className="btn small waves-effect waves-light" type="submit" disabled={xp === ""} name="action">Add
        <i className="material-icons right">add_box</i>
      </button>
    </form>
  );

  function changeXP(event) {
    setXP(Number(event.target.value));
  }

  function submit(event) {
    console.log("Submit MAnual ", xp, " to ", store.xp, " and ", saved_store.savedXPs);
    event.preventDefault();
    if (xp === 0) {
      saved_store.clearXP();
      setXP("");
    } else {
      store.changeXP(xp);
      saved_store.addXP(xp);
      setXP("");
    }
  }
}