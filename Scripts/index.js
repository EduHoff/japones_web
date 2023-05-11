let i = -2 //var global
numAleatorio = -1 //valor inicial para não acionar o evento

//codigo inicial que deve ser execultada uma vez

hiraTela.textContent = '???'
hiraResp.textContent = ''
const ConfirmName = document.getElementById('Confirm')
let Varacertos = 0
let Varerros = 0
let Varpercen = 0




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
            hiraResp.textContent = 'acerto'
            Varacertos++
            

        } else {
            hiraResp.textContent = 'errou'
            Varerros++
        }

        
        ConfirmName.value = "Próximo"
        hiraInput.value = ""
        i++
        Varpercen = (Varacertos/(Varacertos + Varerros)*100 ).toFixed(2)   
    }

    


    if(Math.sign(i) != -1){ //para que essa função não seja execultada na primeira execulção do codigo

   
    switch (numAleatorio) {  //parte do codigo responsavel por criar a dinamica do jogo
        case 0:
            //alert('funciona')

            hiraInput.value = ""   
            hiraTela.textContent = 'あ'
            hiraResp.textContent = ''
            ConfirmName.value = "Confirmar"
            i++


            if (i == 2) {


                if (hira == 'a') {
                    hiraResp.textContent = 'acerto'
                    Varacertos++
                    
                    
                } else {
                    hiraResp.textContent = 'errou'
                    Varerros++
                }

                ConfirmName.value = "Próximo"
                hiraInput.value = ""            
                i = 0
                Varpercen = (Varacertos/(Varacertos + Varerros)*100 ).toFixed(2)
                
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

    acertos.textContent = Varacertos
    erros.textContent = Varerros
    percen.textContent = Varpercen + "%"


    console.log("Acertos: " + Varacertos)
    console.log("Erros: " + Varerros)
    console.log("%: " + Varpercen)


    

    



})