import React, { useRef } from "react";

export default function CharForm({ modalId, charState: [char, setChar], aliveState: [alive, setAlive], setExp}) {
  const charRef = useRef(null);
  const xpRef = useRef(null);
  const closeRef = useRef(null);

  return (        
    <div id={modalId} className="modal modal-fixed-footer">
      <form onSubmit={handleCharSubmit} autoComplete="off">
        <div className="modal-content">
          <span>
            <strong>{char}</strong>
            <a ref={closeRef} href="#!" className="modal-close right"><i className="material-icons">close</i></a>
          </span>
          <div className="input-field">
            <label htmlFor="character">Change?</label>
            <input ref={charRef} type="text" id="character" className="autocomplete" />
          </div>
          <div className="input-field">
            <label htmlFor="exp">XP</label>
            <input ref={xpRef} type="number" id="exp" />
          </div>
        </div>
        <div className="modal-footer">
          <div className="switch left" style={{"display": "inline-block"}}>
            <label>
              <input type="checkbox" onChange={handleAliveChange} checked={alive && "checked"}/>
              <span className="lever"></span>
              Alive
            </label>
          </div>
          <button className="btn btn-small cyan waves-effect waves-light" type="submit" name="action">
            Update
            <i className="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  );
  
  function handleAliveChange(event) {
    setAlive(event.target.checked);
    handleClose();
  }

  function handleCharSubmit(event) {
    event.preventDefault();
    if (!!charRef.current.value) {
      setAlive(true);
      setChar(charRef.current.value);
      charRef.current.value = "";
    }
    if (!!xpRef.current.value) {
      setExp(xpRef.current.value);
      xpRef.current.value = "";
    }
    handleClose();
  }
  
  function handleClose() {
    closeRef.current.click();
  }

}
