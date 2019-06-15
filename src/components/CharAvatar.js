import React, { forwardRef} from "react";
import CharExp from "./CharExp";
import CharForm from "./CharForm";
import CanvasImg from "./CanvasImg";

export default forwardRef(CharAvatar);
function CharAvatar(props, image_ref) {
    return (
        <div className="card medium col s6 m6 l3 hoverable">
            <div className="card-image waves-effect waves-block waves-light">
                <CanvasImg callback={addImage} alt={"TERRA"} className="activator" ref={image_ref}/>
            </div>
            <CharExp {...props}/>
            <CharForm {...props}/>
        </div>
    );
    function addImage(image) {
        return function toCanvas(canvas) {
            return function storeIn(setImgUrl) {
                return function() { 
                    const ctx = canvas.current.getContext('2d');
                    ctx.drawImage(image.current, 0, 0);
                    setImgUrl(canvas.current.toDataURL());
                    image.current.onload = () => {
                        ctx.drawImage(image.current, 0, -38.5);
                        setImgUrl(canvas.current.toDataURL());
                    }
                }
            }
        }
    }
}
