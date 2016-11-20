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
