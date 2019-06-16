import React, { useRef } from "react";

export default function CharForm({charState: [char, setChar],  setExp}) {
    const charRef = useRef(null);
    const xpRef = useRef(null);

    return (        
    <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{char}<i className="material-icons right">close</i></span>
        <form onSubmit={handleCharSubmit}>
            <div className="input-field">
                <label htmlFor="character">Change?</label>
                <input ref={charRef} type="text" id="character" className="autocomplete" />
            </div>
            <div className="input-field">
                <label htmlFor="exp">XP</label>
                <input ref={xpRef} type="number" id="exp" />
            </div>
            <button class="btn btn-small cyan waves-effect waves-light" type="submit" name="action">Update
                <i class="material-icons right">send</i>
            </button>
        </form>
    </div>);

    function handleCharSubmit(event) {
        event.preventDefault();
        event.target.closest(".card-reveal").style.display = "none";
        setChar(charRef.current.value);
        setExp(xpRef.current.value);
    }
}
