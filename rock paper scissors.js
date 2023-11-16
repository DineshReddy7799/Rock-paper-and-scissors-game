const playertext=document.querySelector("#player");
const computertext=document.querySelector("#computer");
const resulttext=document.querySelector("#result");
const choice=document.querySelectorAll(".choice");

let player;
let computer;
let result;


choice.forEach(button => button.addEventListener("click",() => {
    player=button.textContent;
    computerturn();
    playertext.textContent=`Player:${player}`;
    computertext.textContent=`Computer:${computer}`;
    resulttext.textContent=checkwinner();
}));

function computerturn(){
    const randnum=Math.floor(Math.random() * 3)+1;

    switch(randnum){
        case 1:
        computer="ROCK";
        break;

        case 2:
        computer="PAPER";
        break;

        case 3:
        computer="SCISSORS";
        break;
    }
}

function checkwinner(){
    if(player==computer){
        return "Draw!!"
    }
    
        else if(computer=="ROCK"){
            return(player=="PAPER")? "YOU WIN😸":"YOU LOSE🥹"
        }
        else if(computer=="PAPER"){
            return(player=="SCISSORS")? "YOU WIN😸":"YOU LOSE🥹"
        }
        else if(computer=="SCISSORS"){
            return(player=="ROCK")? "YOU WIN😸":"YOU LOSE🥹"
        }

    }
