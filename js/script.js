$( document ).ready(function() {
    const $nameInput = $('.nameInput');
    const $pswInput = $('.pswInput');
    
    $nameInput.on('keypress', function() {
        console.log($nameInput.val())
    })

    const $logBtn = $('.log');
    $logBtn.on('click', function(e) {
        e.preventDefault();
        if($nameInput.val().length >= 3 && $pswInput.val().length >= 3) {
            window.location.href= "welcome.html";
        }else {
            if($nameInput.val().length < 3 && $pswInput.val().length < 3) {
                $nameInput.attr('placeholder', 'Proszę podać nazwę użytkownika');
                $pswInput.attr('placeholder', 'Proszę podać hasło');
            }else if($nameInput.val().length >= 3 && $pswInput.val().length < 3) {
                $pswInput.attr('placeholder', 'Proszę podać hasło');
            }else {
                $nameInput.attr('placeholder', 'Proszę podać nazwę użytkownika');
            }
        }
    })
});