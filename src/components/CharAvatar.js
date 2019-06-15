import React, { forwardRef, useRef, useEffect } from "react";
import CharExp from "./CharExp";
import CharForm from "./CharForm";

export default forwardRef(CharAvatar)
//     <img alt="TERRA" className="activator" src="https://i.pinimg.com/originals/91/70/1f/91701f1a3269ebede0c39645da8e6975.jpg"/>
           
function CharAvatar(props, image_ref) {
    console.log(image_ref);
    const canvas = useRef(null);
    useEffect(addImage, []);
    return (

        <div className="card medium col s6 m6 l3 hoverable">
            <div className="card-image waves-effect waves-block waves-light">
            <canvas className="hidden" key={0} ref={canvas} width={100} height={100} />
            </div>
            <CharExp {...props}/>
            <CharForm {...props}/>
        </div>
    );
    function addImage() {
        const ctx = canvas.current.getContext('2d');
        ctx.drawImage(image_ref.current, 50, 50);
        image_ref.current.onload = () => {
            ctx.drawImage(image_ref.current, 50, 50);
        }
    }
}
