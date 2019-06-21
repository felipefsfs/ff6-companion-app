import React, { Fragment, forwardRef } from "react";


export default forwardRef(CharExpBar);
function CharExpBar({ perc }, link_ref) {
  return (
    <Fragment>
      <div className="progress black z-depth-2" style={{"height": "6px"}} onClick={handleClick}>
        <div className="determinate cyan" style={{"width": perc+"%"}}></div>
      </div>
    </Fragment>
  );

  function handleClick() {
    link_ref.current.click();
  }
}