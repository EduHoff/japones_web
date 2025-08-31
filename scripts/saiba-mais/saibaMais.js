const btnTutorial = document.querySelector("#btnTutorial")
const imgTutorialContainer = document.querySelector("#imgTutorialContainer")

btnTutorial.addEventListener("click", () => {   
    imgTutorialContainer.style.display = imgTutorialContainer.style.display === "block" ? "none" : "block"
    btnTutorial.value = imgTutorialContainer.style.display === "block" ? "Esconder" : "Mostrar"
})