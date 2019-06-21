import React from "react";

export default function CharForm(props) {
    return ([
        deadStatus(props),
        changeForm(props)
    ]);
}
function deadStatus(props) {
    return (
        <div key={"deadStatus"} className="card-action">
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
        <div key={"changeForm"} className="card-reveal">
            <span className="card-title grey-text text-darken-4">{props.value}<i className="material-icons right">close</i></span>
            <form>
                <div className="input-field">
                    <label htmlFor="character">Change?</label>
                    <input type="text" id="character" className="autocomplete" onChange= {(e) => console.log(e.target.value)}/>
                </div>
                <div className="input-field">
                    <label htmlFor="exp">XP</label>
                    <input type="number" id="exp" onChange= {(e) => console.log(e.target.value)}/>
                </div>
                <button onSubmit={f}>Update</button>
            </form>
        </div>
    );
}

function f(e) {
    e.preventDefault();
    console.log(e.target.closest("card-reveal"));
    e.target.closest("card-reveal").style.display = "none";
}