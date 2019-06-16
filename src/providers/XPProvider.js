import React, { useState } from "react";
import { ActiveXPsContext } from "../store/xp_context";

export default function XPProvider(props) {
  const [{xp, ping}, setXP] = useState({xp: 0, ping: 0});

  return (
    <ActiveXPsContext.Provider value={{xp, ping, changeXP}}>
      {props.children}
    </ActiveXPsContext.Provider>
  );
  
  function changeXP(new_xp) {
    setXP({xp: new_xp, ping: ping + 1})
  }
}