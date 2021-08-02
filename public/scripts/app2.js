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