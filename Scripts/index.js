let i = -2 //var global
numAleatorio = -1 //valor inicial para não acionar o evento

//codigo inicial que deve ser execultada uma vez

hiraTela.textContent = '???'
hiraResp.textContent = ''
const ConfirmName = document.getElementById('Confirm')



console.log("i-1: " + i)



if (i == -2) {
    //apenas para ter um momento para poder responder
    i++ 
    console.log("i-2: " + i)     
}

function randomNumberInterval(min, max) {//função que origia todos os números aleatorios

    return Math.floor(Math.random() * (max - min + 1) + min)

}



function roleta(hira) { //essa função é fundamnetal para tudo acontecer

    
    if (i == 0) { //assim que i seguar ao 0 um novo número será gerado
        console.log("i-4: " + i)
        numAleatorio = randomNumberInterval(0, 0)

        console.log('random ' + numAleatorio)
    }

    if (i == -1) {
        //mostra se sua respota estava certa ou não
        if (hira == '???') {
            hiraResp.textContent = 'acerto'
        } else {
            hiraResp.textContent = 'errou'
        }
        console.log("i-3: " + i)

        ConfirmName.value = "Próximo"
        i++
        hiraInput.value = ""         
    }

    


    if(Math.sign(i) != -1){ //para que essa função não seja execultada na primeira execulção do codigo

   
    switch (numAleatorio) {  //parte do codigo responsavel por criar a dinamica do jogo
        case 0:
            //alert('funciona')

            hiraInput.value = ""   
            hiraTela.textContent = 'あ'
            hiraResp.textContent = ''
            ConfirmName.value = "Confirmar"
            
            ++i
            console.log(i)

            if (i == 2) {


                if (hira == 'a') {
                    hiraResp.textContent = 'acerto'
                } else {
                    hiraResp.textContent = 'errou'
                }

                ConfirmName.value = "Próximo"            
                i = 0
                hiraInput.value = ""
            }

            break;

        default:
            break;
    }
}

}



//função do botão "Confirmar"

const btn = document.querySelector('#Confirm')

btn.addEventListener("click", function (e) {

    e.preventDefault();

    let hira = document.querySelector("#hiraInput").value.toLowerCase()
    


    roleta(hira)

    



})