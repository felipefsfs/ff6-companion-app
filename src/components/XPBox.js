import React, { useState, useContext } from "react";
import XPChips from "./XPChips";
import XPSavedProvider from "../providers/XPSavedProvider";
import {ActiveXPsContext, SavedXPsContext} from "../store/xp_context";

export default function XPBox() {
  const store = useContext(ActiveXPsContext);
  const saved_store = useContext(SavedXPsContext);
  const [xp, setXP] = useState(undefined);
  
  return (
    <div>
      <XPSavedProvider>
        <XPChips />
        <form  onSubmit={submit}>
          <div className="input-field"> 
            <i className="material-icons prefix">videogame_asset</i>
            <input id="xp" type="number" className="validate" value={xp} onChange={changeXP} />
            <label htmlFor="xp">Enter combat XP!</label>
          </div>
          <button className="btn small waves-effect waves-light" type="submit" name="action">Add
            <i className="material-icons right">add_box</i>
          </button>
        </form>
      </XPSavedProvider>
    </div>
  );

  function changeXP(event) {
    setXP(event.target.value);
  }

  function submit(event) {
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