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