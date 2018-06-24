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
      //alert(z0 +" " + z1 + " " + board[3*(i-(i%3))/3+z0][3*(j-(j%3))/3+z1]);
      initialCandidates[ board[3*(i-(i%3))/3+z0][3*(j-(j%3))/3+z1] ] = 0;
    }
  //alert(initialCandidates);
  return initialCandidates;
}

function parseBoard(board)
{
  for(m=0; m<9; m++)
    for(n=0; n<9; n++)
    {
      if(board[m][n]==0)
      {
        candidates = getCandidates(m, n, board)
        var sum = 0;
        for(c=0; c<10; c++)
          sum+=candidates[c];
        if(sum < 2) board[m][n]=1*candidates[1]+2*candidates[2]+3*candidates[3]+4*candidates[4]+5*candidates[5]+
                               6*candidates[6]+7*candidates[7]+8*candidates[8]+9*candidates[9];
        document.getElementById(fields[m][n]).style.color="red";                     
      }
    }
    drawBoard(board);
}
