window.addEventListener("change", () => {
    
    //CATEGORY
    const chkCategory = document.querySelectorAll('.chkCategory')
    const dados_category = Array.from(chkCategory)
        .filter(chk =>  chk.checked)    
        .map(chk => Number(chk.value))         

    let category=0
    dados_category.map((e)=>{
        category += e
    })

    localStorage.setItem("category", category.toString())


    //THEME
    const rbTheme = document.querySelector('.rbTheme:checked').value
    localStorage.setItem("theme", rbTheme.toString())


    location.reload();   
})

window.addEventListener("DOMContentLoaded", () => {

    const chkRegular = document.querySelector('#chkRegular')
    const chkModification = document.querySelector('#chkModification')
    const chkConjunction = document.querySelector('#chkConjunction')

    const rbThemeLight = document.querySelector('#rbThemeLight')
    const rbThemeDark = document.querySelector('#rbThemeDark')


    //CATEGORY
    switch(Number(localStorage.getItem("category"))){
        case 1:
            chkRegular.checked = true
            break      
        case 2:
            chkModification.checked = true
            break
        case 4:
            chkConjunction.checked = true
            break
        case 3:
            chkRegular.checked = true
            chkModification.checked = true
            break
        case 5:
            chkRegular.checked = true
            chkConjunction.checked = true
            break
        case 6:
            chkModification.checked = true
            chkConjunction.checked = true
            break
        case 7:
            chkRegular.checked = true
            chkModification.checked = true
            chkConjunction.checked = true
            break
        default:
            localStorage.setItem("category", "1")
            chkRegular.checked = true
            break
        
    }


    //THEME
    switch(Number(localStorage.getItem("theme"))){
        case 0:
            rbThemeLight.checked = true
            break      
        case 1:
            rbThemeDark.checked = true
            break
        default:
            localStorage.setItem("theme", "0")
            rbThemeLight.checked = true
            break

    }
})