function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
  currentposition();

  
}

function shuffle() {

for (var row=1;row<=4;row++) { 
   for (var column=1;column<=4;column++) { 
  
    var row2=Math.floor(Math.random()*4 + 1); 
    var column2=Math.floor(Math.random()*4 + 1); 
     
    swapTiles("cell"+row+column,"cell"+row2+column2); 
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
challenge(seconds);
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
   if(seconds==0 && minutes==0 && hours==0){
     alert("Please start New Game");
   } else{
   alert("Congratulations , You solved the puzzle in"+" " + count +" "+"Moves" +"\r\n"+ "Time Taken :"+" " + displayHours + ":" + displayMinutes + ":" + displaySeconds);
   refreshPage1();}
  }else{
    win=0;
  }
  }
function bg1(){
document.getElementById("content").style.backgroundImage= "url('images/bg1.jpg')";
}
function bg2(){
  document.getElementById("content").style.backgroundImage= "url('images/bg2.jpg')";
  }
  function bg3(){
    document.getElementById("content").style.backgroundImage= "url('images/bg3.jpg')";
    }
    function bg4(){
      document.getElementById("content").style.backgroundImage= "url('images/header.jpg')";
      }



      function myFunction() {
        document.getElementById("mydrop").classList.toggle("show");
      }
      
      // Close the dropdown if the user clicks outside of it
      window.onclick = function(event) {
        if (!event.target.matches('.btn1-background')) {
          var dropdowns = document.getElementsByClassName("dropdown-content");
          var i;
          for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
              openDropdown.classList.remove('show');
            }
          }
        }
      }

let counters=0;

      function challenge(second){
        if(counters==1){
        var rowswap1 =Math.floor(Math.random()*4 + 1);
        var colswap1 =Math.floor(Math.random()*4 + 1);
        var rowswap2 =Math.floor(Math.random()*4 + 1);
        var colswap2 =Math.floor(Math.random()*4 + 1);

        if((second%7)==0 && counters==1){swapTiles("cell"+rowswap1+colswap1,"cell"+rowswap2+colswap2)
      };
      }
    }
      function challengealert(){
        counters=1;
        alert("After the game starts , at every 7 seconds , 2 tiles will swap randomly " +"\r\n"  +"\r\n" +"                              "+ "Show your skills here");
     
    }
     function challengefix(){
       counters=2;
     }