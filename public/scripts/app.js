
const createReview= document.querySelector('#create-btn');
const createModal = document.querySelector('#create-modal');
const closeCreate = document.querySelector('#create-close');


createReview.addEventListener('click', function () {
    createModal.style.display = 'block'
});

window.addEventListener('click', function (event) {
    if (event.target.id === 'review-modal-background') {
    createModal.style.display = 'none'
}
}); 

closeCreate.addEventListener('click', function () {
    createModal.style.display = 'none'
});

/*
const editReview = document.querySelector('#edit-btn');
const editModal = document.querySelector('#edit-modal');
const closeEdit = document.querySelector('#edit-close');
*/

/*
editReview.addEventListener('click', function () {
     editModal.style.display = 'block'
});
*/

const editReview = document.querySelectorAll('#edit-btn');
const editModal = document.querySelector('#edit-modal');
const closeEdit = document.querySelector('#edit-close');
const editForm = document.querySelector('#edit-form');

/*
editReview.addEventListener('click', function () {
    editModal.style.display = 'block'
});
*/

editReview.forEach(function (btn) {
    btn.addEventListener('click', function () {
        editModal.style.display = 'block';
    });
 });

  
window.addEventListener('click', function (event) {
    if (event.target.id === 'edit-modal-background') {
    editModal.style.display = 'none'
    }
});


closeEdit.addEventListener('click', function () {
    editModal.style.display = 'none'
});


/*
const deleteModal = document.querySelector('#delete-modal');
const deleteReview = document.querySelector('#delete-btn');
const closeDelete = document.querySelector('#delete-close');

deleteReview.addEventListener('click', function () {
    deleteModal.style.display = 'block'
});

window.addEventListener('click', function (event) {
    if (event.target.id === 'delete-modal-background') {
    deleteModal.style.display = 'none'
}
}); 

closeDelete.addEventListener('click', function () {
    deleteModal.style.display = 'none'
});
*/