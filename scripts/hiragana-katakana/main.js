import { Character } from "./character.js"
import { getSelectedMode } from "../config/characterMode.js"
import { playSound } from './audioPlayer.js'
import { randomNumber } from "./randomNumber.js"
import { scoreBoard } from "./scoreBoard.js"

const character = new Character()
const mode = getSelectedMode()

const charDisplay = document.querySelector("#charDisplay")
const charAnswerDisplay = document.querySelector("#charAnswerDisplay")
const answerInput = document.querySelector("#answerInput")
const btnControl = document.querySelector("#btnControl")
const btnSound = document.querySelector("#btnSound")
const numCorrect = document.querySelector("#numCorrect")
const numMistakes = document.querySelector("#numMistakes")
const accuracy = document.querySelector("#accuracy")

let charAnswer = null
let sound = null


function main(){
    answerInput.focus()
    const aux = randomNumber(0,45)
    charDisplay.textContent = character[mode][aux].char
    charAnswer = character[mode][aux].romaji
    sound = character[mode][aux].soundId
    localStorage.setItem(`lastIndex${mode}`, aux.toString())
}

function scoreBoardDisplay(){
    const right = parseInt(localStorage.getItem(`right${mode}`))
    const wrong = parseInt(localStorage.getItem(`wrong${mode}`))
    numCorrect.textContent = right < 10 ? "0" + right : right
    numMistakes.textContent = wrong < 10 ? "0" + wrong : wrong
    accuracy.textContent = localStorage.getItem(`accuracy${mode}`) + "%"

}

function loadLastCharacter() {
    answerInput.focus()
    const savedIndex = localStorage.getItem(`lastIndex${mode}`)
    if (savedIndex !== null) {
        const index = parseInt(savedIndex)
        charDisplay.textContent = character[mode][index].char
        charAnswer = character[mode][index].romaji
        sound = character[mode][index].soundId
    } else {
        main()
    }
}


window.addEventListener("DOMContentLoaded", ()=>{
    if (localStorage.getItem(`right${mode}`) === null) {
        localStorage.setItem(`right${mode}`, "0")
    }

    if (localStorage.getItem(`wrong${mode}`) === null) {
        localStorage.setItem(`wrong${mode}`, "0")
    }
    scoreBoardDisplay()
    loadLastCharacter()
})

btnControl.addEventListener("click", ()=>{
    btnSound.classList.toggle("visible")
    btnControl.value = btnSound.classList.contains("visible") ? "Próximo" : "Confirmar"
    charAnswerDisplay.textContent = ""
   
    if(btnControl.value != "Confirmar"){
        if(answerInput.value.toLowerCase() == charAnswer.toLowerCase()){
            charAnswerDisplay.textContent = "Certo!"
            scoreBoard(1, mode)
        }else{
            charAnswerDisplay.textContent = `Errado! A respota era: ${charAnswer}`
            scoreBoard(-1, mode)
        }

        scoreBoardDisplay()
        localStorage.removeItem(`lastIndex${mode}`)
        answerInput.value = ""
    }

    if(btnControl.value === "Confirmar"){
        main()
    }
})


btnSound.addEventListener("click", ()=>{
    playSound(sound)
})


document.addEventListener("keydown",(e)=>{
    if (e.key === "Enter") {
        btnControl.focus()
    }
})