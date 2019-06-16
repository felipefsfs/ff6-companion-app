import React, { useState } from "react";
import { SavedXPsContext } from "../store/xp_context";

export default function XPSavedProvider(props) {
  const [savedXPs, setSavedXPs] = useState([]);
  
  return (
    <SavedXPsContext.Provider value={{savedXPs, addXP, clearXP}}>
      {props.children}
    </SavedXPsContext.Provider>
  );
  
  function addXP(xp) {
    
    const uXPs = new Set(savedXPs);
    uXPs.delete(xp);
    if (uXPs.size >= 12) {
      // eslint-disable-next-line
      const [_, ...newList] = uXPs;
      setSavedXPs([...newList, xp]);
    } else {
      setSavedXPs([...uXPs, xp]);
    }
  }

  function clearXP() {
    setSavedXPs([]);
  }
}