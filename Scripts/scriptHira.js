////var global: valores iniciais de vars importantes para o funcionamneto do script
let i = -2
numAleatorio = -1
const ConfirmName = document.getElementById('Confirm')
const BtnSound = document.getElementById("BtnSound")
BtnSound.style.visibility = 'hidden'
let Sound
let Varacertos = 0
let Varerros = 0
let Varpercen = 0
hiraInput.focus()





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
            hiraRight.textContent = 'Certo!'
            Varacertos++
        } else {
            hiraRight.textContent = 'Errado! A respota era: a'
            Varerros++
        }

        BtnSound.style.visibility = 'visible'
        Sound = document.getElementById("aSound")
        ConfirmName.value = "Próximo"
        hiraInput.value = ""
        i++
        Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
    }



    if (Math.sign(i) != -1) {

        //a partir do número aleatório gerado, um hiragana/katana aparecerar na tela junto de outros elementos. É aqui que a maior parte da dinâmica do script ocorre
        switch (numAleatorio) {
            case 0:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'あ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'a') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: a'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("aSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 1:
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
                break;
            case 2:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'う'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'u') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: u'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("uSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 3:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'え'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'e') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: e'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("eSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 4:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'お'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'o') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: o'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("oSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 5:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'か'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ka') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ka'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kaSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 6:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'き'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ki') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ki'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kiSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 7:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'く'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ku') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ku'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kuSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 8:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'け'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ke') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ke'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("keSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 9:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'こ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ko') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ko'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("koSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 10:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'さ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'sa') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: sa'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("saSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 11:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'し'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'shi') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: shi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("shiSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 12:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'す'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'su') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: su'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("suSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 13:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'せ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'se') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: se'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("seSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 14:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'そ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'so') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: so'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("soSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 15:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'た'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ta') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ta'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("taSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 16:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ち'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'chi') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: chi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("chiSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 17:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'つ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'tsu') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: tsu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("tsuSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 18:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'て'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'te') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: te'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("teSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 19:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'と'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'to') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: to'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("toSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 20:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'な'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'na') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: na'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("naSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 21:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'に'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ni') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ni'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("niSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 22:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ぬ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'nu') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: nu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nuSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 23:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ね'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ne') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ne'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("neSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 24:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'の'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'no') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: no'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("noSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 25:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'は'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ha') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ha'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("haSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 26:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ひ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'hi') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: hi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hiSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 27:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ふ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'fu') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: fu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("fuSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 28:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'へ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'he') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: he'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("heSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 29:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ほ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ho') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ho'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hoSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 30:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ま'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ma') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ma'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("maSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 31:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'み'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mi') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: mi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("miSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 32:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'む'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mu') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: mu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("muSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 33:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'め'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'me') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: me'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("meSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 34:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'も'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'mo') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: mo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("moSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 35:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'や'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ya') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ya'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yaSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 36:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ゆ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'yu') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: yu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yuSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 37:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'よ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'yo') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: yo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yoSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 38:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ら'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ra') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ra'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("raSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 39:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'り'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ri') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ri'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("riSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 40:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'る'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ru') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ru'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("ruSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 41:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'れ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 're') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: re'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("reSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 42:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ろ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'ro') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ro'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("roSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 43:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'わ'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'wa') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: wa'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("waSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 44:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'を'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'wo') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: wo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("woSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 45:
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = 'ん'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == 'n') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: n'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nSound")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;


            default://essa parte é só caso venha um número que não esteja entre 0 a 45, o que não vai acontecer
                BtnSound.style.visibility = 'hidden'
                hiraInput.value = ""
                hiraDisplay.textContent = '???'
                hiraRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (hira == '???') {
                        hiraRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        hiraRight.textContent = 'Errado! A respota era: ???'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("erro")
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
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
        Confirm.focus()

    }
})



//função do botão "Confirmar/Próximo"
const btn = document.querySelector('#Confirm')

btn.addEventListener("click", function () {

    let hira = document.querySelector("#hiraInput").value.toLowerCase()

    roleta(hira)

    hiraInput.focus()


    acertos.textContent = (Varacertos < 10 ? '0' + Varacertos : Varacertos)
    erros.textContent = (Varerros < 10 ? '0' + Varerros : Varerros)
    percen.textContent = Varpercen + "%"
})