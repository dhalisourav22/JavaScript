var c = document.getElementById("my-canvas");
var ctx = c.getContext("2d");

//Making Rectangle
ctx.fillStyle = "rgb(132, 132, 223)";
ctx.fillRect(10,10,352,260); 

//Making Stroke
ctx.lineWidth=3;
ctx.strokeStyle = "blue"
ctx.strokeRect(8,8,356,264);

//Making Circle
ctx.beginPath();
ctx.fillStyle = "rgb(201, 201, 247)";
ctx.arc(356/2,264/2,100,0,2*Math.PI,false);
ctx.fill();
ctx.stroke();

//Making Line 
ctx.moveTo(10,10);
ctx.lineTo(363,271);
ctx.stroke();

//Making Text
ctx.font = "30px Verdana";
// ctx.fillStyle = "black";
// ctx.fillText("This is Sourav",10,100);
ctx.strokeStyle = "black";
ctx.strokeText("This is Sourav",10,100);

//Making Image
// function imgWork(){
//     var img = document.querySelector("#my-img");
//     ctx.drawImage(img,10,10);
// }
