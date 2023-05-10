let i = -2 //var global
numAleatorio = -1 //valor inicial para não acionar o evento

//codigo inicial que deve ser execultada uma vez

hiraTela.textContent = '???'
hiraResp.textContent = ''


console.log("i-1: " + i)



if (i == -2) {
    //apenas para ter um momento para poder responder
    i++ 
    console.log("i-2: " + i)     
}

function randomNumberInterval(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)

}



function roleta(hira) {

    if (i == 0) {
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
        
        i++
        hiraInput.value = ""         
    }

    


    if(Math.sign(i) != -1){ //para que essa função não seja execultada na primeira execulção do codigo

   
    switch (numAleatorio) {  //parte do codigo responsavel por criar a dinamica do jogo
        case 0:
            //alert('funciona')

            hiraTela.textContent = 'あ'
            hiraResp.textContent = ''
            
            ++i
            console.log(i)

            if (i == 2) {


                if (hira == 'a') {
                    hiraResp.textContent = 'acerto'
                } else {
                    hiraResp.textContent = 'errou'
                }
             
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

const btn = document.querySelector('#hiraConfirm')

btn.addEventListener("click", function (e) {

    e.preventDefault();

    let hira = document.querySelector("#hiraInput").value

    roleta(hira)


    console.log(hira)

})