$(document).ready(function(){
  $('.rewiews__items').slick({
    autoplay: true, 
    dots: false,
    pauseOnDotsHover: true,
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });
});

$(document).ready(function(){
  $('.price__items').slick({
    responsive:[
        {
            breakpoint: 10000,
            settings: "unslick"
        },
        {
          breakpoint: 700,
          settings: {
            centerMode: true,
            centerPadding: '20px',  
            arrows: false,
            dots: true,
            infinite: false,
            initialSlide: 1
          }
    }]
  });
});

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
        navMain.classList.remove('main-nav--closed');
        navMain.classList.add('main-nav--opened');
    } else {
        navMain.classList.add('main-nav--closed');
        navMain.classList.remove('main-nav--opened');
    }
});
