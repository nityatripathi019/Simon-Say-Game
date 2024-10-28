
let gameSeq = [];
let userSeq = [];

let started = false ;
let h3 = document.querySelector("h3");
let para = document.querySelector(".result");

let level = 0;
let btns = ["brown","cadetblue","chocolate","cornflowerblue"];
document.addEventListener("keypress",()=>{
    if(started == false){
        console.log("game started");
        started = true;
    }

    levelUp();
})


function gameFlash(btn){
    btn.classList.add("flash");
setTimeout(()=>{
    btn.classList.remove("flash");
},250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250)
}

function levelUp(){
    userSeq=[];
    level++;
    h3.innerHTML = `level ${level}`
  
    let randIdx = Math.floor(Math.random()*4);
    let randcolor = btns[randIdx];
    
    let randBtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:",level);
    // let idx = level-1;
//    let count =0;
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        
        if(userSeq.length==gameSeq.length){
            setTimeout(()=>{
                levelUp();
            },1000);
           
        }
       
    }
    else{
        h3.innerText = `Game over!Press any key to start`;
        // para.style.font ="2rem"
        // para.innerText = `Your Score :${count}`;
    }
}



function buttonPress(){
    // console.log("button was pressed");
    // console.log(this);
    let btn = this ;
    userFlash(btn);
    let color =  btn.getAttribute("id");
    // console.log(color);
    userSeq.push(color);
    console.log( "user seq:",userSeq);
   
    checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(let btn of allbtns){
    btn.addEventListener("click",buttonPress)
}