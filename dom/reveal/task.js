let elements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', checkElVisibility);

console.log(elements[0].getBoundingClientRect().topoffset);

function checkElVisibility() {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top <= 300 && el.getBoundingClientRect().top >= 50) {
            el.classList.add('reveal_active')
        } else {
            el.classList.remove('reveal_active')
        }
    })
}