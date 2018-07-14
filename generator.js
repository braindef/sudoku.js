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

function randomize()
{
  getFromScreen();
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
    
  for(var i=0; i<5; i++)
    if(i%2==0)
    {
      targetBlock = Math.floor(Math.random() * 3);
      sourceBlock = Math.floor(Math.random() * 3);
      swapRow(targetBlock*3+0, sourceBlock*3+0);
      swapRow(targetBlock*3+1, sourceBlock*3+1);
      swapRow(targetBlock*3+2, sourceBlock*3+2);
    }
    else
    {
      targetBlock = Math.floor(Math.random() * 3);
      sourceBlock = Math.floor(Math.random() * 3);
      swapCol(targetBlock*3+0, sourceBlock*3+0);
      swapCol(targetBlock*3+1, sourceBlock*3+1);
      swapCol(targetBlock*3+2, sourceBlock*3+2);
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


