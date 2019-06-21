import React from "react";

export default function CharAlive({aliveState: [alive, setAlive]}) {
    return (
        <div className="card-action">
            <label>
                <input type="checkbox" className="filled-in" 
                    onChange={handleChange} 
                    checked={alive && "checked"} />
                <span>Alive</span>
            </label>
        </div>
    );

    function handleChange(event) {
        setAlive(event.target.checked)
    }
}