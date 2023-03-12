//initialize players' names and set the time limit

var player1 = prompt("enter the name of the first player and hit ok");
var player2 = prompt("enter the name of the second player and hit ok");
var timeRemaining = prompt("set time");
if (player1.length===0) {
    player1="Player 1"
}
if(player2.length===0){
    player2="Player 2"
}
player1=player1[0].toUpperCase()+player1.slice(1);
player2=player2[0].toUpperCase()+player2.slice(1);
document.querySelectorAll(".player1")[0].textContent=player1;
document.querySelectorAll(".player1")[1].textContent=player1;
document.querySelectorAll(".player2")[0].textContent=player2;
document.querySelectorAll(".player2")[1].textContent=player2;

let timerStarted = false;
let timer;

document.querySelector("button").addEventListener("click",function(){
    disableButton();
    if (!timerStarted) {
        timerStarted = true;
        timer = setInterval(countDown, 1000);
      }

    var sound = "sounds/dice sound" + ((Math.floor(Math.random() * 7) + 1)) + ".mp3";
    var audio = new Audio(sound); 
    audio.play();
    console.log(audio);
    setTimeout(changeDiceImages, );
});

let player1Score = 0;
let player2Score = 0;

function press(){

    var x = Math.floor(Math.random()*6 +1);
    var y = Math.floor(Math.random()*6 +1);

    var image= "dice"+x+".png";
    var image2= "dice"+y+".png";
document.querySelectorAll("img")[0].setAttribute("src", "images/"+image);
document.querySelectorAll("img")[1].setAttribute("src", "images/"+image2);

if (x>y) {
    
    document.querySelector("h1").textContent=player1+" won this round👏👏"
    player1Score++;
        // update player 1 score on score board
        document.querySelector("#player1-score").textContent = player1Score;
   
    
} else if(x===y) {
   
    document.querySelector("h1").textContent="DRAW 🙏 ";
    
}
else {
  
    document.querySelector("h1").textContent= player2+" won this round👏👏";
    player2Score++;
    // update player 2 score on score board
    
    document.querySelector("#player2-score").textContent = player2Score;
}
}

// change the background color of the page every time the button is clicked

const colors = ["FFACAC","FFBFA9","FFEBB4","FBFFB1","F1DEC9"];
let currentIndex = 0;

const colorBtn = document.querySelector("#color-btn");

colorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#"+colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
});

// change the images of the dice and call press function

function changeDiceImages() {
    var x = 0;
    var y = 0;
    var interval = setInterval(function() {
        x = Math.floor(Math.random()*6 + 1);
        y = Math.floor(Math.random()*6 + 1);
        var image1 = "images/dice" + x + ".png";
        var image2 = "images/dice" + y + ".png";
        document.querySelectorAll("img")[0].setAttribute("src", image1);
        document.querySelectorAll("img")[1].setAttribute("src", image2);
    }, 50);
    setTimeout(function() {
        clearInterval(interval);
        press(x, y);
    }, 800);
}

// disable the roll button for 4 seconds after it's clicked

function disableButton() {
    document.querySelector("button").disabled = true;
    setTimeout(function() {
        document.querySelector("button").disabled = false;
    }, 2000);
}

var endgame = new Audio("sounds/win sound.mp3");

// start the timer countdown and end the game when time is up

function countDown() {
    let timeLeft = parseInt(timeRemaining);
    if (timeLeft >0) {
      timeLeft--;
      document.querySelector("#timer").textContent = timeLeft;
      var tick = new Audio("sounds/tick.mp3"); 
      tick.play();
      timeRemaining = timeLeft.toString();
    } else {
      clearInterval(timer);
      document.querySelector("button").disabled = true;
      endgame.play();
      if(player1Score>player2Score){
        document.querySelector("h1").textContent=player1+" won the GAME👏👏"
      }
      else if(player1Score=== player2Score){
        document.querySelector("h1").textContent="GAME Draw";
      }
      else{
        document.querySelector("h1").textContent=player2+" won the GAME👏👏"
      }
      // game over logic here
    }
  }

  //setting Copyright
  
 document.querySelector("#copyright").innerHTML="Copy right to Borhen "+(new Date().getFullYear());