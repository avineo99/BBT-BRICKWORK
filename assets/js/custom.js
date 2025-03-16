

$('.testimonial-wrap').slick({
  infinite: true,
  dots: true,
  arrows: false,
});

$(".toggle").click(function () {
    $("header").addClass("menuToggle");
});
$(".close, .close_overlay").click(function () {
  $("header").removeClass("menuToggle");
});

AOS.init({
  duration: 1200,
  once: true
});



$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});