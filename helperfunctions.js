
// 0 defines an empty field
testBoard = [[3, 0, 0, 2, 4, 0, 0, 6, 0],
             [0, 4, 0, 0, 0, 0, 0, 5, 3],
             [1, 8, 9, 6, 3, 5, 4, 0, 0],
             [0, 0, 0, 0, 8, 0, 2, 0, 0],
             [0, 0, 7, 4, 9, 6, 8, 0, 1],
             [8, 9, 3, 1, 5, 0, 6, 0, 4],
             [0, 0, 1, 9, 2, 0, 5, 0, 0],
             [2, 0, 0, 3, 0, 0, 7, 4, 0],
             [9, 6, 0, 5, 0, 0, 3, 0, 2]];
            



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
        field.readOnly = true;
      }
      else
        field.readOnly = false;
    }
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



function reset() {
}

//draw board to html
function drawToHtml() {

}


//find out if someone won the game
function check(localBoard)
{
}



