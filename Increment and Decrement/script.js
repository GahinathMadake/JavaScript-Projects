let buttons = document.getElementsByTagName('input');

buttons[0].addEventListener('click', function(){
    buttons[1].value = parseInt(buttons[1].value) - 1;
});

buttons[2].addEventListener('click', function(){
    buttons[1].value = parseInt(buttons[1].value) + 1;
});