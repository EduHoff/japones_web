import { Character } from "./character.js";
import { getSelectedMode } from "./characterMode.js";
import { playSound } from './audioPlayer.js';
import { randomNumber } from "./randomNumber.js";

const character = new Character();
const mode = getSelectedMode();
const btnControl = document.querySelector("#btnControl");
const btnSound = document.querySelector("#btnSound")




// let teste =  character[mode][5].soundId //essa lógica está funcionando :D

btnControl.addEventListener("click", ()=>{
    alert(randomNumber(0,45))
})

btnSound.addEventListener("click", ()=>{
    alert("tocar áudio legal");
})





// alert(teste)

// playSound(character[mode][5].soundId);










































//apenas elaborando uma ideia para criar classes

function teste2(){
    btnSound.style.visibility = 'hidden' 
    answerInput.value = ""
    hiraDisplay.textContent = 'い'
    hiraRight.textContent = ''
    btnControl.value = "Confirmar"
i++
if (i == 2) {
if (hira == 'i') {
    hiraRight.textContent = 'Certo!'
    Varacertos++
} else {
    hiraRight.textContent = 'Errado! A respota era: i'
    Varerros++
}

btnSound.style.visibility = 'visible'
Sound = document.getElementById(character.katakana[3].soundId)
btnControl.value = "Próximo"
answerInput.value = ""

Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
}

}


btnSound.style.visibility = 'hidden'
answerInput.value = ""
hiraDisplay.textContent = 'い' //pronto!
hiraRight.textContent = ''
btnControl.value = "Confirmar"
i++
if (i == 2) {
if (hira == 'i') {
    hiraRight.textContent = 'Certo!'
    Varacertos++
} else {
    hiraRight.textContent = 'Errado! A respota era: i'
    Varerros++
}

btnSound.style.visibility = 'visible'
Sound = document.getElementById("iSound") //pronto!
btnControl.value = "Próximo"
answerInput.value = ""
i = 0
Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
}


//código principal vai ficar aqui e os outros códigos vão ser importados para aqui