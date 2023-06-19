// Мое решение 

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));

// Пр и нажатии добаляет клас и открываеться выбор
dropdownValue.onclick = () => {
    dropdownList.classList.toggle('dropdown__list_active')
}

// Так как перевели в масив идем по нему с по мощь данного метода и обращаемся к элементу
dropdownLink.forEach((element) => {
    element.addEventListener('click', (e) =>{
        // не дает перейти по ссылке 
        e.preventDefault();   
        dropdownValue.textContent = element.textContent;
        dropdownList.classList.remove('dropdown__list_active')
    });
});

//  Решение нетелогии (исправленое).

const dropDown = document.querySelector('.dropdown__value')
const dropList = document.querySelector('.dropdown__list')
const dropItem = Array.from(document.querySelectorAll('.dropdown__item'))

dropDown.onclick = () => {
    dropList.classList.toggle('dropdown__list_active')
};

for  (let i = 0; i < dropItem.length; i ++) {
    dropItem[i].onclick = () => { 
        dropList.classList.remove('dropdown__list_active');
        dropDown.textContent = dropItem[i].textContent;

        // не дает перейти по ссылке 
        if (dropItem[i].querySelector('.dropdown__link')) {
            return false;
        }
    };
}