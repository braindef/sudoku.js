
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

function markRow(m)
{
  for (i=0; i<9; i++)
      document.getElementById(fields[m][i]).style.backgroundColor = "blue";
}

function markCol(n)
{
  setTimeout(function(n) {
  for (i=0; i<9; i++)
      document.getElementById(fields[i][n]).style.backgroundColor = "blue";
  }, 10, n);
}

function unmarkRow(m)
{
  for (i=0; i<9; i++)
      document.getElementById(fields[m][i]).style.backgroundColor = "white";
}

function unmarkCol(n)
{
  setTimeout(function(n) {
  for (i=0; i<9; i++)
      document.getElementById(fields[i][n]).style.backgroundColor = "white";
  }, 111, n);
}

/*          markCol(n);
          markSquare(m,n);
          unmarkRow(m);
          unmarkCol(n);
          unmarkSquare(m,n);                     
*/

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



