import React, { useContext } from "react";
import {ActiveXPsContext, SavedXPsContext} from "../store/xp_context";

export default function XPChips() {
  const active_store = useContext(ActiveXPsContext);
  const saved_store = useContext(SavedXPsContext);
  console.log("XPChips");
  const btnStyle = {
    margin: "2px 5px"
  }
  
  return (
    <div> 
      {saved_store.savedXPs.map(sxp => {
        return (<button 
            onclick={clickSaved}
            style={btnStyle}
            className={"btn-floating waves-effect blue waves-light " + (sxp===active_store.xp && "pulse")}
            name="action">
            {sxp}
          </button>
        );
      })}
    </div>
  );

  function clickSaved(event) {
    active_store.changeXP(Number(event.target.innerText));
  }
}