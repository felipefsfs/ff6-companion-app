import React, { Fragment, useRef} from "react";
import CharAvatar from "./CharAvatar";
import port from '../port.png'; 
import './Char.css';

export default function CharBox(props) {
  const image = useRef(null);
  const chars0 = [0,1,2,3];
  
  const row_style = {"margin": "5vh 0px"};

  return (
    <Fragment>
      <div className="row" style={row_style}>
        <img ref={image} alt="Chars Map" src={port} className="hidden" />
        {charAvatarMap(chars0, image)}
      </div>
    </Fragment>
  );
  
  function charAvatarMap(chars, ref) {
    return chars.map((v) => (<CharAvatar ref={ref} {...props} key={v} id={v}/>));
  }
}

