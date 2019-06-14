import React from "react";
import CharExp from "./CharExp";
import CharForm from "./CharForm";

export default function CharAvatar(props) {
    return (
        <div className="card medium col s6 m3 hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <img alt="TERRA" className="activator" src="https://i.pinimg.com/originals/91/70/1f/91701f1a3269ebede0c39645da8e6975.jpg"/>
            </div>
            <CharExp {...props}/>
            <CharForm {...props}/>
        </div>
    );
}
