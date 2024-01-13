let gameseq =[];
let userseq =[];

let btns=["yellow", "red", "purple", "green"];
let started = false;
let Level= 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  },250);
}



function levelUp() {
    userseq = [];
    Level++;
    h2.innerText = `Level ${Level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randcolor = btns[randIdx];
    let randBtn = document.querySelector(`.${randcolor}`);
    // console.log(randIdx);
    // console.log(randcolor);
    // console.log(randBtn);
    gameseq.push(randcolor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx) {
// console.log("curr level:", Level);
  


if(userseq[idx] ===gameseq[idx]){
  if(userseq.length == gameseq.length){
    setTimeout(levelUp, 1000);
  }

}else{
  h2.innerHTML = `Game over! Your score was <b>${Level}</b> <br> press any key to start.`;
  document.querySelector("body").style.backgroundColor = "red";
  setTimeout(function (){
    document.querySelector("body").style.backgroundColor = "white";
  }, 150);
  reset();

}
}
function btnpress(){
  let btn =this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userseq.push(userColor);

  checkAns(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
  btn.addEventListener("click", btnpress);
}

function reset(){
  started = false;
  gameseq = [];
  userseq = [];
  Level = 0;
}