import React, { useState } from "react";
import { ActiveXPsContext } from "../store/xp_context";

export default function XPProvider(props) {
  const [xp, changeXP] = useState(0);
  console.log("XPProvider", xp);

  return (
    <ActiveXPsContext.Provider value={{xp, changeXP}}>
      {props.children}
    </ActiveXPsContext.Provider>
  );

}