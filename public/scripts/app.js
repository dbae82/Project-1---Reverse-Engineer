
/* Create Review Modal */
$('#create-btn').on('click', function(e) {
    $("#create-modal").addClass("is-active");  
  });
  
$('.modal-close').on('click', function(e) {
    $('#create-modal').removeClass('is-active');
});

$('.edit-btn').on('click', function(e) {
    $(`#${e.target.dataset.reviewid}`).toggleClass("is-active");  
  });
  


/* Edit Review Modal */

/*

const editButton = $('#edit-btn');

editButton.forEach(function (btn){
    btn.click(function() {
        $('#edit-modal').toggleClass('is-active');  
  });
});
  
;



const editReview = document.querySelectorAll('#edit-btn');
const editModal = document.querySelector('#edit-modal');
const editForm = document.querySelector('#edit-form');



editReview.forEach(function (btn) {
    btn.addEventListener('click', function () {
        editModal.style.display = 'block';
    });
 });
 

$('.toggle-modal').on('click', (e) => {
    $(".modal").toggleClass("is-active");
  })
  editReview.addEventListener('click', function () {
    editModal.style.display = 'block'
});
*/

/* Registration Modal */
$('#reg-btn').on('click', function(e) {
  $('#reg-modal').addClass('is-active');
});

$('#reg-close').on('click', function(e) {
  $('#reg-modal').removeClass('is-active');
});

$('#reg-cancel').on('click', function(e) {
  $('#reg-modal').removeClass('is-active');
});

/* Login Modal */
$('#log-btn').on('click', function(e) {
  $('#log-modal').addClass('is-active');
});

$('#log-close').on('click', function(e) {
  $('#log-modal').removeClass('is-active');
});

$('#log-cancel').on('click', function(e) {
  $('#log-modal').removeClass('is-active');
});