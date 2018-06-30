// 0 defines an empty field
var testBoard = [[0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0]];
                  
var unsolvable = [[0,4,6,0,0,0,9,0,0],
                  [0,5,9,0,0,0,7,8,2],
                  [7,8,3,0,0,0,5,6,2],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0]];

//easy sudoku
var testBoard1 = [[3,0,0,2,4,0,0,6,0], 
                  [0,4,0,0,0,0,0,5,3],
                  [1,8,9,6,3,5,4,0,0],
                  [0,0,0,0,8,0,2,0,0],
                  [0,0,7,4,9,6,8,0,1],
                  [8,9,3,1,5,0,6,0,4],
                  [0,0,1,9,2,0,5,0,0],
                  [2,0,0,3,0,0,7,4,0],
                  [9,6,0,5,0,0,3,0,2]];

//medium sudoku, unambigious solution (2 solutions)
var testBoard2 = [[0,0,3,0,5,0,0,7,9],
                  [2,0,0,6,0,0,1,5,0],
                  [0,8,9,0,2,1,0,0,0],
                  [1,0,0,0,7,8,9,0,6],
                  [9,0,8,2,0,0,0,0,5],
                  [0,2,0,0,4,0,8,0,0],
                  [8,0,5,0,6,2,0,9,0],
                  [0,9,0,5,0,7,6,0,1],
                  [7,0,0,4,0,0,0,8,0]];

var testBoard3 = [[0,0,0,0,0,5,0,0,7],
                  [5,0,6,2,0,0,0,0,3],
                  [1,0,0,0,3,0,0,0,0],
                  [0,0,7,3,0,1,0,0,8],
                  [6,0,0,0,0,0,7,0,1],
                  [8,1,2,0,7,9,0,0,6],
                  [7,0,0,9,0,0,8,6,0],
                  [0,6,0,0,0,3,0,0,2],
                  [2,0,0,7,0,0,0,0,0]];

//von wikipedia Standardsudoku mit nur 17 vorbelegten Feldern
var testBoard4 = [[0,0,0,0,0,0,0,1,0],
                  [4,0,0,0,0,0,0,0,0],
                  [0,2,0,0,0,0,0,0,0],
                  [0,0,0,0,5,0,4,0,7],
                  [0,0,8,0,0,0,3,0,0],
                  [0,0,1,0,9,0,0,0,0],
                  [3,0,0,4,0,0,2,0,0],
                  [0,5,0,1,0,0,0,0,0],
                  [0,0,0,8,0,6,0,0,0]];

//von https://samirhodzic.github.io/sudoku-solver-js/
var testBoard5 = [[0,3,2,0,5,4,9,0,0],
                  [0,9,0,0,0,1,0,0,4],
                  [0,8,0,7,0,0,0,3,1],
                  [0,0,5,6,0,0,0,2,7],
                  [8,0,0,0,7,0,0,0,0],
                  [2,7,0,1,4,0,0,0,5],
                  [0,0,0,2,1,0,3,0,0],
                  [0,1,8,9,0,7,6,5,2],
                  [6,0,3,0,0,0,0,0,0]];

//evil sudoku von https://samirhodzic.github.io/sudoku-solver-js/
var testBoard6 = [[0,0,5,2,0,0,0,0,0],
                  [4,0,0,3,0,0,7,0,0],
                  [6,0,0,0,0,0,0,1,0],
                  [8,0,0,0,2,0,1,0,0],
                  [0,4,0,8,0,0,5,0,0],
                  [0,0,0,0,9,5,0,0,0],
                  [0,8,3,0,4,0,0,7,0],
                  [0,9,0,0,0,6,0,8,0],
                  [5,0,0,9,0,2,0,0,0]];

//das härteste sudoku der welt http://www.oe24.at/welt/Das-ist-das-schwierigste-Sudoku-der-Welt/1597831
var testBoard7 = [[0,0,5,3,0,0,0,0,0],
                  [8,0,0,0,0,0,0,2,0],
                  [0,7,0,0,1,0,5,0,0],
                  [4,0,0,0,0,5,3,0,0],
                  [0,1,0,0,7,0,0,0,6],
                  [0,0,3,2,0,0,0,8,0],
                  [0,6,0,5,0,0,0,0,9],
                  [0,0,4,0,0,0,0,3,0],
                  [0,0,0,0,0,9,7,0,0]];

//only one guess
var testBoard8 = [[3,0,0,2,4,0,0,6,0],
                  [0,4,0,0,0,0,0,5,3],
                  [1,8,9,6,3,5,4,0,0],
                  [0,0,0,0,8,0,2,0,0],
                  [0,0,7,4,9,6,8,0,1],
                  [8,9,3,1,5,0,6,0,4],
                  [0,0,1,9,2,0,5,0,0],
                  [0,0,0,3,0,0,7,4,0],
                  [0,0,0,0,0,0,0,0,0]];

var testBoard9 = [[0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,3,0,8,5],
                  [0,0,1,0,2,0,0,0,0],
                  [0,0,0,5,0,7,0,0,0],
                  [0,0,4,0,0,0,1,0,0],
                  [0,9,0,0,0,0,0,0,0],
                  [5,0,0,0,0,0,0,7,3],
                  [0,0,2,0,1,0,0,0,0],
                  [0,0,0,0,4,0,0,0,9]];


//checks if the sudoku is solved
function isSolved() {
  for(var m=0; m<9; m++)
    for(var n=0; n<9; n++)
      if(testBoard[m][n]==0)
        return false;
  document.getElementById("table").style.backgroundColor="lightgreen";
  return true;
}

//get candidates of a field
function getCandidates(i, j)
{
  //                       0  1  2  3  4  5  6  7  8  9
  var initialCandidates = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  //check line
  for(var x=0; x<9; x++)
    initialCandidates[ testBoard[i][x] ] = 0;
  //check column
  for(var y=0; y<9; y++)
    initialCandidates[ testBoard[y][j] ] = 0;
  //check square field
  for(var z0=0; z0<3; z0++)
    for(var z1=0; z1<3; z1++)
    {
      //check the 3x3 square field of the belonging field
      initialCandidates[ testBoard[ 3*(i-(i%3))/3 + z0 ][ 3*(j-(j%3))/3 + z1 ] ] = 0;
    }
  return initialCandidates;
}

//gives the field with the least candidates
function getBestCandidate()
{
  var numCandidates=10;
  var bestNumCandidates=10;;
  var bestCandidate=[];
  for(var i=0; i<9; i++)
    for(var j=0; j<9; j++)
      if(testBoard[i][j]==0)
		  {
		    numCandidates = countCandidates(getCandidates(i,j));
		    if(bestNumCandidates>numCandidates)
		    {
		      bestNumCandidates = numCandidates;
		      bestCandidate = [i, j, getCandidates(i,j).slice(0,10)];
		    }
		  }

	return bestCandidate;
}

//count the numbers of candidates in a candidates array
function countCandidates(candidates)
{
  //console.log("countCandidates("+candidates+");");
  var count=0;
  for(var c=0; c<10; c++)
    if(candidates[c]==1)
      count++;
  return count;
}

var instance=0;
var iterations=100;
var counter=0;
var finished=false;
var solutions=-1;

//---------------------------------------------------------------------------------------------------------------
//recursive solver algorithm that calls itself until it comes to a solution or deadend
//---------------------------------------------------------------------------------------------------------------
function solve() {
  console.log("START solve instance No: "+instance++);
  
  //just in case there would be a bug, stop after a few 1000 iterations
  if(instance>iterations) //TODO:instance could also be named iteration
  {
    alert("Not all possibilities parsed, try a bigger value for iterations, Algorithm stops at "+instance+" iterations");
    return;
  }
  //drawToConsole(testBoard);
  var best=[];
  var pos=[];
  var candidates=[];
  var cand=0;
  var count;
  
  try
  {
		best = getBestCandidate();
		console.log("BEST:"+best);
		
		pos[0] = best[0];
		pos[1] = best[1];
		candidates = best[2],best[3],best[4],best[5],best[6],best[7],best[8],best[9],best[10];

		console.log("pos, candidates: "+pos +", " + candidates+");");
		count = countCandidates(candidates);
  } catch(err)
    {
      //if there is no result from getBestCandidates we set the count of the candidates to 0;
      //TODO: maybe not as try catch statement
      count=0;
    }

  //-------------------------------------------------------------------------
  //this lines have nothing to do with algoritm it's for the slow motion only
  //-------------------------------------------------------------------------  


  if(count == 1) document.getElementById(fields[pos[0]][pos[1]]).style.color = "green";
  if(count > 1) document.getElementById(fields[pos[0]][pos[1]]).style.color = "red";

  //-------------------------------------------------------------------------



  if(count==0)
  {
    console.log(">>>no next move possible");
    if(isSolved()) 
    {
      console.log("RESULT at " + instance + " iterations found");
      console.log("RESULT: Solutions so far: "+solutions);
      finished=true;
      //drawToConsole(testBoard);
      drawBoard(testBoard);
      pushSolution();
      solutions++;

      return;
    }
    else
    {
      return;
    }
  }
  
  if(count==1) {
    console.log(">>>unambigious");
    cand = candidates[0]*0+candidates[1]*1+candidates[2]*2+candidates[3]*3+candidates[4]*4+
           candidates[5]*5+candidates[6]*6+candidates[7]*7+candidates[8]*8+candidates[9]*9;
  
    testBoard[pos[0]][pos[1]] = cand;
    //-------------------------------------------------------------------------
    //this lines have nothing to do with algoritm it's for the slow motion only
    //-------------------------------------------------------------------------
    if(!finished) setTimeout( drawToCanvas, counter++*time, pos[1], pos[0], cand, "green");
    //-------------------------------------------------------------------------
    solve();

    testBoard[pos[0]][pos[1]] = 0;
    //-------------------------------------------------------------------------
    //this lines have nothing to do with algoritm it's for the slow motion only
    //-------------------------------------------------------------------------
    if(!finished) setTimeout( drawToCanvas, counter++*time, pos[1], pos[0], 0, "green");
    //-------------------------------------------------------------------------
    return;
  }
                                
  if(count>1)
  {
    console.log(">>>ambigious"); 
    var firstCandidate=0;
    for(var c=0; c<10; c++)
    {
      if(candidates[c]==1) 
      {
       
        testBoard[pos[0]][pos[1]] = c;

        //-------------------------------------------------------------------------
        //this lines have nothing to do with algoritm it's for the slow motion only
        //-------------------------------------------------------------------------
        if(!finished) setTimeout( drawToCanvas, counter++*time, pos[1], pos[0], c, "red");
        //-------------------------------------------------------------------------
        
        solve();
        
        testBoard[pos[0]][pos[1]] = 0;

        //-------------------------------------------------------------------------
        //this lines have nothing to do with algoritm it's for the slow motion only
        //-------------------------------------------------------------------------
        if(!finished) setTimeout( drawToCanvas, counter++*time, pos[1], pos[0], 0, "red");
        //-------------------------------------------------------------------------
      }
    }
  }
}

function auto() {
  getFromScreen();
  time = document.getElementById("time").value;
  iterations = document.getElementById("iterations").value;
  initCanvas();
  var start = Date.now();

  solve();

  var end = Date.now();
  elapsed = "0."+(end - start)+" Seconds"; // time in milliseconds
  //update();
  if (isSolved()) {
    document.getElementById("table").style.backgroundColor="lightgreen";
    drawBoard(testBoard);
  }
  document.getElementById("numSolutions").value=solution+1+"/"+solutions;
//  if(finished==false) alert("No Solution");
  finished=false;
}

function check() {
    solve();
    for(var i=0; i<9; i++)
      for(var j=0; j<9; j++)
        if(testBoard[i][j]!=document.getElementById(fields[i][j]).value)
          document.getElementById(fields[i][j]).style.backgroundColor="pink";
        else
          document.getElementById(fields[i][j]).style.backgroundColor="lightgreen";
}


