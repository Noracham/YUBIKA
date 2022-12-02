$(function () {
  $(".op_menu").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".menu_screen").animate({ right: "0" }, 500);
    } else {
      $(".menu_screen").animate({ right: "-100vw" }, 500);
    }
  });
});
