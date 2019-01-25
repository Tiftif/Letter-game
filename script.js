let ctn = document.createElement("div");
document.body.appendChild(ctn);

/* FIRST PAGE */
let nameGame = document.createElement("p");
nameGame.textContent = "Letter-Game";
nameGame.style.color = "red";
nameGame.style.fontSize = "40px"
nameGame.appendChild(document.createElement("br"))
ctn.appendChild(nameGame);
let rulesGame = document.createElement("p")
rulesGame.textContent = "Les règles du jeu";
rulesGame.appendChild(document.createElement("br"));
ctn.appendChild(rulesGame);

/*BTN */
let btnStart = document.createElement("input");
btnStart.type = "button";
btnStart.value = "Démarrer";
btnStart.style.padding = "50px"
ctn.appendChild(btnStart);
ctn.style.textAlign = "center";
let barProgress = document.createElement("progress")

/* ECRAN 2 */
let ctnMain = document.createElement("div");
document.body.appendChild(ctnMain);
ctnMain.hidden = true;

/* HEADER */
let header = document.createElement("header");
ctnMain.appendChild(header)
let nameHeader = document.createElement("h2")
nameHeader.textContent = "Letter Game";
header.appendChild(nameHeader);
header.appendChild(barProgress)
header.style.display = "flex";
header.style.justifyContent = "space-between";

/* CREATION COEUR */
let heart1 = document.createElement("img")
heart1.src = "heart.png"
header.appendChild(heart1);
heart1.style.width = "20px"
heart1.style.height = "20px"
let heart2 = document.createElement("img")
heart2.src = "heart.png"
header.appendChild(heart2);
heart2.style.width = "20px"
heart2.style.height = "20px"
let heart3 = document.createElement("img")
heart3.src = "heart.png"
header.appendChild(heart3);
heart3.style.width = "20px"
heart3.style.height = "20px"
let life = 3;





/*score */
let score = document.createElement("h2");
let scoreNumber = 0;
score.textContent = "Score " + scoreNumber;
header.appendChild(score);

/* Bar progress */
barProgress.max = 6;
barProgress.value = 6;

/*Timer */
let timeLeft = document.createElement("h2");
let timer = 5;
timeLeft.textContent = "Temps restant " + timer;
header.appendChild(timeLeft);


/*SET-INTERVAL*/
let inGame = true;
setInterval(timerFunction, 1000)

function timerFunction() {
  timer = timer - 1;
  timeLeft.textContent = "Temps restant " + timer;
  barProgress.value = timer;
  barProgress.max = 6;
  if (timer <= 0) {
    clearInterval(timerFunction);
    timeLeft.textContent = "Game over";
    inGame = false;
  }
}

/* FONCTION 2eme page */
btnStart.addEventListener("click", start, false)

function start() {
  ctn.hidden = true;
  ctnMain.hidden = false;
  if (ctnMain.hidden = false) {
    timerFunction();
  }
}

/* TABLEAU */
let ctnalpha = document.createElement("p");
ctnMain.appendChild(ctnalpha);

let arrayAlpha = ["a", "b", "c", "d", "e", "f", "g", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomLetter = arrayAlpha[Math.floor(Math.random() * arrayAlpha.length)];
ctnalpha.textContent = randomLetter;
ctnalpha.style.textAlign = "center";
ctnalpha.style.fontSize = "xx-large";

/* FONCTION CLAVIER */
window.addEventListener("keydown", function(event) {

  if ((event.key == randomLetter) && (inGame == true)) {

    scoreNumber = scoreNumber + 1
    timer = 6
    score.textContent = "Score " + scoreNumber++;
    randomLetter = arrayAlpha[Math.floor(Math.random() * arrayAlpha.length)];
    ctnalpha.textContent = randomLetter;
    /* FAIRE LES IF ELSE PAR PALIER */
    if (scoreNumber >= 5 && scoreNumber <= 10) {
      timer = 6;
    }
    else if (scoreNumber <= 10 & scoreNumber <=15){
      timer = 5;
    }
    else if (scoreNumber >= 25 & scoreNumber <=30) {
      timer = 4;
    }
    else if (scoreNumber >= 30 && scoreNumber <= 35) {
      timer = 3;
    }
  }
  else {
     life = life -1;       
   }
    if (life <= 2) {
         heart1.hidden = true;
    }
    
      if (life <= 1) {
         heart2.hidden = true;
    }
     if (life <= 0) {
         heart3.hidden = true;
    }
   console.log(life)
}, false)
