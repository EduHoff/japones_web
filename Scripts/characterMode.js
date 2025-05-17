let selectedMode = '';

document.addEventListener('click', (event) => {
    const mode = event.target.dataset.mode;
    selectedMode = mode || '';
    localStorage.setItem('characterMode', selectedMode);
});

export function getSelectedMode() {
    return selectedMode;
}

