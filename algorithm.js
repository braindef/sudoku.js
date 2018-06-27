// 0 defines an empty field
//easy sudoku

testBoard1 = [[3,0,0,2,4,0,0,6,0],
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



testBoard3 = [[0,0,0,0,0,5,0,0,7],
              [5,0,6,2,0,0,0,0,3],
              [1,0,0,0,3,0,0,0,0],
              [0,0,7,3,0,1,0,0,8],
              [6,0,0,0,0,0,7,0,1],
              [8,1,2,0,7,9,0,0,6],
              [7,0,0,9,0,0,8,6,0],
              [0,6,0,0,0,3,0,0,2],
              [2,0,0,7,0,0,0,0,0]];


//von wikipedia Standardsudoku mit nur 17 vorbelegten Feldern
testBoard4 = [[0,0,0,0,0,0,0,1,0],
              [4,0,0,0,0,0,0,0,0],
              [0,2,0,0,0,0,0,0,0],
              [0,0,0,0,5,0,4,0,7],
              [0,0,8,0,0,0,3,0,0],
              [0,0,1,0,9,0,0,0,0],
              [3,0,0,4,0,0,2,0,0],
              [0,5,0,1,0,0,0,0,0],
              [0,0,0,8,0,6,0,0,0]];

//von https://samirhodzic.github.io/sudoku-solver-js/
testBoard5  = [[0,3,2,0,5,4,9,0,0],
               [0,9,0,0,0,1,0,0,4],
               [0,8,0,7,0,0,0,3,1],
               [0,0,5,6,0,0,0,2,7],
               [8,0,0,0,7,0,0,0,0],
               [2,7,0,1,4,0,0,0,5],
               [0,0,0,2,1,0,3,0,0],
               [0,1,8,9,0,7,6,5,2],
               [6,0,3,0,0,0,0,0,0]];

//evil sudoku von https://samirhodzic.github.io/sudoku-solver-js/
testBoard6  = [[0,0,5,2,0,0,0,0,0],
               [4,0,0,3,0,0,7,0,0],
               [6,0,0,0,0,0,0,1,0],
               [8,0,0,0,2,0,1,0,0],
               [0,4,0,8,0,0,5,0,0],
               [0,0,0,0,9,5,0,0,0],
               [0,8,3,0,4,0,0,7,0],
               [0,9,0,0,0,6,0,8,0],
               [5,0,0,9,0,2,0,0,0]];
              
//das härteste sudoku der welt http://www.oe24.at/welt/Das-ist-das-schwierigste-Sudoku-der-Welt/1597831
testBoard7  = [[0,0,5,3,0,0,0,0,0],
               [8,0,0,0,0,0,0,2,0],
               [0,7,0,0,1,0,5,0,0],
               [4,0,0,0,0,5,3,0,0],
               [0,1,0,0,7,0,0,0,6],
               [0,0,3,2,0,0,0,8,0],
               [0,6,0,5,0,0,0,0,9],
               [0,0,4,0,0,0,0,3,0],
               [0,0,0,0,0,9,7,0,0]];

testBoard  = [[0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0]];

function isSolved() {
  for(var m=0; m<9; m++)
    for(var n=0; n<9; n++)
      if(testBoard[m][n]==0)
        return false;
  return true;
}


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

function getMinCandidate()
{
	min=9;
	field=0;
	candidate=[];
	for(var i=0; i<9; i++)
	  for(var j=0; j<9; j++)
		{
		 if(testBoard[i][j]==0)
		 {
			 candidates = getCandidates(i,j);
			 temp = candidates[0]+candidates[1]+candidates[2]+candidates[3]+candidates[4]+
              candidates[5]+candidates[6]+candidates[7]+candidates[8]+candidates[9];
			 if (temp<min)
			 {
				 min=temp;
				 field=[i, j];
				 c=candidates;
			 }
		 }
		}

	return [field, c, min];
}

guesses=0;
steps=3;
elapsed=0;


function auto() {
  getFromScreen();


  var start = Date.now();


  solve();

  var end = Date.now();
  elapsed = "0."+(end - start)+" Seconds"; // time in milliseconds
  update();
  if (isSolved())
    document.getElementById("table").style.backgroundColor="lightgreen";
}

function solve() {

  for(var i=0; i<9999; i++)
  {
    [field, candidates, min] = getMinCandidate();
    if(isSolved()) break;
    if(candidates[0]+candidates[1]+candidates[2]+candidates[3]+candidates[4]+candidates[5]+candidates[6]+candidates[7]+candidates[8]+candidates[9]==0)
    {
      revert(1);
      continue;
    }
    console.log(candidates, field);
    if(min<2)
    {
      //if there is only one possible number to enter everything is fine, wie enter it
      testBoard[field[0]][field[1]] = candidates[0]  +candidates[1]*1+candidates[2]*2+candidates[3]*3+candidates[4]*4+
			  	                            candidates[5]*5+candidates[6]*6+candidates[7]*7+candidates[8]*8+candidates[9]*9;
      document.getElementById(fields[field[0]][field[1]]).style.color = "green";
    }
    else //if 2 or more candidates
    {
      var hasNext=false;
      for(var c=0; c<10; c++)
      {
        if(candidates[c]==1 /*&& selection < c*/)
        {
        for(var d=c; d<10; d++)
            if(candidates[d]==1)
              hasNext=true;
          if(!hasNext)
          {
            revert(2);
          }
        
          pushCheckpoint(guesses++, c);
          testBoard[field[0]][field[1]] = c;
          document.getElementById(fields[field[0]][field[1]]).style.color = "red";
        }
      }
    }
  }
}

selection=-1;

function revert(steps) {
  guesses-=steps;
  popCheckpoint(guesses);
  guesses--;
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


