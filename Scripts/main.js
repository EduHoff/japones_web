import { Character } from "./character.js";
import { getSelectedMode } from "./characterMode.js";

const character = new Character();
const mode = getSelectedMode();
let teste =  character[mode][3].soundId









































//apenas elaborando uma ideia para criar classes

function teste2(){
    BtnSound.style.visibility = 'hidden'
    hiraInput.value = ""
    hiraDisplay.textContent = 'い'
    hiraRight.textContent = ''
    ConfirmName.value = "Confirmar"
i++
if (i == 2) {
if (hira == 'i') {
    hiraRight.textContent = 'Certo!'
    Varacertos++
} else {
    hiraRight.textContent = 'Errado! A respota era: i'
    Varerros++
}

BtnSound.style.visibility = 'visible'
Sound = document.getElementById(character.katakana[3].soundId)
ConfirmName.value = "Próximo"
hiraInput.value = ""

Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
}

}


BtnSound.style.visibility = 'hidden'
hiraInput.value = ""
hiraDisplay.textContent = 'い'
hiraRight.textContent = ''
ConfirmName.value = "Confirmar"
i++
if (i == 2) {
if (hira == 'i') {
    hiraRight.textContent = 'Certo!'
    Varacertos++
} else {
    hiraRight.textContent = 'Errado! A respota era: i'
    Varerros++
}

BtnSound.style.visibility = 'visible'
Sound = document.getElementById("iSound")
ConfirmName.value = "Próximo"
hiraInput.value = ""
i = 0
Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
}


//código principal vai ficar aqui e os outros códigos vão ser importados para aqui