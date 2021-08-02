
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
  



