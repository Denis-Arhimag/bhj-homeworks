const chat_widget = document.querySelector('.chat-widget');
const chat_widget__input = chat_widget.querySelector('.chat-widget__input');
const chat_widget__messages = chat_widget.querySelector('.chat-widget__messages');
const chat_widget__messages_container = chat_widget.querySelector('.chat-widget__messages-container');

let timeOut = null;

// создаем масив из того что нам будет отвечать бот

const botMessageList = [
    "Добрый день",
    "Здравствуйте",
    "че как парнишка",
    "Давай до свидание",
];

// ////////?????????
function getTimeNow () {
    const time = new Date(Date.now());
    return `${time.getHours()}:${time.getMinutes()}`;
}

// Сообщение от пользователя    
function createUserMessage (message) {
    const time = getTimeNow();
    return `
    <div class="message message_client">
    <div class="message__time">${time}</div>
    <div class="message__text">${message}</div>
    </div>
    `
}

function createBotMessage (message) {
    const time = getTimeNow();
    return ` 
    <div class="message">
    <div class="message__time">${time}</div>
    <div class="message__text">${message}</div>
    </div>
    `
}

// Функция которая принимает в себя масиив с botMessageList и возвращает рандомное значение 
// путем того что мы используем метод Math.floor (округление до целых в минус) и Math.random()(рандомное число)
// умножая все это на длину массива. Важно делать все эти приобразования и подсчеты в масиве []
function getRandomBotMessage (botMessageList) {
    return botMessageList[Math.floor(Math.random() * botMessageList.length)]
};

chat_widget.addEventListener ('click', () => {
    chat_widget.classList.add('chat-widget_active');     
});

// Эскейп если надо выйти
chat_widget.addEventListener('keydown', (event) => {
    if (event.keyCode === 27) {
        chat_widget.classList.remove('chat-widget_active');
    }
});

// проверяет нажатие энтера
chat_widget.addEventListener ('keydown', event => {
    if (event.code !== 'Enter') {
        return;
    } 
    
    if (chat_widget__input.value.length === 0 ){
        return;
    } 

    chat_widget__messages.innerHTML += createUserMessage(chat_widget__input.value);
    chat_widget__messages.innerHTML += createBotMessage(getRandomBotMessage(botMessageList));

    chat_widget__input.value = "";
    chat_widget__messages_container.scrollTop = chat_widget__messages_container.scrollHeight;
});

chat_widget__input.addEventListener('focus', () => {
    timeOut = setTimeout(() => {
        chat_widget__messages.innerHTML += createBotMessage('Есть вопрос ?')
    }, 30000)
});

chat_widget__input.addEventListener('blur', () => {
    clearTimeout(timeOut)
});