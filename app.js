let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["yellow","red","purple","green"];
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});
function game_flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function user_flash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx=Math.floor(Math.random()*3);
    let randColor=btns[ranIdx];
    let ranBtn=document.querySelector(`.${randColor}`);
 
    gameSeq.push(randColor);
    console.log(gameSeq);
    game_flash(ranBtn);
}
function checkAns(idx){
   //n let idx=level-1;
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
       
    }else{
        h2.innerHTML=`Game over ! Score is <b><b>${level}</b></b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnclick(){
    let btn=this;
    user_flash(btn);
    userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
let allBtn=document.querySelectorAll(".btn");
for(btn of allBtn){
    btn.addEventListener("click",btnclick);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
