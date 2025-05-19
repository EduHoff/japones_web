import { Character } from "./character.js";
import { getSelectedMode } from "./characterMode.js";
import { playSound } from './audioPlayer.js';
import { randomNumber } from "./randomNumber.js";

const character = new Character();
const mode = getSelectedMode();

const charDisplay = document.querySelector("#charDisplay");
const charAnswerDisplay = document.querySelector("#charAnswerDisplay")
const answerInput = document.querySelector("#answerInput");
const btnControl = document.querySelector("#btnControl");
const btnSound = document.querySelector("#btnSound");

let charAnswer = null;
let sound = null;



function main(){
    const aux = randomNumber(0,45);
    charDisplay.textContent = character[mode][aux].char
    charAnswer = character[mode][aux].romaji
    sound = character[mode][aux].soundId
}



window.addEventListener("DOMContentLoaded", ()=>main())

btnControl.addEventListener("click", ()=>{
    btnSound.classList.toggle("visible");
    btnControl.value = btnSound.classList.contains("visible") ? "Próximo" : "Confirmar";
    charAnswerDisplay.textContent = "";
   

    if(btnControl.value != "Confirmar"){
    charAnswerDisplay.textContent = 
        answerInput.value.toLowerCase() === charAnswer.toLowerCase()
        ? "Certo!" 
        : `Errado! A resposta era: ${charAnswer}`;
  
        answerInput.value = "";
    }

    if(btnControl.value === "Confirmar"){
        main();
    }
})


btnSound.addEventListener("click", ()=>{
    playSound(sound);
})
