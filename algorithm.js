// 0 defines an empty field
//easy sudoku

testBoard2 = [[3,0,0,2,4,0,0,6,0],
             [0,4,0,0,0,0,0,5,3],
             [1,8,9,6,3,5,4,0,0],
             [0,0,0,0,8,0,2,0,0],
             [0,0,7,4,9,6,8,0,1],
             [8,9,3,1,5,0,6,0,4],
             [0,0,1,9,2,0,5,0,0],
             [2,0,0,3,0,0,7,4,0],
             [9,6,0,5,0,0,3,0,2]];

//medium sudoku, unambigious solution (2 solutions)

testBoard2 = [[0,0,3,0,5,0,0,7,9],
             [2,0,0,6,0,0,1,5,0],
             [0,8,9,0,2,1,0,0,0],
             [1,0,0,0,7,8,9,0,6],
             [9,0,8,2,0,0,0,0,5],
             [0,2,0,0,4,0,8,0,0],
             [8,0,5,0,6,2,0,9,0],
             [0,9,0,5,0,7,6,0,1],
             [7,0,0,4,0,0,0,8,0]];



testBoard2 = [[0,0,0,0,0,5,0,0,7],
             [5,0,6,2,0,0,0,0,3],
             [1,0,0,0,3,0,0,0,0],
             [0,0,7,3,0,1,0,0,8],
             [6,0,0,0,0,0,7,0,1],
             [8,1,2,0,7,9,0,0,6],
             [7,0,0,9,0,0,8,6,0],
             [0,6,0,0,0,3,0,0,2],
             [2,0,0,7,0,0,0,0,0]];


//von wikipedia Standardsudoku mit nur 17 vorbelegten Feldern
testBoard2 = [[0,0,0,0,0,0,0,1,0],
             [4,0,0,0,0,0,0,0,0],
             [0,2,0,0,0,0,0,0,0],
             [0,0,0,0,5,0,4,0,7],
             [0,0,8,0,0,0,3,0,0],
             [0,0,1,0,9,0,0,0,0],
             [3,0,0,4,0,0,2,0,0],
             [0,5,0,1,0,0,0,0,0],
             [0,0,0,8,0,6,0,0,0]];

//von https://samirhodzic.github.io/sudoku-solver-js/
testBoard  = [[0,3,2,0,5,4,9,0,0],
              [0,9,0,0,0,1,0,0,4],
              [0,8,0,7,0,0,0,3,1],
              [0,0,4,5,0,0,0,2,7],
              [8,0,0,0,7,0,0,0,0],
              [2,7,0,1,4,0,0,0,5],
              [0,0,0,2,1,0,3,0,0],
              [0,1,8,9,0,7,6,5,2],
              [6,0,3,0,0,0,0,0,0]];


function isSolved(board) {
  for(var m=0; m<9; m++)
    for(var n=0; n<9; n++)
      if(board[m][n]==0)
        return false;
  document.getElementById("table").style.backgroundColor="lightgreen";
  return true;
}


function getCandidates(i, j, board)
{
  console.log("getCandidates("+i+", "+j+",board)");
  //                       0  1  2  3  4  5  6  7  8  9
  var initialCandidates = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //check line
  for(x=0; x<9; x++)
    initialCandidates[ board[i][x] ] = 0;
  //check column
  for(y=0; y<9; y++)
    initialCandidates[ board[y][j] ] = 0;
  //check square field
  for(z0=0; z0<3; z0++)
    for(z1=0; z1<3; z1++)
    {
      //check the 3x3 square field of the belonging field
      initialCandidates[ board[ 3*(i-(i%3))/3 + z0 ][ 3*(j-(j%3))/3 + z1 ] ] = 0;
    }
  console.log(initialCandidates);
  return initialCandidates;
}

function solveUnambiguously(board)
{
  getFromScreen(board);
 
  changes = false;

  
  counter = 0;
  for(var m=0; m<9; m++)
    for(var n=0; n<9; n++)
    {
      if(board[m][n]==0)
      {
        candidates = getCandidates(m, n, board)
        var sum = 0;
        for(c=0; c<10; c++)
          sum+=candidates[c];
        if(sum < 2)
        {  /*
          counter+=3;
					var speed = 100;
					for (i = counter; i <= counter+2; i++) {
						setTimeout(function(i, m, n, candidates) {
						    if (i%3!=0)
								{
								  for(j=0; j<9; j++)
								    document.getElementById(fields[m][j]).style.backgroundColor = "white";
								  for(k=0; k<9; k++)
								    document.getElementById(fields[k][n]).style.backgroundColor = "white";
								}
								else
								{
								  for(j=0; j<9; j++)
								    document.getElementById(fields[m][j]).style.backgroundColor = "cyan";
								  for(k=0; k<9; k++)
								    document.getElementById(fields[k][n]).style.backgroundColor = "cyan";
								}

						}, speed * i, i, m, n, candidates);

					}*/
						board[m][n]=1*candidates[1]+2*candidates[2]+3*candidates[3]+4*candidates[4]+5*candidates[5]+
							          6*candidates[6]+7*candidates[7]+8*candidates[8]+9*candidates[9];
				    document.getElementById(fields[m][n]).style.color="red";
				    drawBoard(board);
            changes=true;
        }
      }
    }
    console.log("unambigious");
    return changes;
}

var lastSelection=-1;
var guesses=0;
depth=1;   //TODO: breitensuche

function updateDebug()
{
  document.getElementById("guesses").innerHTML=guesses;
  document.getElementById("depth").innerHTML=depth;
  document.getElementById("selectionArray").innerHTML=lastSelection;
}



function guess(board, pDepth) {
  //alert("guess(Depth: " + depth);
  if(pDepth<guesses) return;
  console.log("LAST:"+lastSelection);
  guesses+=1;
  updateDebug();
  
loop1:
  for(var m=0; m<9; m++)
    for(var n=0; n<9; n++)
    {
      if(board[m][n]==0)
      {
        var candidates = getCandidates(m, n, board);
        var sum = 0;
        for(c=0; c<10; c++)
          sum+=candidates[c];

        for(var d=lastSelection+1; d<10; d++)
          if(candidates[d]>0) hasnext=true;
        if(!hasnext)
        {
          lastSelection=-1;
          depth+=1;
          revert(guesses, false);
        }
        hasnext = false;

        if(sum < 3) 
        {
        //console.log(candidates);
    	    for(c=0; c<10; c++)
    	    {

    	    
    	      if(candidates[c]>0)
    	      {
              if (lastSelection>=c) { console.log("greater") ; continue; }
              lastSelection=c;
              drawToConsole(board);
    	        createCheckpoint(guesses,c,board);  //TODO: hier stimmt was nicht
  	          lastSelection=-1;
  	          board[m][n]=c;
  	          setTimeout(function(e){drawBoard(board);},100);
  	          
              
              document.getElementById(fields[m][n]).style.color="purple";
              
  	          break loop1;
	          }

	        }
	      }
      }
    }
    drawBoard(board);
}


function auto(board) {
  console.log("auto()");
  
  for(var i=0; i<81; i++) 
  {
    for(var j=0; j<81; j++)
		{
		  if(isSolved(board)) return;
		  if(!solveUnambiguously(board))
		    guess(board,depth)
		}
		solveUnambiguously(board);
		if(isSolved(board)) return;
		else
		{
		  console.log("Guess No in Auto: "+guesses);
		  revert(guesses);
		}
  }
}

function revert(guessNo, clear) {
  if (!clear) if(guessNo==0) return;
  console.log("revert("+guessNo+")");
  guesses-=1;
  console.log(checkpointArray[guessNo]);
  copyArray(checkpointArray[guessNo], testBoard)
  lastSelection = selectionArray[guessNo];
  drawBoard(testBoard);
  updateDebug();
}


