export function scoreBoard(point, mode) {
    if (point === 1) {
        const right = parseInt(localStorage.getItem(`right${mode}`) ?? "0") + 1;
        localStorage.setItem(`right${mode}`, right.toString());
    } else {
        const wrong = parseInt(localStorage.getItem(`wrong${mode}`) ?? "0") + 1;
        localStorage.setItem(`wrong${mode}`, wrong.toString());
    }

    const right = parseInt(localStorage.getItem(`right${mode}`) ?? "0");
    const wrong = parseInt(localStorage.getItem(`wrong${mode}`) ?? "0");

    const acc = right + wrong > 0 ? ((right / (right + wrong)) * 100).toFixed(2) : "0.00";
    localStorage.setItem(`accuracy${mode}`, acc);
}
