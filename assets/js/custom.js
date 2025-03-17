

$('.testimonial-wrap').slick({
  infinite: true,
  dots: true,
  arrows: false,
});



AOS.init({
  duration: 1200,
  once: true
});

$(document).ready(function () { 
  $(".toggle").click(function () {
    $("header").addClass("menuToggle");
  });
  $(".close").click(function () {
    $("header").removeClass("menuToggle");
  });

});
