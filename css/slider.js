$(document).ready(function () {
    $(".swiper-button-next").on("click", function () {
      $(".slider-title").removeClass("animate__fadeInLeft");
      $(".slider-sub").removeClass("animate__fadeInLeft");
      $(".btns").removeClass(
        "animate__fadeInLeft"
      );
      setTimeout(function () {
        $(".slider-title").addClass("animate__fadeInLeft");
        $(".slider-sub").addClass("animate__fadeInLeft");
        $(".btns").addClass(
          "animate__fadeInLeft"
        );
      }, 100);
    });
    $(".swiper-button-prev").on("click", function () {
      $(".slider-title").removeClass("animate__fadeInLeft");
      $(".slider-sub").removeClass("animate__fadeInLeft");
      $(".btns").removeClass(
        "animate__fadeInLeft"
      );
      setTimeout(function () {
        $(".slider-title").addClass("animate__fadeInLeft");
        $(".slider-sub").addClass("animate__fadeInLeft");
        $(".btns").addClass(
          "animate__fadeInLeft"
        );
      }, 100);
    });
  });
  