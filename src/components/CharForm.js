import React from "react";

export default function CharForm(props) {
    return ([
        deadStatus(props),
        changeForm(props)
    ]);
}
function deadStatus(props) {
    return (
        <div className="card-action">
            <a href="/#">{props.value}</a>
            <span className="switch right ">
                <label>
                Dead
                <input type="checkbox" />
                <span className="lever"></span>
                Alive
                </label>
            </span>
        </div>
    );
}

function changeForm(props) {
    return (
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.value}<i className="material-icons right">close</i></span>
            <form>
                <div className="input-field">
                    <label htmlFor="character">Change?</label>
                    <input type="text" id="character" onChange= {(e) => console.log(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="exp">Current Experience</label>
                    <input type="text" id="exp" onChange= {(e) => console.log(e.target.value)}/>
                </div>
            </form>
        </div>
    );
}
