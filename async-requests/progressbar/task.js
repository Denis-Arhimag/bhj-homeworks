// function progresBar () { 
    const progBar = document.getElementById("progress"); // обращаемся к тегу progres
    
    const xhr = new XMLHttpRequest(); // создаем запрос 
    xhr.upload.addEventListener('progress' , (e) => { // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/progress_event
        progBar.value = e.loaded / e.total; // делим текщее количество байт на общее
    })

    const form = document.getElementById("form"); // так же можно обатиться как document.forms.form

    form.addEventListener('submit', (e) => { 
        e.preventDefault(); // не даем загружаться 
        let newForm = new FormData(form);  //https://learn.javascript.ru/formdata
        xhr.open("POST","https://students.netoservices.ru/nestjs-backend/upload");
        xhr.send(newForm);
        xhr.addEventListener('readystatechange', () => {
            if (xhr.readyState === xhr.DONE) { //  https://udn.realityripple.com/docs/Web/API/Document/readystatechange_event
                // progBar.value = 0.1; // возвращаем 
            }
        })
    });
// }
