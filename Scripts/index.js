let i = 0 //var global


function randomNumberInterval(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min)

}



function roleta(hira) {

    if (i == 0) {
        numAleatorio = randomNumberInterval(0, 0)
    }

    console.log('random ' + numAleatorio)

    //parte do codigo responsavel por criar a dinamica do jogo
    switch (numAleatorio) {
        case 0:
            alert('funciona')

            hiraTela.textContent = 'あ'
            hiraResp.textContent = ''
            




            ++i
            console.log(i)




            if (i == 3) {


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

const btn = document.querySelector('#hiraConfirm')

btn.addEventListener("click", function (e) {

    e.preventDefault();

    let hira = document.querySelector("#hiraInput").value

    roleta(hira)


    console.log(hira)






})