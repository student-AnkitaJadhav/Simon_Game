let gameSeq = [];
let userSeq = [];
let btns =["red","blue","green","yellow"];
let started = false;
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300)
}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let ranIndx = Math.floor(Math.random()*3);
    let btnColor = btns[ranIndx];
    let ranBtn = document.querySelector(`.${btnColor}`);
    gameSeq.push(btnColor);
    btnFlash(ranBtn);
}

function checkAns(indx){
    
    if(gameSeq[indx] === userSeq[indx]){
        if(userSeq.length === gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h3.innerHTML = `Game over!<b>Your score was ${level}.</b><br> Press any key to start the game.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150)
    
        reset();
    }
}
function btnPress(){
    console.log("Button was  pressed");
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}