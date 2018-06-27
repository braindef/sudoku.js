
//restart, last working commit: https://github.com/braindef/sudoku.js/tree/9e447e552fe8ebc0968aaeccbd12918775164fa7

function update()
{
  document.getElementById("guesses").innerHTML=guesses;
  document.getElementById("selectionArray").innerHTML=selection;
  document.getElementById("elapsed").innerHTML=elapsed;
  drawBoard(testBoard);
}


//draw board on console.log
function drawBoard(board)
{
  for (i=0; i<9; i++)
    for (j=0; j<9; j++)
    {  
      field = document.getElementById(fields[i][j]);
      if (board[i][j]>0)
      {
      
        field.value=board[i][j];
        field.readOnly = false;
      }
      else
      {
        field.value="";
        field.readOnly = false;
      }
    }
}

function load(board) {
  document.getElementById("table").style.backgroundColor="white";
  testBoard=board;
  drawBoard(testBoard);
  init();

}


/*          markCol(n);
          markSquare(m,n);
          unmarkRow(m);
          unmarkCol(n);
          unmarkSquare(m,n);                     
*/

//fields in html code
fields = [["f11", "f12", "f13","f14", "f15", "f16","f17", "f18", "f19"],
          ["f21", "f22", "f23","f24", "f25", "f26","f27", "f28", "f29"],
          ["f31", "f32", "f33","f34", "f35", "f36","f37", "f38", "f39"],
          ["f41", "f42", "f43","f44", "f45", "f46","f47", "f48", "f49"],
          ["f51", "f52", "f53","f54", "f55", "f56","f57", "f58", "f59"],
          ["f61", "f62", "f63","f64", "f65", "f66","f67", "f68", "f69"],
          ["f71", "f72", "f73","f74", "f75", "f76","f77", "f78", "f79"],
          ["f81", "f82", "f83","f84", "f85", "f86","f87", "f88", "f89"],
          ["f91", "f92", "f93","f94", "f95", "f96","f97", "f98", "f99"]];

function getFromScreen() {
  for (i=0; i<9; i++)
    for (j=0; j<9; j++)
    {  
      field = document.getElementById(fields[i][j]);
      if (field.value>0&&field.value<10)
      {
        testBoard[i][j]=field.value;
      }
    }
}

function reset() {
}

//draw board to html
function drawToHtml() {

}

//draw board to html
function drawToConsole(board) {
  for (var i=0; i<9; i++)
  {
       console.log(board[i][0] + "  " + board[i][1] + "  " + board[i][2] + " | " + board[i][3] + "  " + board[i][4] + 
           "  " + board[i][5] + " | " + board[i][6] + "  " + board[i][7] + "  " + board[i][8]);
    if(i%3==2 && i != 8) console.log("----------------------------");
  }   
  console.log("===========================")

}

var checkpointArray = [];
init();

function init() {
  for(var i=0; i<81; i++)
    checkpointArray.push([ [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0] ] );
  console.log(checkpointArray[80]);

}

var selectionArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,]

function pushCheckpoint(index, selection)
{
  console.log("pushCheckpoint()");
  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
      checkpointArray[index][m][n]=testBoard[m][n];
  selectionArray[index]=selection;
}

function popCheckpoint(index)
{
  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
      testBoard[m][n]=checkpointArray[index][m][n];
  selection=selectionArray[index];    
}


