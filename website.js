// Pinspiration
// https://www.pinterest.com/pin/271201208788842829/

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

  // $(window).scroll(function () {
  //   $(window).scrollTop() >= 110
  //     ? $(".under-top-section").addClass("TS_scrolled")
  //     : $(".under-top-section").removeClass("TS_scrolled");
  // });

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



    // const cursor = document.querySelector(".cursor");
    // var timeout;

    // //follow cursor on mousemove
    // document.addEventListener("mousemove", (e) => {
    //   let x = e.pageX;
    //   let y = e.pageY;

    //   cursor.style.top = y + "px";
    //   cursor.style.left = x + "px";
    //   cursor.style.display = "block";

    //   //cursor effects when mouse stopped
    //   function mouseStopped(){
    //     cursor.style.display = "none";
    //   }
    //   clearTimeout(timeout);
    //   timeout = setTimeout(mouseStopped, 1000);
    // });

    // //cursor effects when mouseout
    // document.addEventListener("mouseout", () => {
    //   cursor.style.display = "none";
    // });
