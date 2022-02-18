
$(document).ready(function () {
  // Page scrolling function for the nav-links
  $(".nav-link").click(function () {
    $("html,body").animate({ scrollTop: $(this.hash).offset().top - 80 }, 1400);
    return false;
  });

  // Function to change the nav-bar on scroll
  $(window).scroll(function () {
    $(window).scrollTop() >= 110
      ? $(".nav-bar").addClass("scrolled")
      : $(".nav-bar").removeClass("scrolled");
  });

  // Setting the active nav-link based on the scroll position
  // There is a better way to do this but this way works so I'll fix it later



  $(window).scroll(function () {
    if (
      $(window).scrollTop() >=
      $("#contactSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#contactLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#priceSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#priceLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#servicesSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#servicesLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#teamSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#teamLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#portfolioSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#portfolioLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#aboutSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#aboutLink").addClass("active");
    } else if (
      $(window).scrollTop() >=
      $("#topSection").offset().top - $(window).height() / 2
    ) {
      $(".nav-link").removeClass("active");
      $("#topLink").addClass("active");
    }
  });
});

//**************************************************************
// var $circles = $('.circle'),
//     tl = new TimelineMax(),
//     random1 = getRandomNumber(),
//     // imgUrl1 = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/409269/valley.jpg?' + random1,
//     // image1 = $('<img>');

// function loaderOut() {
//   // console.log('Image is done loading.');
//   document.querySelector(".preloader").style.display="none";
// }

// // function getRandomNumber() {
// //   return Math.floor(Math.random() * 10000);
// // }

// image1.on('load', loaderOut);
// // image1.attr('src', imgUrl1);

// TweenMax.set($circles, {scale: 0});

// tl.insert(
//   TweenMax.staggerTo($circles.toArray(), 1, {
//     opacity: 1,
//     scale: 1,
//     ease: Power1.easeIn
//   }, 0.2)
// );

// tl.insert(
//   TweenMax.staggerTo($circles.toArray(), 0.5, {
//     scale: 1.2,
//     boxShadow: '0 25px 25px rgba(0, 0, 0, 0.4)',
//     repeat: -1,
//     yoyo: true,
//     ease: Power1.easeOut
//   }, 0.2), '-=0.4'
// );
//**************************************************************