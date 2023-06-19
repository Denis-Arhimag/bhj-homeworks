const resizeButtons = document.querySelectorAll('.font-size');
const book = document.querySelectorAll('.book');
let activeCategory = 0;

for (let resizeButton of resizeButtons) {
    resizeButton.addEventListener('click', function (event) {
        event.preventDefault();

        resizeButtons.forEach(button => button.classList.remove('font-size_active'));
        resizeButton.classList.add('font-size_active');

        if (this.dataset.size == 'big') {
            book.forEach(item => {
                item.classList.remove('book_fs-big');
                item.classList.add('book_fs-small');
            });
        } else if (this.dataset.size == 'small') {
            book.forEach(item => {
                item.classList.remove('book_fs-small');
                item.classList.add('book_fs-big');
            });
        } else {
            book.forEach(item => {
                item.classList.remove('book_fs-small');
                item.classList.remove('book_fs-big');
            });
        }
    });
};
