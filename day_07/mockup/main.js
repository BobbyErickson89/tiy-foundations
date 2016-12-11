window.onload = function(){
  $('.size-text').hide();
  $('.rating-text').hide();
}

$('a').click(function(e){
  e.preventDefault();
});


function removeActiveClass(){
  $('.navigation ul li a').removeClass('active');
  $(this).addClass('active');
}

// Showing Size Tab
function showSizeText(){
  $('.size-text').show();
  $('.product-text').hide();
  $('.rating-text').hide();

  removeActiveClass()
}

$('.size-tab').click(showSizeText);


// Showing Product Tab
function showProductText(){
  $('.product-text').show();
  $('.size-text').hide();
  $('.rating-text').hide();

  removeActiveClass()
}

$('.product-tab').click(showProductText);

// Showing Rating Tab
function showRatingText(){
  $('.rating-text').show();
  $('.size-text').hide();
  $('.product-text').hide();

  removeActiveClass()
}

$('.rating-tab').click(showRatingText);
