var counter =0;
var visited=[false,false,false,false,false,false,false,false,false];
var red =new Array();
var black = new Array();
var BLACK_WINS="Player 2 wins";
var RED_WINS="Player 1 wins";
var DRAW = "draw";

function checkWin(){
var redString = red.toString();
var blackString = black.toString();
//alert(redString);
//check horizontal
//alert("check top row: "+red.includes('0'));
var result;
if(red.includes('0') && red.includes('1')&& red.includes('2') || red.includes('3') && red.includes('4')&& red.includes('5') || red.includes('6') && red.includes('7')&& red.includes('8')){
result =RED_WINS;
}
//check vertical
else if(red.includes('0') && red.includes('3')&& red.includes('6')  || red.includes('1') && red.includes('4')&& red.includes('7')  || red.includes('2') && red.includes('5')&& red.includes('8') ){
result= RED_WINS;
}
//check diagonals
else if(red.includes('0') && red.includes('4')&& red.includes('8')  || red.includes('2') && red.includes('4')&& red.includes('6')  ){
result= RED_WINS;
}

//same for black

else if(black.includes('0') && black.includes('1')&& black.includes('2')  || black.includes('3') && black.includes('4')&& black.includes('5')  ||black.includes('6') && black.includes('7')&& black.includes('8') ){
result =BLACK_WINS;
}
//check vertical
else if(black.includes('0') && black.includes('3')&& black.includes('6')  || black.includes('1') && black.includes('4')&& black.includes('7')  || black.includes('2') && black.includes('5')&& black.includes('8') ){
result= BLACK_WINS;
}
//check diagonals
else if(black.includes('0') && black.includes('4')&& black.includes('8')  || black.includes('2') && black.includes('4')&& black.includes('6')  ){
result= BLACK_WINS;
}


else {

  result = DRAW;
}
return result;
}


function changeColor(id){
if(visited[id]==false){
visited[id]=true;
//play audio
document.getElementById("audio").play();
if(counter%2==0){
document.getElementById(id).style.backgroundColor = "#76323F"; 

red.push(id);
red.sort();
}
else {
document.getElementById(id).style.backgroundColor = "#565656";
black.push(id);
black.sort();
}

counter++;

var result =checkWin();

if(result==RED_WINS|| result==BLACK_WINS ) {
setTimeout(function(){ 

confirm("Result: "+result);
location.reload();

 }, 100);
}
if(result== DRAW && !visited.toString().includes('false') ){
setTimeout(function(){ 

confirm("Result: "+result);
location.reload();

 }, 100);
}
//alert
}
}