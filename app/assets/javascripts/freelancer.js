$(document).ready(function() {
  $(window).scroll(function(){
      if ($(this).scrollTop() > 300){
          $('.navbar-fixed-top').addClass('shrink');
      }
      else{
          $('.navbar-fixed-top').removeClass('shrink');
      }
  });
});

// working but need fix css
//
// $(window).scroll(function() {
//   if ($(document).scrollTop() > 50) {
//     $('nav').addClass('shrink');
//   } else {
//     $('nav').removeClass('shrink');
//   }
// });
// navbar navbar-default navbar-fixed-top
