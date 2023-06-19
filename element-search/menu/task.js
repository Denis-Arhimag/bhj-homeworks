const menuSubs = document.querySelectorAll('.menu_sub');
const menuItem = document.querySelectorAll('.menu__item');
// const menuLinks = document.querySelectorAll('.menu__link');



menuItem.forEach(element => {
    element.addEventListener('click', (e) => {
        const menu_sub = e.target.nextSibling.nextSibling;
        if (menu_sub.classList.value === 'menu menu_sub') {
            e.preventDefault()
            menuSubs.forEach(element => element.classList.remove('menu_active'));
            menu_sub.classList.add('menu_active')
        };
    });
});

const body = document.querySelector("body");

const bodyCliksListener = (e)=> {
    console.log('cliked')
}
// body.addEventListener('click', bodyCliksListener);
body.addEventListener('click', (e)=> {
    console.log('cliked')
});