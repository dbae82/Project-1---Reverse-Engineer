
/* Create Review Modal */
$('#create-btn').on('click', function (e) {
  $("#create-modal").addClass("is-active");
});

$('.modal-close').on('click', function (e) {
  $('#create-modal').removeClass('is-active');
});

$('.edit-btn').on('click', function (e) {
  $(`#${e.target.dataset.reviewid}`).toggleClass("is-active");
});

$('#new-cancel').on('click', function (e) {
  $('#create-modal').removeClass('is-active');
});

/* Edit Modal  */
$('#edit-cancel').on('click', function(e) {
  $(`#${e.target.dataset.reviewid}`).toggleClass('is-active');
});

/* Registration Modal */
$('#reg-btn').on('click', function (e) {
  $('#reg-modal').addClass('is-active');
});

$('#reg-close').on('click', function (e) {
  $('#reg-modal').removeClass('is-active');
});

$('#reg-cancel').on('click', function (e) {
  $('#reg-modal').removeClass('is-active');
});

/* Login Modal */
$('#log-btn').on('click', function (e) {
  $('#log-modal').addClass('is-active');
});

$('#log-close').on('click', function (e) {
  $('#log-modal').removeClass('is-active');
});

$('#log-cancel').on('click', function (e) {
  $('#log-modal').removeClass('is-active');
});

$('.navbar-burger').click(function () {
  $('.navbar-burger').toggleClass('is-active');
  //$('.navbar-menu').toggleClass('is-active');
});