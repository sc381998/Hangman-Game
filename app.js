let arr = ["WALRUS", "SPIDER", "HORNET", "SQUIRL"];
let word = arr[Math.floor(Math.random() * arr.length)];
let len = word.length;
let blankfilled = 0;
let blanks = document.getElementById("blanks");
let hangman = document.getElementById("hangman");
let alphabets = document.getElementById("alphabets");
let cells = document.getElementsByClassName("cell");
let startPage = document.getElementById("startPage");
let gameContainer = document.getElementById("game-container");
let chance = 5;
let gamOver = false;
const startGame = () => {
  startPage.classList.add("hide");
  gameContainer.classList.remove("hide");
  hint();
};
const letterClick = (el) => {
  let audio = new Audio("audio.mp3");
  audio.play();
  let val = el.id;
  val = val.toUpperCase();
  let letterFound = false;
  // console.log(val);
  for (let i = 0; i < word.length; i++) {
    if (val === word[i]) {
      cells[i].innerHTML = val;

      letterFound = true;
      blankfilled++;
    }
  }
  if (!letterFound) {
    let bug = document.getElementsByClassName("livesLeft")[chance - 1];
    bug.style.visibility = "hidden";
    chance--;
    let hangmanChange = document.getElementById("hangmanImg");
    hangmanChange.src = `${chance}.png`;
  }
  // console.log(chance);
  if (isWinner()) {
    let hangmanChange = document.getElementById("hangmanImg");
    hangmanChange.src = "Saviour.png";
    let saved = document.getElementById("saved");
    saved.classList.remove("hide");
    let bugs = document.getElementById("bugs");
    bugs.classList.add("hide");
    return;
  }
  if (chance <= 0) {
    let saved = document.getElementById("saved");
    saved.classList.remove("hide");
    let bugs = document.getElementById("bugs");
    bugs.classList.add("hide");
    saved.innerHTML = "You lose! Try Again";
    let hangmanChange = document.getElementById("hangmanImg");
    hangmanChange.src = "1.png";
    alphabets.classList.add("hide");
    gamOver = true;
    makeBlankRed();
    return;
  }
};
const makeBlankRed = () => {
  for (let i = 0; i < len; i++) {
    if (cells[i].innerHTML == "") {
      cells[i].classList.add("bottomRed");
      cells[i].innerHTML = word[i];
    }
  }
};
const isWinner = () => {
  if (blankfilled == word.length) {
    return true;
  }
  return false;
};

const hint = () => {
  let hint = document.getElementById("hint");
  hint.classList.remove("hide");
  startPage.classList.add("hide");
  gameContainer.classList.add("hide");
};
const checkDone = () => {
  let hint = document.getElementById("hint");
  hint.classList.add("hide");

  gameContainer.classList.remove("hide");
};

const home = () => {
  gameContainer.classList.add("hide");
  startPage.classList.remove("hide");
  window.location.reload();
};
const hint2 = () => {
  let hint = document.getElementById("hint");
  hint.classList.remove("hide");
  gameContainer.classList.add("hide");
};
const score = () => {
  return;
};
const music1 = () => {
  return;
};
