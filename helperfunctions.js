//time between animation steps in the second board
var time;

//if page is finished loading run the initialisations
document.addEventListener("DOMContentLoaded", function() {
  load(testBoard1);
  //take the board from the URL string if there is any
  fromHash(location.hash);
  //initialize the animation canvas
  initCanvas();
  time = document.getElementById("time").value;
});


function load(board) {
  document.getElementById("table").style.backgroundColor="transparent";
  document.getElementById("numSolutions").value = "0/0";
  testBoard=board;
  drawBoard(testBoard);
  init();
  initCanvas();
  //toHash();
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
function drawToConsole() {
  var crc=0;
  for (var i=0; i<9; i++)
  {
       console.log(testBoard[i][0] + "  " + testBoard[i][1] + "  " + testBoard[i][2] + " | " + testBoard[i][3] + "  " + testBoard[i][4] + 
           "  " + testBoard[i][5] + " | " + testBoard[i][6] + "  " + testBoard[i][7] + "  " + testBoard[i][8]);
    if(i%3==2 && i != 8) console.log("----------------------------");
    crc += ( testBoard[i][0] + testBoard[i][1] + testBoard[i][2] + testBoard[i][3] + testBoard[i][4] + 
          + testBoard[i][5] + testBoard[i][6] + testBoard[i][7] + testBoard[i][8]);

    
  }
  console.log("============"+crc+"======"+instance+"==")
}


//draw board on to the html grid in the screen (the table of input boxes)
function drawBoard(board)
{
  console.log("drawBoard(board)");
  drawToConsole();
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

//set the colors
function init() {
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
    {
      //console.log(fields[i][j]);
      document.getElementById(fields[i][j]).style.color = "black";
    }
      document.getElementById("table").style.backgroundColor="white";
}


var solutionsArray = [];
var solutionIndex=0;
//Board history handling
function pushSolution()
{ 
  drawToConsole(testBoard);

  console.log("|solutionIndex: "+solutionIndex);

  //copy the board so that's a copy and not a reference that would be modified then later and should not be modified
  var newArray = testBoard.map(function(arr) {
                                               return arr.slice();
                                             });
  solutionsArray.push(newArray);
}

var index=0;


//store a board at the index
function popCheckpoint()
{
  console.log("PopCheckpoint("+index+"); selection="+selectionArray[index]);
  if(index<0) return false;
  for (var m=0; m<9; m++)
    for (var n=0; n<9; n++)
      testBoard[m][n]=checkpointArray[index][m][n];
  candidates=selectionArray[index];
  document.getElementById("table").style.backgroundColor="transparent";
  index--;
  return candidates;
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
  //document.getElementById("guesses").innerHTML=guesses;
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

var url="";

//to copy board to or from location.hash (that is the part of the URL behind the #-sign...
function toHash() {
  getFromScreen();
  newHash="";
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      if(document.getElementById(fields[i][j]).value>0)
        newHash+=document.getElementById(fields[i][j]).value;
      else newHash+="0";
      
  url="http://"+window.location.hostname + window.location.pathname + "#" + newHash;
  
  document.getElementById("link").innerHTML=url;
  document.getElementById("link").href=url;

  document.getElementById("qrcode").innerHTML="";
  
  new QRCode(document.getElementById("qrcode"), {
	text: url,
	width: 600,
	height: 600,
	colorDark : "#000000",
	colorLight : "#ffffff",
	correctLevel : QRCode.CorrectLevel.H
    });

  window.scrollTo(0,document.body.scrollHeight);

  return newHash;
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


