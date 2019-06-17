import React, { useRef } from "react";
import CharAvatar from "./CharAvatar";
import port from '../port.png'; 

export default function CharBox(props) {
  const image = useRef(null);
  const chars0 = [0,1,2,3];
  
  return (
    <div className="row">
      <img ref={image} alt="Chars Map" src={port} className="hidden" />
      {charAvatarMap(chars0, image)}
    </div>
  );
  
  function charAvatarMap(chars, ref) {
    return chars.map((v) => (<CharAvatar ref={ref} {...props} key={v}/>));
  }
}

