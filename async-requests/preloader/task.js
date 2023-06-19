const items = document.querySelector('#items');
const loader = document.querySelector('#loader');
const storage = window.localStorage;
const arrValue = [];
// const xhr = new XMLHttpRequest();

async function initStart () {
    const res = await fetch ('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
   
    if  (res.ok !== true) {
        console.log('error');
        return
    }

    const json = await res.json(); // тут мы ждем пока запрос распакуеться и преобразуеться
    // console.log(json)
    // return;

    
// заносит все валюты из респонса в arrValue
    const valueArr = json.response["Valute"];
        for (let key in valueArr) {
            arrValue.push(valueArr[key]);
            createItem(valueArr[key]); // добавляем новый элимент для каждой валюты
        }
        storage.setItem("Valute",JSON.stringify(arrValue)) // записываем в локал сторедж ввиде строки json по ключу валюты

    destroyLoader();

    // Создаем элемент 
    function createItem(el) {
        const item  = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
        <div class="item__code">${el.CharCode} </div>
        <div class="item__value">${el["Value"]}</div>
        <div class="item__currency">${"Руб"}.</div>
        `;
        items.appendChild(item);
    }

    // получаем данные из хранилища 
    function getItemsFromStorage () {
        const value = storage.getItem('Valute')

        if (value != null) {
            loader.classList.remove('loader_active');

            const valutes = JSON.parse(value);
            for (let item of valutes) {
                createItem(item);
            }
        }
    }

    // удаляем анимацию загрузки
    function destroyLoader() {
        for (let child of items.children) {
        items.removeChild(child);
        }
    }
    getItemsFromStorage ();
}

// Отправляем запрос https://basicweb.ru/javascript/js_xmlhttprequest_send.php
// function initStart () {
//     xhr.open("GET","https://students.netoservices.ru/nestjs-backend/slow-get-courses")
//     xhr.send();
//     xhr.
// // 
//     xhr.addEventListener ("readystatechange", () => {
//            if (xhr.readyState === xhr.DONE) {
//             destroyLoader();
//             const obj = JSON.parse(xhr.response);
//             const valueArr = obj.response["Valute"];
//             for (let key in valueArr) {
//                 arrValue.push(valueArr[key]);
//                 createItem(valueArr[key]);
//             }
//             storage.setItem("Valute",JSON.stringify(arrValue))
//            } 
//     }) 
// }
 


initStart ();
