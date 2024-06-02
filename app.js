let HighScore = 0;
let h3 = document.querySelector("h3");


let gameSeq = [];
let userSeq = [];
let color = ["R","B","G","Y"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
        console.log("game is started")
        
        levelUp();
       
    }
});


function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },1000);
}
function levelUp () {
    userSeq=[];
    level++;
    //console.log(level)
    h2.innerText=`Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = color[randIdx];
    let ransbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(ransbtn);
}

function checkAns(idx){
   // console.log("Current Level ",level)
   
   if(userSeq[idx]==gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    } 
   }else{
    h2.innerText = `Game Over, Your score was ${level} Press any key to restart !`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function (){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    if(level>HighScore){
        HighScore=level;
        h3.innerText = `HIGH SCORE : ${HighScore}`
    }
    reset();

   }
}
function btnPress(){
    let btn = this;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started  = false;
    gameSeq=[];
    userSeq=[];
    level=0;
}