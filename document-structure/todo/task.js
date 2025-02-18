const input = document.getElementById('task__input');
const button = document.getElementById('tasks__add');
const tasksList = document.getElementById('tasks__list');

// Функция для сохранения задач в Локал Сторедж
function saveTasks () {
    const tasks = tasksList.querySelectorAll('.task__title');
    const taskTitles = Array.from(tasks).map(task => task.innerText);
    localStorage.setItem('tasks', JSON.stringify(taskTitles));
}

// Функция для загрузки сохраненых задач из локал сторедж
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        const taskTitles = JSON.parse(savedTasks);
        taskTitles.forEach(title => {
            const task = createTaskElement(title)
            tasksList.appendChild(task)
        });
    }
}

// Функция для создания элемента задачи
function createTaskElement (title) {
    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML = `
    <div class="task__title">
        ${title}
    </div>
    <a href="#" class="task__remove">&times;</a>
    `;

    const removeBtn = task.querySelector('.task__remove');
    removeBtn.addEventListener('click', (e) => {
        e.target.closest('.task').remove();
        saveTasks(); //обнавляем созранения после удаления 
    });
    return task;
} 

// Загрузка сохраненых задачь при закгрузке страницы
document.addEventListener('DOMContentLoaded', loadTasks);

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value.trim().length > 0) {
        const task = createTaskElement(input.value);
        tasksList.appendChild(task);
        saveTasks(); // сохраняем задачу при добавлении
        input.value = ''; 
    } else {
        console.log('Поле с задачей долюно быть заполнено')
    }
});