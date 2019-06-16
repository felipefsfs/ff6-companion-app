import React, { forwardRef, useState } from "react";
import CharExp from "./CharExp";
import CharForm from "./CharForm";
import CanvasImg from "./CanvasImg";

export default forwardRef(CharAvatar);
function CharAvatar(props, image_ref) {
  const [char, setChar] = useState("Terra");
  const [exp, seExp] = useState(0);

  const char_obj = create_char(char, exp, props.data);
  console.log(char, props.charData.image_xy, props.charData.image_xy[char]);
  const xy = (props.charData.image_xy[char] || [1, 4]).map((v,i) => v*(-38.5));
  return (
    <div className="card small col s6 m6 l3">
      <div className="card-image waves-effect waves-block waves-light">
        <CanvasImg callback={addCroppedImage(xy)} alt={char} className="activator" ref={image_ref}/>
      </div>
      <CharExp {...char_obj}/>
      <CharForm {...char_obj} charState={[char, setChar]} expState={[exp, seExp]} />
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
