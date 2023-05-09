//Necessary Objects such as choices, score

const rock = new Object();
rock.player = false;
rock.ai = false;
function rockReset(){
    rock.player = false;
    rock.ai = false;
}
function playerIsRock(){rock.player = true}

const paper = new Object();
paper.player = false;
paper.ai = false;
function paperReset(){
    paper.player = false;
    paper.ai = false;
}
function playerIsPaper(){paper.player = true;}

const scissors = new Object();
scissors.player = false;
scissors.ai = false;
function scissorsReset(){
    scissors.player = false;
    scissors.ai = false;
}
function playerIsScissors(){scissors.player = true;}

const scoreKeep = new Object();
scoreKeep.ai = 0
scoreKeep.player = 0
function scoreUpdate(){
    document.querySelector('.playerScore').innerText = scoreKeep.player;
    document.querySelector('.aiScore').innerText = scoreKeep.ai;
}
//functionality
document.querySelector('playerRock').addEventListener('click',rock.playerIsRock);
document.querySelector('playerPaper').addEventListener('click',paper.playerIsPaper);
document.querySelector('playerScissors').addEventListener('click',scissors.playerIsScissors);
//
function playerWins(){
    alert("Player Wins!");
    rockReset();
    paperReset();
    scissorsReset();

}
const playShoot = document.querySelector('#shooter').addEventListener('click',shoot)
function shoot(){
    if (rock.player === rock.ai){alert("tie");rockReset();paperReset();scissorsReset()}else if(
        rock.player === true && scissors.ai === true || paper.player === true && rock.ai === true || scissors.player === true && paper.ai === true){playerWins();scoreKeep.player ++}else{alert("AI wins");scoreKeep.ai ++}
    }
