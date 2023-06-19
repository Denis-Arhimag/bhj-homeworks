
async function f1 () {
    const p = fetch ('https://students.netoservices.ru/nestjs-backend/poll');
    const res = await p;

    if  (res.ok !== true) {
        console.log('error');
        return
    }
    const p2 = res.json();
    const json = await p2;
    // console.log(res)

    const poll__title = document.getElementById('poll__title')
    poll__title.textContent = json.data.title;


    const poll__answers = document.querySelector('#poll__answers')
    // const b = document.createElement('button')
    // b.textContent = json.data.answers;
    // poll__answers.appendChild (b)

    for (let i = 0; i < json.data.answers.length; i ++) {
        // console.log(json.data.answers[i])
        const b = document.createElement('button')
        b.textContent = json.data.answers[i];
        poll__answers.appendChild (b)
        b.classList.add('poll__answer');

        const on = () => {
                alert('Спасибо, ваш голос засчитан!')
            } 

        b.onclick = on;
    }
}
f1()
