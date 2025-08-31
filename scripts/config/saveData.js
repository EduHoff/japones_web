const btnImport = document.querySelector("#btnImport")
const btnExport = document.querySelector("#btnExport")

const allowedKeys = [
    "accuracyhiragana", 
    "accuracykatakana",
    "lastIndexhiragana", 
    "lastIndexkatakana",
    "righthiragana", 
    "rightkatakana",
    "wronghiragana", 
    "wrongkatakana",
    "category",
    "theme"
]


btnImport.addEventListener("click", (e)=>{    
    let input = document.createElement('input')
    input.type = 'file'
    input.accept = ".json"
    input.click()

    input.addEventListener("change", () => {
        const file = input.files[0]
        if (!file) return

        const reader = new FileReader()
        reader.onload = (e) => {
            try {
                const data = JSON.parse(e.target.result)
                console.log("Arquivo importado:", data)
                alert("Importação bem sucedida!")

                allowedKeys.forEach(key => {
                    if (key in data) {
                        localStorage.setItem(key, data[key])
                    }
                })

            } catch (ex) {
                alert("Erro ao importar: " + ex.message)
            }
        }
        reader.readAsText(file)
    })
    
})


btnExport.addEventListener("click", ()=>{
    
    const data = {}
    allowedKeys.forEach(key => {
    data[key] = localStorage.getItem(key)
    })

    const jsonStr = JSON.stringify(data, null, 2)

    const blob = new Blob([jsonStr], { type: "application/json" })
    const url = URL.createObjectURL(blob)

    const a = document.createElement("a")
    a.href = url
    a.download = "save.json"
    a.click()

    URL.revokeObjectURL(url)
})