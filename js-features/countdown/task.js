const timer = document.querySelector('#timer');

const timerId = setInterval (() => {
    const valeu = +timer.textContent;
    if (valeu > 0) {
        timer.innerHTML = valeu -1;
    } else {
        clearInterval(timerId)
        alert('Вы победили в конкурсе');
    }
}, 1000);


// Не смог найти как всетаки сделать минуты 