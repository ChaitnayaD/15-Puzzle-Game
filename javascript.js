function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
  currentposition();
 
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (var row=1;row<=4;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=4;column++) { //For each column in this row
  
    var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 4
    var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 4
     
    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  } 
} 
}
let count=0;

function clickTile(row,column) {

  
  if (document.getElementById("cell"+row+column).className!= "tile44") { 
    
       //Checking if white tile on the right
       if (column<4) {
         if (document.getElementById("cell"+row+(column+1)).className=="tile44") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           count++;
           if(seconds>0){document.getElementById("displaymoves").innerHTML= "Moves:"+count;
          } 
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if (document.getElementById("cell"+row+(column-1)).className=="tile44") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           count++;
           ;if(seconds>0){document.getElementById("displaymoves").innerHTML= "Moves:"+count;} 
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if (document.getElementById("cell"+(row-1)+column).className=="tile44") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           count++;
           ;if(seconds>0){document.getElementById("displaymoves").innerHTML= "Moves:"+count;}
           return;
         }
       }
       //Checking if white tile is below
       if (row<4) {
         if (document.getElementById("cell"+(row+1)+column).className=="tile44") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           count++;
           if(seconds>0){document.getElementById("displaymoves").innerHTML= "Moves:"+count;} 
           return;
         }
       } 
       
  }
  
  
}



//time counter
let seconds=0;
let minutes=0;
let hours=0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let interval = null;

let status = "0";
let status1="0";

function stopWatch(){
  seconds++;

  if(seconds/60==1){
    seconds=0;
    minutes++;

    if(minutes/60==1){
      minutes=0;
      hours++;
    }
  }
  //display
  if(seconds < 10){
    displaySeconds = "0" + seconds.toString();
}
else{
    displaySeconds = seconds;
}

if(minutes < 10){
    displayMinutes = "0" + minutes.toString();
}
else{
    displayMinutes = minutes;
}

if(hours < 10){
    displayHours = "0" + hours.toString();
}
else{
    displayHours = hours;
}

//Display updated time values to user
document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
localStorage.setItem("seconds",seconds);

}



function start(){

  if(status == 0 ){

      count=0;
      document.getElementById("displaymoves").innerHTML= "Moves:"+count;
      interval = window.setInterval(stopWatch, 1000);
      document.getElementById("timer").innerHTML = "New Game";
      status1="reset";
      status = "1";
  }
  
  
}
function reset(){
  if(status1=="reset" ){
  
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    
    status = "0";
    start();
    
  }
} 
function reset1(){
  if(status1=="reset" ){
    count=0;
    document.getElementById("displaymoves").innerHTML= "Moves:"+count;
    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    
    status = "0";
   
    
  }
} 

function refreshPage(){
  if(confirm("Are you sure, you want to Reset?")){
    location.reload(); 
  }				
}
function refreshPage1(){
 
    location.reload(); 
  
}

let win=0;

function currentposition() {
var store = new Array(10);
for (var i = 1; i <=4; i++) {
  store[i] = new Array(10);
}
for (var i = 1; i <= 4; i++) {
  for (var j = 1; j <= 4; j++) {
      store[i][j] = document.getElementById("cell"+i+j).className;
      if(store[i][j]=="tile"+i+j){
        win++;
       }
       
      }
      
      
  }
  if(win==15){
    win=0;
    alert("Congratulations You solved the puzzle in"+" " + count +" "+"Moves");
refreshPage1();
  }else{
    win=0;
  }
  }
