const myButton1 = document.getElementById("myButton1");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");

const mix = 1;
const max = 6;
let randomNum1;
let randomNum2;
let checker =false;


myButton1.onclick = function(){
    checker = true
    randomNum1 = Math.floor(Math.random() * max) + mix;
    randomNum2 = Math.floor(Math.random() * max) + mix;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2; 
    let x = randomNum1 + randomNum2;
    console.log(x);
    if(randomNum1 > randomNum2){
        myLabel3.textContent = "Player 1 Win!";
    }else if(randomNum1 < randomNum2){
        myLabel3.textContent = "Player 2 Win!";
    }else if(randomNum1 == randomNum2){
        myLabel3.textContent = "Draw!";
    }
}

