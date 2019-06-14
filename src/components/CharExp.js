import React from "react";

export default function CharExp(props) {
    return (
        <div className="card-content activator">
            <span className="card-title activator">
            Level: {props.level}; Next Level: {props.nextExp - props.currExp}exp; 
            {Math.round(((props.currExp - props.thisExp)/(props.nextExp - props.thisExp))*100)}%
            </span>
        </div>
    );
}