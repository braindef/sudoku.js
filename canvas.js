var canvas;
var ctx;
var img;


function prepareCanvas() {
  ctx.font = "30px Arial";
  ctx.fillText("Hello World",10,50);
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      setTimeout( drawToCanvas, counter++*time, ctx, j, i, testBoard[i][j], "black");
  counter=1;
}


function drawToCanvas(i, j, num, color) {
  ctx.font = "30px Arial";
  ctx.fillStyle="black";
  //ctx.fillText("Slow Motion",100,640);
  ctx.fillStyle = 'white';
  ctx.fillRect(i*63+22, j*64+19, 52, 52);
  ctx.fillStyle = color;
  ctx.font = "bold 30pt Courier";
  if(num==0) return;
  ctx.fillText(num, i*63+35, j*63+62);
  //drawCanvas(ctx);
}


function initCanvas() {
  canvas = document.getElementById('mycanvas');
  ctx = canvas.getContext('2d');
  img = new Image();
  img.src = "./sudoku-leer.svg"; 
  ctx.drawImage(img, 10, 10, 580, 580);
  ctx.lineWidth=5;
  ctx.strokeRect(10, 10, 580, 580);
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      if(testBoard[i][j]!=0)
        drawToCanvas(j, i, testBoard[i][j], "black");
}


