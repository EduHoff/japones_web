let i = -2 //var global
numAleatorio = -1 //valor inicial para não acionar o evento

//codigo inicial que deve ser execultada uma vez

hiraDisplay.textContent = '???'
hiraRight.textContent = ''
const ConfirmName = document.getElementById('Confirm')
let Varacertos = 0
let Varerros = 0
let Varpercen = 0
hiraInput.focus()




if (i == -2) {
    //apenas para ter um momento para poder responder
    i++
}

function randomNumberInterval(min, max) {//função que origia todos os números aleatorios

    return Math.floor(Math.random() * (max - min + 1) + min)

}



function roleta(hira) { //essa função é fundamnetal para tudo acontecer




    if (i == 0) { //assim que i seguar ao 0 um novo número será gerado
        numAleatorio = randomNumberInterval(0, 0)

    }

    if (i == -1) {
        //mostra se sua respota estava certa ou não
        if (hira == '???') {
            hiraRight.textContent = 'Certo!'
            Varacertos++
        } else {
            hiraRight.textContent = 'Errado! A respota era: ???'
            Varerros++
        }


        ConfirmName.value = "Próximo"
        hiraInput.value = ""
        i++
        Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
    }




    if (Math.sign(i) != -1) { //para que essa função não seja execultada na primeira execulção do codigo


        switch (numAleatorio) {  //parte do codigo responsavel por criar a dinamica do jogo
            case 0:
                //alert('funciona')

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
                    ConfirmName.value = "Próximo"
                    hiraInput.value = ""
                    i = 0
                    Varpercen = (Varacertos / (Varacertos + Varerros) * 100).toFixed(2)
                }
                break;
            case 1:

            //colocar os hiraganas padrão + modificados + junções
            
                break;

            default:
                break;
        }
    }



}

//ao escrever o formulario apenas pressione Enter para envialo
document.addEventListener("keydown", function(btnDynamic){

    if(btnDynamic.key === "Enter"){

        Confirm.focus()
        
    }
})



//função do botão "Confirmar"

const btn = document.querySelector('#Confirm')

btn.addEventListener("click", function (e) {

   

    let hira = document.querySelector("#hiraInput").value.toLowerCase()



    roleta(hira)

    hiraInput.focus()

//
    acertos.textContent = (Varacertos < 10 ? '0' + Varacertos : Varacertos)
    erros.textContent = (Varerros < 10 ? '0' + Varerros : Varerros)
    percen.textContent = Varpercen + "%"





})