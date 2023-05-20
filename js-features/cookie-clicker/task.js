let clicks = 1;

const cookie = document.querySelector('#cookie')
const clicker = document.querySelector('#clicker__counter')
const speed = document.querySelector('#clicker__speed')

 const start = Date.now();

 cookie.onclick = () => {
    clicker.textContent = clicks++;
    cookie.classList.toggle('clik_on');
    speed.textContent = 1 / (Date.now() - start);
    }

// Не смог найти как сделать минуты 

