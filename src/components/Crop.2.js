import React, { useRef, useEffect } from "react";
import port from '../port.png'; 

export default function Crop() {
    const canvas = useRef(null);
    const image = useRef(null);
    useEffect(addImage, []);

    return ([<canvas key={0} ref={canvas} width={100} height={100} />,
        <img key={1} ref={image} alt="ono" src={port} className="hidden" />]);

    function addImage() {
        const ctx = canvas.current.getContext('2d');
        ctx.drawImage(image.current, 50, 50);
        image.current.onload = () => {
            ctx.drawImage(image.current, 50, 50);
        }
    }
}

//avatar is x=38, y=38.5
/*             ctx.drawImage(image,
                70, 20,   // Start at 70/20 pixels from the left and the top of the image (crop),
                50, 50,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
                0, 0,     // Place the result at 0, 0 in the canvas,
                100, 100); */