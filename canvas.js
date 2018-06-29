
function prepareCanvas() {
  canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  ctx.font = "30px Arial";
  ctx.fillText("Hello World",10,50);
}

function drawToCanvas(ctx, i, j, num, color) {
  ctx.font = "30px Arial";
	ctx.fillStyle="black";
  //ctx.fillText("Slow Motion",100,640);
	ctx.fillStyle = 'white';
	ctx.fillRect(i*63+22, j*64+19, 52, 52);
	ctx.fillStyle = color;
  ctx.font = "bold 30pt Courier";
  if(num==0) return;
	ctx.fillText(num, i*63+35, j*63+62);
	drawCanvas(ctx);
}

  //must be here outside the method that the image is loaded before the display command runs
  var img = new Image();
  img.src = "./sudoku-leer.svg";

function drawCanvas(ctx) {

  ctx.drawImage(img, 10, 10, 580, 580);
	ctx.lineWidth=5;
	ctx.strokeRect(10, 10, 580, 580);
}

function initCanvas() {
  canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  drawCanvas(ctx);
}

