import React, { Fragment } from "react";

export default function CharExp({modalId, level, nextExp}) {
    
  return (
    <Fragment>
      <div class="chip level z-depth-2">
        <a  href={"#"+modalId} class="modal-trigger waves-effect waves-blue" >
          Lvl {level}
        </a>
      </div>
      <div class="chip xp z-depth-2">
        <a  href={"#"+modalId} class="modal-trigger waves-effect waves-green" >
          XP: {nextExp}
        </a>
      </div>
    </Fragment>
  );

}