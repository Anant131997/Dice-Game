var heading = document.querySelector(".position");
var dice1 = document.querySelector(".dice1");
var dice2 = document.querySelector(".dice2");
var button = document.querySelector(".btn");

button.addEventListener("click",()=>{
    var audio = new Audio("./sounds/rolling-dice.mp3");
    audio.play();

    var number1=Math.floor(Math.random()*6)+1;
    var number2=Math.floor(Math.random()*6)+1;

    if(number1>number2){
        heading.innerHTML = "🚩 Hurrah, Player1 won the match"
    }else if(number2>number1){
        heading.innerHTML = "Hurrah, Player2 won the match 🚩 "
    }else{
        heading.innerHTML = "🚩 Draw ! 🚩"
    }



    if(number1===1){
        dice1.src = "./images/dice1.png";
    }else if(number1===2){
        dice1.src = "./images/dice2.png";
    }else if(number1===3){
        dice1.src = "./images/dice3.png";
    }else if(number1===4){
        dice1.src = "./images/dice4.png";
    }else if(number1===5){
        dice1.src = "./images/dice5.png";
    }else if(number1===6){
        dice1.src = "./images/dice6.png";
    }

    if(number2===1){
        dice2.src = "./images/dice1.png";
    }else if(number2===2){
        dice2.src = "./images/dice2.png"
    }else if(number2===3){
        dice2.src = "./images/dice3.png";
    }else if(number2===4){
        dice2.src = "./images/dice4.png";
    }else if(number2===5){
        dice2.src = "./images/dice5.png";
    }else if(number2===6){
        dice2.src = "./images/dice6.png";
    }
   
    });