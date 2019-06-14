import React from "react";
import CharAvatar from "./CharAvatar";

export default function CharBox(props) {
    const chars = [["TERRA",250], ["Jojo",250], ["Edgar",2500], ["Sabin",100]];
    const chars2 = chars.map(v => {
        const index = props.data.exp.findIndex(o => o.experience > v[1]);
        const nextObj = props.data.exp[index];
        const currObj = props.data.exp[index-1];
        return {
            value: v[0],
            level: currObj.level,
            thisExp: currObj.experience,
            currExp: v[1],
            nextExp: nextObj.experience
        }
    });
    return (
        <div className="row">
            {charAvatarMap(chars2)}
        </div>
    );
}

function charAvatarMap(chars) {
    return chars.map(v => (<CharAvatar {...v}/>));
}

/**
 *  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="images/office.jpg">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
 */