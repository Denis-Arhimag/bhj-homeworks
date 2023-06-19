function updateBlocks () {
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome')
    const userSpan = document.getElementById('user_id')

    const userId = localStorage.getItem('user_id')
    if (userId) { // если есть информация показываем блок приветствия 
        signin.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        userSpan.textContent = userId;
    } else { // если информации в локале нет, то показываем блок авторизации
        signin.classList.add('signin_active');
        welcome.classList.remove('welcome_active')
    }
}

function submitForm(e) {
    e.preventDefault();

    const form = document.getElementById('signin__form');
    const loginInput = form.querySelector('input[name="login"]'); //так можно обратиться к элименту 
    const passwordInput = form.querySelector('input[name="password"]') //так можно обратиться к элименту

    //получаем данные из полей формы 
    const login = loginInput.value;
    const password = passwordInput.value;

    // отправляем запрос 
    fetch (form.action, {
        method: 'POST',
        body: JSON.stringify({ login, password}),
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) { // если авторизация успешно сохраняем эдентификатор пользователя 
            const userId = data.user_id;
            localStorage.setItem('user_id', userId);

            updateBlocks(); //обнавляем состояние блоков 
        } else {
            alert('Неверный логин/пароль');
        }
    })
    .catch(error => {
        console.error('Ошибка при авторизации:', error);
        alert('Произошла ошибка при авторизации')
    });

    // отчищаем поля формы 
    form.reset();
}

//обработчик события отправки формы 
const singinForm = document.getElementById('signin__form');
singinForm.addEventListener('submit', submitForm);

// обнавляем состояние блоков 
window.addEventListener('load', updateBlocks);

// функция для обработки события деавторизации 
function logout() {
    //удаляем идентефикатор позьзователя из локального хранилища 
    localStorage.removeItem('user_id');

    //обнавляем состояние блоков 
    updateBlocks();
}

// обрабтчик события для кнопки деавторзации 
const logoutButton = document.getElementById('logout')
logoutButton.addEventListener('click', logout);






