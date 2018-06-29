//if page is finished loading run the initialisations
document.addEventListener("DOMContentLoaded", function() {
  load(testBoard7);
  //initialize the animation canvas
  initCanvas();
  //take the board from the URL string if there is any
  fromHash(location.hash);
});

function copy(from, to)
{
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      to[i][j]=from[i][j];
}

function load(board) {
  document.getElementById("table").style.backgroundColor="transparent";
  copy(board, testBoard);
  drawBoard(testBoard);
  init();

}


//fields of each small input box in html code (the sudoku grid)
fields = [["f11", "f12", "f13","f14", "f15", "f16","f17", "f18", "f19"],
          ["f21", "f22", "f23","f24", "f25", "f26","f27", "f28", "f29"],
          ["f31", "f32", "f33","f34", "f35", "f36","f37", "f38", "f39"],
          ["f41", "f42", "f43","f44", "f45", "f46","f47", "f48", "f49"],
          ["f51", "f52", "f53","f54", "f55", "f56","f57", "f58", "f59"],
          ["f61", "f62", "f63","f64", "f65", "f66","f67", "f68", "f69"],
          ["f71", "f72", "f73","f74", "f75", "f76","f77", "f78", "f79"],
          ["f81", "f82", "f83","f84", "f85", "f86","f87", "f88", "f89"],
          ["f91", "f92", "f93","f94", "f95", "f96","f97", "f98", "f99"]];


//get numbers that were changed from the table on the screen
function getFromScreen() {
  for (i=0; i<9; i++)
    for (j=0; j<9; j++)
    {  
      field = document.getElementById(fields[i][j]);
      if (field.value>0&&field.value<10)
      {
        testBoard[i][j]=field.value;
      }
      else
      {
        testBoard[i][j]=0;
      }
    }
}

//draw board to debug console (Helper Function)
function drawToConsole(board) {
  for (var i=0; i<9; i++)
  {
       console.log(board[i][0] + "  " + board[i][1] + "  " + board[i][2] + " | " + board[i][3] + "  " + board[i][4] + 
           "  " + board[i][5] + " | " + board[i][6] + "  " + board[i][7] + "  " + board[i][8]);
    if(i%3==2 && i != 8) console.log("----------------------------");
  }   
  console.log("===========================")

}


//draw board on to the html grid in the screen (the table of input boxes)
function drawBoard(board)
{
  //alert("DRAWBOARD");
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




function init() {

  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
    {
      //console.log(fields[i][j]);
      document.getElementById(fields[i][j]).style.color = "black";
    }
      document.getElementById("table").style.backgroundColor="white";

  for(var k=0; k<81; k++) {
    checkpointArray.push([ [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0] ] );
                           
   /* solutionsArray.push([ [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0],
                           [0,0,0,0,0,0,0,0,0] ] ); */
  }

  solutions=0;
                 
  console.log(checkpointArray[80]);
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      document.getElementById(fields[i][j]).style.backgroundColor="transparent";

}




//variable for board and last selected candidate per saved board
var checkpointArray = [];
var solutionsArray = [];
var selectionArray = [0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0,
                      0,0,0,0,0,0,0,0,0];

//Board history handling
function pushSolution(index)
{
  console.log("pushSolution("+index+");");

  if(solutionsArray.length<index+1) solutionsArray.push([[0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0],
																											 [0,0,0,0,0,0,0,0,0]]);

  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
//      tempArray[m][n]=testBoard[m][n];
      solutionsArray[index][m][n]=testBoard[m][n]
}


//Board history handling
function pushCheckpoint(index, selection)
{
  console.log("pushCheckpoint("+index+"); selection="+selection);
  if(index>81||index<0)
  {
    //alert("Error");
    return;
  }
  console.log("pushCheckpoint()");
  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
    try {
      checkpointArray[index][m][n]=testBoard[m][n];
    } catch(err) { alert("m: "+m+" n: "+n+" index: "+index);}
  selectionArray[index]=selection;
}


//store a board at the index
function popCheckpoint(index)
{
  console.log("PopCheckpoint("+index+"); selection="+selectionArray[index]);
  if(index<0) return false;
  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
      testBoard[m][n]=checkpointArray[index][m][n];
  selection=selectionArray[index];
  return true;
}



function reset() {
  init();
  for (i=0; i<9; i++)
    for (j=0; j<9; j++)
    {
      document.getElementById(fields[i][j]).value = "";
      testBoard[i][j]=0;
    }
}


//update additional information on bottom of page
function update()
{
  document.getElementById("guesses").innerHTML=guesses;
  document.getElementById("selectionArray").innerHTML=selection;
  document.getElementById("elapsed").innerHTML=elapsed;
  drawBoard(testBoard);
}

solution=-1;

function showNextSolution() {
  if(solution<solutions-1) solution++;
  document.getElementById("numSolutions").value=solution+1+"/"+solutions;
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      document.getElementById(fields[i][j]).value=solutionsArray[solution][i][j];
}

function showPreviousSolution() {
  if(solution>0) solution--;
  document.getElementById("numSolutions").value=solution+1+"/"+solutions;
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      document.getElementById(fields[i][j]).value=solutionsArray[solution][i][j];
}


//to copy board to or from location.hash (that is the part of the URL behind the #-sign...
function toHash() {
  getFromScreen();
  hash="";
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      hash+=testBoard[i][j];
  return hash;
}

function fromHash(hash) {
  if(hash.length!=82)
  {
    if(hash.length>1) alert("url input data wrong");
    return;
  }
  hash = hash.substring(1,82);

  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
    {
       var num = hash.substring(i*9+j,i*9+j+1);
       testBoard[i][j]=parseInt(num);
       //if(num!=0)
         //document.getElementById(fields[i][j]).value=num;
    }
    drawBoard(testBoard);
    init();
}


