import React, { forwardRef, Fragment, useRef, useState, useEffect } from "react";

export default forwardRef(CanvasImg);

function CanvasImg(props, imgRef) {
  const [imgUrl, setImgUrl] = useState("");
  const canvas = useRef(null);
  useEffect(addImage, []);

/*   const imgProps = { 
    alt: "Canvas Image",
    ...props
  };
 */  
  const canvasStyle = {
    display: "none"
  };

  return (
    <Fragment>
      <img alt="Canvas output" {...props} src={imgUrl} />
      <canvas key={0} ref={canvas} width={38} height={38.5} style={canvasStyle}/>
    </Fragment>
  );
  function addImage() {
      const ctx = canvas.current.getContext('2d');
      ctx.drawImage(imgRef.current, 0, 0);
      setImgUrl(canvas.toDataURL());
      imgRef.current.onload = () => {
          ctx.drawImage(imgRef.current, 0, 0);
          setImgUrl(canvas.toDataURL());
      }
  }
}

//avatar is x=38, y=38.5
/*             ctx.drawImage(image,
                70, 20,   // Start at 70/20 pixels from the left and the top of the image (crop),
                50, 50,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
                0, 0,     // Place the result at 0, 0 in the canvas,
                100, 100); */