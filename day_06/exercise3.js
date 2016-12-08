var button = $('.color-change');

function changeColor(){
  $('.box').css('background-color', 'red');
}

// these are the same thing
$('.color-change').click(changeColor);
// button.click(changeColor());

$('.color-change').hover(function(){
  $('.box').css('background-color', 'yellow');
});
