const modal = document.querySelector('.modal');

const createReview= document.querySelector('#review-btn')

const close = document.querySelector('.modal-close')

createReview.addEventListener('click', function () {
    modal.style.display = 'block'
});

close.addEventListener('click', function () {
    modal.style.display = 'none'
});

window.addEventListener('click', function (event) {
    if (event.target.className === 'modal-background') {
    modal.style.display = 'none'
}
}); 

editReview.addEventListener('click', function () {
    modal.style.display = 'block'
});