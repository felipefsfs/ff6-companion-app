import React, { forwardRef, useState, useContext, useEffect } from "react";
import CharExp from "./CharExp";
import CharForm from "./CharForm";
import CharAlive from "./CharAlive";
import CanvasImg from "./CanvasImg";
import {ActiveXPsContext} from "../store/xp_context";

export default forwardRef(CharAvatar);
function CharAvatar(props, image_ref) {
  const store = useContext(ActiveXPsContext);
  const [char, setChar] = useState("Terra");
  const [exp, setExp] = useState(0);
  const [alive, setAlive] = useState(true);
  console.log("CharAvatar", char, exp, alive)
  useEffect(() => console.log("reading the indexDB"), []);

  const char_obj = create_char(char, exp, props.data);
  console.log(char_obj);
  const xy = (props.charData.image_xy[char] || [1, 4]).map((v,i) => v*(-38.5));
  return (
    <div className="card small col s6 m6 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <CanvasImg callback={addCroppedImage(xy)} char={char} className="shadow activator" ref={image_ref}/>
      </div>
      <CharExp {...char_obj}/>
      <CharAlive aliveState={[alive, setAlive]} />
      <CharForm setExp={setExp}
        charState={[char, setChar]} />
    </div>
  );

  function addCroppedImage(xy) {
    return function fromSpecs(spec = {}) {
      return function inner() {
        const ctx = spec.canvas.current.getContext('2d');
        ctx.drawImage(spec.image.current, ...xy);
        spec.setImgUrl(spec.canvas.current.toDataURL());
        spec.image.current.onload = () => {
          ctx.drawImage(spec.image.current, ...xy);
          spec.setImgUrl(spec.canvas.current.toDataURL());
        }
      }
    }
  }

  function create_char(char_name, exp_value, base_data) {
    const index = base_data.exp.findIndex(o => o.experience > exp_value);
    const nextObj = base_data.exp[index];
    const currObj = base_data.exp[index-1];
    return {
      value: char_name,
      level: currObj.level,
      thisExp: currObj.experience,
      currExp: exp_value,
      nextExp: nextObj.experience
    }
  }
}
