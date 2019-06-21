import React from "react";

export default class CroppedImage extends React.Component {
  constructor() {
    super();
    this.state = {
      croppedImageSource: null
    };
  }
  componentDidMount() {
    let canvas = document.createElement("canvas");
    canvas.height = this.props.height;
    canvas.width = this.props.width;
    let context = canvas.getContext("2d");

    let image = new Image();
    image.src = this.props.src;

    image.addEventListener("error", this.props.onError);
    console.log(canvas);
    image.addEventListener("load", () => {
      let sourceX = this.props.x;
      let sourceY = this.props.y;
      let sourceWidth = this.props.cropWidth;
      let sourceHeight = this.props.cropHeight;
      let destWidth = sourceWidth;
      let destHeight = sourceHeight;
      let destX = 0;
      let destY = 0;

      context.drawImage(
        image,
        sourceX,
        sourceY,
        sourceWidth,
        sourceHeight,
        destX,
        destY,
        destWidth,
        destHeight
      );
        
        console.log(canvas);
      this.setState({
        croppedImageSource: canvas.toDataURL()
      });
    });
  }

  render() {
    const imageProps = Object.assign({}, this.props);
    delete imageProps.cropHeight;
    delete imageProps.cropWidth;
    delete imageProps.onError;


    let { croppedImageSource } = this.state;

    return !!croppedImageSource ? (
      <img {...imageProps}  alt={this.props.alt} src={croppedImageSource} />
    ) : null;
  }
}

function f() {
    var image = new Image(),
    canvas = document.getElementById('canvas2'),
    ctx = canvas.getContext('2d');
 
image.src = "/static/media/port.fc6de85e.png";

image.onload = function(){
    ctx.drawImage(image,
        70, 20,   // Start at 70/20 pixels from the left and the top of the image (crop),
        50, 50,   // "Get" a `50 * 50` (w * h) area from the source image (crop),
        0, 0,     // Place the result at 0, 0 in the canvas,
        100, 100); // With as width / height: 100 * 100 (scale)
}
}