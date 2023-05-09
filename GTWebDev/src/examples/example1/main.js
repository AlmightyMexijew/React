const playerRock = document.querySelector('#playerRock').addEventListener('click',chooseRock)
let playerChoice
let aiChoice = 0
let playerScore = 0
let aiScore = 0
function chooseRock(){
    playerChoice = "rock"
}
const playerPaper = document.querySelector('#playerPaper').addEventListener('click',choosePaper)
function choosePaper(){
    playerChoice = "paper"
}
const playerScissors = document.querySelector('#playerScissors').addEventListener('click',chooseScissors)
function chooseScissors(){
    playerChoice = "scissors"
}
const playShoot = document.querySelector('#shooter').addEventListener('click',shoot)
function shoot(){
    aiChoice = Math.floor(Math.random() * 3);
    if(aiChoice === 0){aiChoice="rock"}else
     if(aiChoice === 1){aiChoice="paper"}else{aiChoice="scissors"}
    if(aiChoice === playerChoice){alert("tie")}else if(
        aiChoice === "rock" && playerChoice === "paper"){alert("player wins with paper against rock!");playerScore ++}else if(
            aiChoice === "paper" && playerChoice === "scissors"){alert("player wins with scissors against paper");playerScore ++}else if(
                aiChoice === "scissors" && playerChoice === "rock"){alert("player wins with rock against scissors");playerScore ++}else{
                    alert("player loses, AI wins");
                    aiScore ++;
                }
    playerChoice = 0;
    aiChoice = 0;
    scoreUpdate();
}
function scoreUpdate(){
    document.querySelector('.playerScore').innerText = playerScore;
    document.querySelector('.aiScore').innerText = aiScore;
}
