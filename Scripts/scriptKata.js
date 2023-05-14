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
kataInput.focus()





if (i == -2) {
    //essa parte do script serve para ter um momento para preencher a campo de texto e enviar no começo
    i++
}


//função que gera os números aleatórios
function randomNumberInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}



//função fundamental, a maior parte dos eventos ocorre aqui 
function roleta(kata) {



    if (i == 0) { //assim que i seguar ao 0 um novo número será gerado
        numAleatorio = randomNumberInterval(0, 45) //tem 46 kata logo vai ser 0,45
    }

    if (i == -1) {//essa parte funciona apenas uma vez
        if (kata == 'a') {
            kataRight.textContent = 'Certo!'
            Varacertos++
        } else {
            kataRight.textContent = 'Errado! A respota era: a'
            Varerros++
        }

        BtnSound.style.visibility = 'visible'
        Sound = document.getElementById("aSound")
        ConfirmName.value = "Próximo"
        kataInput.value = ""
        i++
        Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
    }



    if (Math.sign(i) != -1) {

        //a partir do número aleatório gerado, um hiragana/katana aparecerar na tela junto de outros elementos. É aqui que a maior parte da dinâmica do script ocorre
        switch (numAleatorio) {
            case 0:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ア'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'a') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: a'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("aSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 1:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'イ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'i') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: i'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("iSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 2:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ウ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'u') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: u'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("uSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 3:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'エ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'e') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: e'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("eSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 4:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'オ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'o') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: o'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("oSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 5:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'カ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ka') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ka'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kaSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 6:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'キ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ki') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ki'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kiSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 7:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ク'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ku') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ku'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("kuSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 8:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ケ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ke') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ke'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("keSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 9:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'コ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ko') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ko'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("koSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 10:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'サ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'sa') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: sa'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("saSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 11:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'シ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'shi') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: shi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("shiSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 12:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ス'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'su') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: su'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("suSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 13:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'セ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'se') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: se'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("seSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 14:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ソ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'so') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: so'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("soSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 15:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'タ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ta') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ta'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("taSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 16:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'チ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'chi') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: chi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("chiSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 17:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ツ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'tsu') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: tsu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("tsuSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 18:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'テ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'te') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: te'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("teSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 19:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ト'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'to') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: to'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("toSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 20:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ナ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'na') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: na'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("naSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 21:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ニ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ni') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ni'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("niSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 22:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヌ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'nu') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: nu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nuSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 23:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ネ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ne') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ne'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("neSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 24:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ノ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'no') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: no'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("noSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 25:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ハ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ha') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ha'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("haSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 26:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヒ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'hi') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: hi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hiSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 27:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'フ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'fu') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: fu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("fuSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 28:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヘ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'he') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: he'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("heSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 29:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ホ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ho') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ho'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("hoSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 30:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'マ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ma') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ma'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("maSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 31:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ミ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'mi') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: mi'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("miSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 32:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ム'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'mu') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: mu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("muSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 33:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'メ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'me') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: me'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("meSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 34:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'モ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'mo') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: mo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("moSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 35:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヤ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ya') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ya'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yaSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 36:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ユ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'yu') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: yu'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yuSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 37:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヨ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'yo') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: yo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("yoSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 38:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ラ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ra') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ra'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("raSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 39:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'リ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ri') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ri'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("riSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 40:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ル'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ru') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ru'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("ruSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 41:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'レ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 're') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: re'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("reSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 42:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ロ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'ro') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ro'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("roSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 43:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ワ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'wa') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: wa'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("waSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 44:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ヲ'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'wo') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: wo'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("woSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 45:
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = 'ン'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == 'n') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: n'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("nSound")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;


            default://essa parte é só caso venha um número que não esteja entre 0 a 45, o que não vai acontecer
                BtnSound.style.visibility = 'hidden'
                kataInput.value = ""
                kataDisplay.textContent = '???'
                kataRight.textContent = ''
                ConfirmName.value = "Confirmar"
                i++
                if (i == 2) {
                    if (kata == '???') {
                        kataRight.textContent = 'Certo!'
                        Varacertos++
                    } else {
                        kataRight.textContent = 'Errado! A respota era: ???'
                        Varerros++
                    }

                    BtnSound.style.visibility = 'visible'
                    Sound = document.getElementById("erro")
                    ConfirmName.value = "Próximo"
                    kataInput.value = ""
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

    let kata = document.querySelector("#kataInput").value.toLowerCase()

    roleta(kata)

    kataInput.focus()


    acertos.textContent = (Varacertos < 10 ? '0' + Varacertos : Varacertos)
    erros.textContent = (Varerros < 10 ? '0' + Varerros : Varerros)
    percen.textContent = Varpercen + "%"
})