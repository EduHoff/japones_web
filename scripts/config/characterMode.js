let selectedMode = ''

const pathname = window.location.pathname

if (pathname.includes("hiragana.html")) {
    selectedMode = "hiragana"
} else if (pathname.includes("katakana.html")) {
    selectedMode = "katakana"
} else {
    selectedMode = null
}

localStorage.setItem("characterMode", selectedMode)

export function getSelectedMode() {
    return selectedMode
}