const tab = document.querySelectorAll('.tab');
const tabContent = document.querySelectorAll('.tab__content');
const activeCategory = 0;

tab.forEach((el, idx) => {
    el.addEventListener('click', () => {
        tab.forEach(elem => {
            elem.classList.remove('tab_active')
        })
        tabContent.forEach(element => {
            element.classList.remove('tab__content_active')
        })
        activeCategory = idx;
        tab[activeCategory].classList.add('tab_active');
        tabContent[activeCategory].classList.add('tab__content_active');
    })
})

// const tab = document.querySelectorAll('.tab');
// const tabContent = document.querySelectorAll('.tab__content');

for (let i = 0; i <tab.length; i++){
    tab[i].addEventListener('click', () => {
        for(let j = 0; j <tab.length; j++) {
            tab[j].classList.remove('tab_active')
            tabContent[j].classList.remove('tab__content_active')
        }

        tab[i].classList.add('tab_active')
        tabContent[i].classList.add('tab__content_active')
    })
} 





