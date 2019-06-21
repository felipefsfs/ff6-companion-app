import React, { forwardRef, useRef, useEffect } from "react";


function useCanvasImg(canvas_ref, img_ref, callback) {
    console.log(image_ref);
    useEffect(callback, []);
    return null;
}
function addImage() {
    const ctx = canvas.current.getContext('2d');
    ctx.drawImage(image_ref.current, 50, 50);
    image_ref.current.onload = () => {
        ctx.drawImage(image_ref.current, 50, 50);
    }
}