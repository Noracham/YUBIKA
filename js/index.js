$(function () {
  $(".op_menu").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".menu_screen").animate({ right: "0" }, "fast","linear");
    } else {
      $(".menu_screen").animate({ right: "-100vw" }, "fast","linear");
    }

  });
});
