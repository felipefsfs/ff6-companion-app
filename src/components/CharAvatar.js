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
  
  useEffect(() => console.log("reading the indexDB"), []);
  useEffect(() => {
    if (alive && store.ping) {
      setExp(exp + store.xp);
    }// eslint-disable-next-line
  },[store.xp, store.ping]);

  const xy = (props.charData.image_xy[char] || [1, 4]).map((v,i) => v*(-38.5));
  return (
    <div className="card small col s6 m6 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <CanvasImg 
          callback={addCroppedImage(xy)} 
          char={char} 
          className={"shadow" + (alive && " activator")}
          ref={image_ref}/>
          
      </div>
      <div className="card-content">
        <CharExp data={props.data} char={char} exp={exp}/>
      </div>
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
}
