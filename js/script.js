$( document ).ready(function() {
    const $nameInput = $('.nameInput');
    const $pswInput = $('.pswInput');
    const $nameGroup = $('.nameGroup');
    const $pswGroup = $('.pswGroup');
    const $loginPar = $('<p>Login musi składać się z minimum 3 znaków</p>');
    const $pswPar = $('<p>Hasło musi składać się z minimum 3 znaków</p>');
    
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
                $nameGroup.append($loginPar);
                $pswGroup.append($pswPar);
            }else if($nameInput.val().length >= 3 && $pswInput.val().length < 3) {
                $pswInput.attr('placeholder', 'Proszę podać hasło');
                $nameGroup.find('p').remove();

            }else if($pswInput.val().length >= 3 && $nameInput.val().length < 3) {
                $nameInput.attr('placeholder', 'Proszę podać nazwę użytkownika');
                $pswGroup.find('p').remove();
            }
        }
    })
});