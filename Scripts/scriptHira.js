////var global: valores iniciais de vars importantes para o funcionamneto do script
let i = -2
numAleatorio = -1
const btnControl = document.getElementById('btnControl')
const btnSound = document.getElementById("btnSound")
btnSound.style.visibility = 'hidden'
let Sound
let Varacertos = 0
let Varerros = 0
let Varpercen = 0
answerInput.focus()





if (i == -2) {
    //essa parte do script serve para ter um momento para preencher a campo de texto e enviar no começo
    i++
}


//função que gera os números aleatórios
function randomNumberInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}



//função fundamental, a maior parte dos eventos ocorre aqui 
function roleta(hira) {



    if (i == 0) { //assim que i seguar ao 0 um novo número será gerado
        numAleatorio = randomNumberInterval(0, 45) //tem 46 hira logo vai ser 0,45
    }

    if (i == -1) {//essa parte funciona apenas uma vez
        if (hira == 'a') {
            charAnswer.textContent = 'Certo!'
            Varacertos++
        } else {
            charAnswer.textContent = 'Errado! A respota era: a'
            Varerros++
        }

        btnSound.style.visibility = 'visible'
        Sound = document.getElementById("aSound")
        btnControl.value = "Próximo"
        answerInput.value = ""
        i++
        Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
    }



    if (Math.sign(i) != -1) {

        //a partir do número aleatório gerado, um hiragana/katana aparecerar na tela junto de outros elementos. É aqui que a maior parte da dinâmica do script ocorre
        switch (numAleatorio) {
            case 0:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'あ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'a') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: a'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("aSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 1:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'い'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'i') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: i'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("iSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 2:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'う'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'u') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: u'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("uSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 3:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'え'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'e') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: e'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("eSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 4:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'お'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'o') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: o'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("oSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 5:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'か'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ka') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ka'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kaSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 6:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'き'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ki') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ki'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kiSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 7:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'く'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ku') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ku'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kuSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 8:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'け'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ke') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ke'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("keSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 9:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'こ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ko') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ko'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("koSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 10:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'さ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'sa') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: sa'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("saSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 11:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'し'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'shi') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: shi'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("shiSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 12:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'す'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'su') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: su'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("suSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 13:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'せ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'se') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: se'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("seSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 14:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'そ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'so') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: so'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("soSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 15:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'た'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ta') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ta'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("taSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 16:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ち'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'chi') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: chi'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("chiSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 17:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'つ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'tsu') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: tsu'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("tsuSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 18:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'て'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'te') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: te'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("teSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 19:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'と'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'to') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: to'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("toSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 20:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'な'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'na') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: na'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("naSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 21:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'に'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ni') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ni'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("niSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 22:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ぬ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'nu') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: nu'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nuSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 23:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ね'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ne') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ne'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("neSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 24:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'の'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'no') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: no'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("noSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 25:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'は'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ha') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ha'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("haSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 26:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ひ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'hi') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: hi'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hiSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 27:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ふ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'fu') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: fu'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("fuSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 28:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'へ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'he') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: he'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("heSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 29:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ほ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ho') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ho'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hoSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 30:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ま'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ma') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ma'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("maSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 31:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'み'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mi') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: mi'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("miSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 32:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'む'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mu') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: mu'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("muSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 33:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'め'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'me') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: me'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("meSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 34:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'も'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mo') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: mo'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("moSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 35:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'や'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ya') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ya'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yaSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 36:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ゆ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'yu') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: yu'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yuSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 37:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'よ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'yo') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: yo'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yoSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 38:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ら'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ra') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ra'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("raSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 39:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'り'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ri') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ri'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("riSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 40:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'る'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ru') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ru'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("ruSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 41:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'れ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 're') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: re'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("reSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 42:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ろ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ro') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ro'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("roSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 43:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'わ'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'wa') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: wa'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("waSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 44:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'を'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'wo') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: wo'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("woSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 45:
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = 'ん'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'n') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: n'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nSound")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;


            default://essa parte é só caso venha um número que não esteja entre 0 a 45, o que não vai acontecer
                btnSound.style.visibility = 'hidden'
                answerInput.value = ""
                charDisplay.textContent = '???'
                charAnswer.textContent = ''
                btnControl.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == '???') {
                        charAnswer.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        charAnswer.textContent = 'Errado! A respota era: ???'
                        Varerros++
                    }

                    btnSound.style.visibility = 'visible'
                    Sound = document.getElementById("erro")
                    btnControl.value = "Próximo"
                    answerInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case -1: //isso evita que o default venha no começo (afinal, ele não deve aparecer nunca!)
                break;
        }
    }
}


//função que toca o áudio da pronúncia
function playAudio() {

    Sound.play()
}


//essa função faz com que ao pressione Enter, o botão "Confirmar/Próximo" seja pressionado, funciona com celulares
document.addEventListener("keydown", function (btnDynamic) {

    if (btnDynamic.key === "Enter") {
        btnControl.focus()

    }
})



//função do botão "Confirmar/Próximo"
const btn = document.querySelector('#btnControl')

btn.addEventListener("click", function () {

    let hira = document.querySelector("#answerInput").value.toLowerCase()

    roleta(hira)

    answerInput.focus()


    acertos.textContent = (Varacertos < 10 ? '0' + Varacertos : Varacertos)
    erros.textContent = (Varerros < 10 ? '0' + Varerros : Varerros)
    percen.textContent = Varpercen + "%"
})