$( document ).ready(function() {
    const $logBtn = $('.log');
    $logBtn.on('click', function(e) {
        e.preventDefault();
        window.location.href= "welcome.html";
    })
});