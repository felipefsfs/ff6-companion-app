import React, { forwardRef, Fragment, useRef, useState, useEffect } from "react";

export default forwardRef(CanvasImg);

function CanvasImg(props, image_ref) {
  const [imgUrl, setImgUrl] = useState("");
  const canvas = useRef(null);
  useEffect(props.callback(image_ref)(canvas)(setImgUrl), [imgUrl]);

  const canvasStyle = {
    display: "none"
  };

  return (
    <Fragment>
      {imgUrl.length > 10 && <img alt="Canvas output" {...props} src={imgUrl} />}
      <canvas key={0} ref={canvas} width={38} height={38.5} style={canvasStyle}/>
    </Fragment>
  );
}

//avatar is x=38, y=38.5
/*             ctx.drawImage(image,
                70, 20,   // Start at 70/20 pixels from the left and the top of the image (crop),
                50, 50,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
                0, 0,     // Place the result at 0, 0 in the canvas,
                100, 100); */