// 0 defines an empty field
//easy sudoku
/*
testBoard = [[3,0,0,2,4,0,0,6,0],
             [0,4,0,0,0,0,0,5,3],
             [1,8,9,6,3,5,4,0,0],
             [0,0,0,0,8,0,2,0,0],
             [0,0,7,4,9,6,8,0,1],
             [8,9,3,1,5,0,6,0,4],
             [0,0,1,9,2,0,5,0,0],
             [2,0,0,3,0,0,7,4,0],
             [9,6,0,5,0,0,3,0,2]];
*/
//medium sudoku, unambigious solution (2 solutions)
testBoard = [[0,0,3,0,5,0,0,7,9],
             [2,0,0,6,0,0,1,5,0],
             [0,8,9,0,2,1,0,0,0],
             [1,0,0,0,7,8,9,0,6],
             [9,0,8,2,0,0,0,0,5],
             [0,2,0,0,4,0,8,0,0],
             [8,0,5,0,6,2,0,9,0],
             [0,9,0,5,0,7,6,0,1],
             [7,0,0,4,0,0,0,8,0]];

/*
testBoard = [[0,0,0,0,0,5,0,0,7],
             [5,0,6,2,0,0,0,0,3],
             [1,0,0,0,3,0,0,0,0],
             [0,0,7,3,0,1,0,0,8],
             [6,0,0,0,0,0,7,0,1],
             [8,1,2,0,7,9,0,0,6],
             [7,0,0,9,0,0,8,6,0],
             [0,6,0,0,0,3,0,0,2],
             [2,0,0,7,0,0,0,0,0]];*/


function isSolved(board) {
  for(m=0; m<9; m++)
    for(n=0; n<9; n++)
      if(board[m][n]==0)
        return false;
  alert("Solved");
  return true;
}


function getCandidates(i, j, board)
{
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
  return initialCandidates;
}

function solveUnambiguously(board)
{
  getFromScreen(board);
 
  changes = false;

  
  counter = 0;
  for(m=0; m<9; m++)
    for(n=0; n<9; n++)
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
    console.log(board);
    return changes;
}

function guess(board, depth) {
var backupArray = new Array();
console.log("initial");
console.log(board);
lastSelection=-1;
loop1:
  for(m=0; m<9; m++)
    for(n=0; n<9; n++)
    {
      if(board[m][n]==0)
      {
        candidates = getCandidates(m, n, board);
        var sum = 0;
        for(c=0; c<10; c++)
          sum+=candidates[c];
        if(sum < 3) 
        {
        console.log(candidates);
    	    for(c=0; c<9; c++)
    	      if(candidates[c]>0)
    	      {
              if (lastSelection>=c) continue;
              lastSelection=c;
              drawToConsole(board);
    	        createCheckpoint(depth,c,board);
    	        console.log("m:"+m+" n:"+n+" c:"+c);
  	          board[m][n]=c;
  	          
              document.getElementById(fields[m][n]).style.color="purple";                     
  	          break loop1;
	          }
	       }
      }
    }
    drawBoard(board);
}


function auto2(board) {
  guesses=0;
  for(i=0; i<1; i++)
    if (!solveUnambiguously(board) && !(isSolved(board)) ) {
      guess(board, 0);
  }
}

function revert()
{
  var board=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
  copyArray(checkpointArray[0], testBoard)
  drawToConsole(testBoard);
  drawBoard(testBoard);
}


