const checkboxes = document.querySelectorAll('.chkCategory');

window.addEventListener("change", () => {
    //CATEGORY
    const dados_category = Array.from(checkboxes)
        .filter(chk =>  chk.checked)    
        .map(chk => Number(chk.value))         

    let category=0
    dados_category.map((e)=>{
        category += e
    })

    localStorage.setItem("category", category.toString())
})

window.addEventListener("DOMContentLoaded", () => {
    const chkRegular = document.querySelector('#chkRegular')
    const chkModification = document.querySelector('#chkModification')
    const chkConjunction = document.querySelector('#chkConjunction')


    //CATEGORY
    switch(Number(localStorage.getItem("category"))){
        case 1:
            chkRegular.setAttribute('checked', 'true')
            break      
        case 2:
            chkModification.setAttribute('checked', 'true')
            break
        case 4:
            chkConjunction.setAttribute('checked', 'true')
            break
        case 3:
            chkRegular.setAttribute('checked', 'true')
            chkModification.setAttribute('checked', 'true')
            break
        case 5:
            chkRegular.setAttribute('checked', 'true')
            chkConjunction.setAttribute('checked', 'true')
            break
        case 6:
            chkModification.setAttribute('checked', 'true')
            chkConjunction.setAttribute('checked', 'true')
            break
        case 7:
            chkRegular.setAttribute('checked', 'true')
            chkModification.setAttribute('checked', 'true')
            chkConjunction.setAttribute('checked', 'true')
            break
        default:
            chkRegular.setAttribute('checked', 'true')
            break
        
    }

})