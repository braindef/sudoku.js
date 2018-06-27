function generate(level) {
  if(level==0)
    load(testBoard1);
  if(level==1)
    load(testBoard2);
  if(level==2)
    load(testBoard7);
  shuffle();
  init();
  drawBoard(testBoard);
}


function shuffle() {
  for(var i=0; i<30; i++)
    if(i%2==0)
    {
      bigRow = Math.floor(Math.random() * 3)
      swapRow(bigRow*3+Math.floor(Math.random() * 3), bigRow*3+Math.floor(Math.random() * 3));
    }
    else
    {
      bigCol = Math.floor(Math.random() * 3)
      swapCol(bigCol*3+Math.floor(Math.random() * 3), bigCol*3+Math.floor(Math.random() * 3));
    }

}


function swapRow(row1, row2)
{
  for(var i=0; i<9; i++)
    [ testBoard[row1][i], testBoard[row2][i] ] = [ testBoard[row2][i], testBoard[row1][i] ];
}

function swapCol(col1, col2)
{
  for(var i=0; i<9; i++)
    [ testBoard[i][col1], testBoard[i][col2] ] = [ testBoard[i][col2], testBoard[i][col1] ];
}


