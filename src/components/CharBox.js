import React, { useRef} from "react";
import port from '../port.png'; 

export default function CharBox(props) {
  const image = useRef(null);
  const chars0 = [0,1,2,3];
  
  return (
    <div className="row">
      <img ref={image} alt="Chars Map" src={port} className="hidden" />
      <picture className="mdiv col s6 m6 l3">
        <img src="http://cdn.impressivewebs.com/2011-11/greece001.jpg" alt="" width="100%" />
      </picture>
      <picture className="mdiv col s6 m6 l3">
        <img src="http://cdn.impressivewebs.com/2011-11/greece001.jpg" alt="" width="100%" />
      </picture>
      <picture className="mdiv col s6 m6 l3">
        <img src="http://cdn.impressivewebs.com/2011-11/greece001.jpg" alt="" width="100%" />
      </picture>
      <picture className="mdiv col s6 m6 l3">
        <img src="http://cdn.impressivewebs.com/2011-11/greece001.jpg" alt="" width="100%" />
      </picture>
    </div>
  );
  
}

