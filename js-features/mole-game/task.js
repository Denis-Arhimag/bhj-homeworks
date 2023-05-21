//Обратимся к HTML
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

// В них запишем количество успешных и не успехных попаданий 
let counterDead = 0;
let counterMiss = 0;

// выбор hole (такая же механика как в базовом файле)
getHole = index => document.getElementById(`hole${index}`);
    for ( i = 1; i < 10; i++ ) {
    let hole = getHole(i);

// запускаем функцию которая проверяет наличие класса hole_has-mole
// если мы кликаем в нужную плюсует необходимую переменную.       
    hole.addEventListener( 'click', function() { 
        if ( hole.classList.contains( 'hole_has-mole')){
            counterDead++;
            dead.textContent = counterDead;
        } else {
            counterMiss++;
            lost.textContent = counterMiss;
        }
 
    if (counterDead === 10) {
            alert ('You won');
            counterDead = 0;
            counterMiss = 0;
            dead.textContent = counterDead;
            lost.textContent = counterMiss;
    } else if (counterLost === 5){
            alert ('You lose');
            counterDead = 0;
            counterMiss = 0;
            dead.textContent = counterDead;
            lost.textContent = counterMiss;
        }
    });
 
}




// Необходимо дописать игру, убивающую кротов при клике на них. 
// В случайной лунке появляется крот. При нажатии на него, 
// игроку засчитывается +1 за нажатие. 
// Игрок побеждает, если своевременно убивает 10 кротов. 
// При 5 поражениях игра заканчивается.

