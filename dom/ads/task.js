const rotatorCase = document.querySelectorAll('.rotator__case');
let activeIndex = 0;

setInterval(() => {
    activeIndex += 1;
    rotatorCase.forEach(el => {
        el.classList.remove('rotator__case_active') 
    })

    if(activeIndex === rotatorCase.length - 1) {
        activeIndex = 0
    }

    rotatorCase[activeIndex].classList.add('rotator__case_active');
}, 1000)