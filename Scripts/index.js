
const btn = document.querySelector('#hiraConfirm')

btn.addEventListener("click", function(e){

    e.preventDefault();

    const hira = document.querySelector("#hiraInput")

    const hiraValor = hira.value

    

    console.log(hiraValor)

    hiraTela.textContent = hiraValor

    if(hiraValor == 'sim'){
        alert('funciona!')
    }

    
})