import React, { forwardRef, useState, useContext, useEffect, useRef } from "react";
import CharExpBar from "./CharExpBar";
import CharForm from "./CharForm";
import CanvasImg from "./CanvasImg";
import {ActiveXPsContext} from "../store/xp_context";

export default forwardRef(CharAvatar);
function CharAvatar(props, image_ref) {
  const store = useContext(ActiveXPsContext);
  const [char, setChar] = useState("Terra");
  const [exp, setExp] = useState(0);
  const [alive, setAlive] = useState(true);
  const change_link = useRef(null);
  
  useEffect(() => console.log("reading the indexDB"), []);

  useEffect(() => {
    if (alive && store.ping) {
      setExp(exp + store.xp);
    }// eslint-disable-next-line
  },[store.xp, store.ping]);

  const char_obj = create_char(char, exp, props.data);
  const xy = (props.charData.image_xy[char] || [1, 4]).map((v,i) => v*(-38.5));
  const id = props.id;
  
  return (
    <div className="col s12 m6">
      <div className={"avatar-pic z-depth-3 " + (!alive && "disabled")}  onClick={handleClick}> 
        <CanvasImg 
          callback={addCroppedImage(xy)} 
          char={char} 
          className={"shadow"}
          width="100%"
          ref={image_ref}
          modalId={"id"+id} />
        <div class="chip level z-depth-2">
          <a  href={"#id"+id} class="modal-trigger waves-effect waves-blue" ref={change_link}>
            Lvl {char_obj.level}
          </a>
        </div>
        <div class="chip xp z-depth-2" onClick={handleClick}>
          XP: {char_obj.nextExp}
        </div>
      </div>
      <CharExpBar ref={change_link} perc={char_obj.perc} />
      <CharForm charState={[char, setChar]} aliveState={[alive, setAlive]} modalId={"id"+id} setExp={setExp}/>
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
    const toNextPerc = Math.round(((exp_value - currObj.experience)/(nextObj.experience - currObj.experience))*100);
    return {
      value: char_name,
      level: currObj.level,
      nextExp: nextObj.experience - exp_value,
      perc: toNextPerc
    }
  }
  
  function handleClick() {
    change_link.current.click();
  }
}
