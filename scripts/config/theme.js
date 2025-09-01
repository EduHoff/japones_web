window.addEventListener("DOMContentLoaded", () => {

    const themes = ["darkTheme"]; 
    themes.forEach(t => document.body.classList.remove(t));

    
    switch(Number(localStorage.getItem("theme"))){
        case 1:
            document.body.classList.add("darkTheme")
            break
    }



})