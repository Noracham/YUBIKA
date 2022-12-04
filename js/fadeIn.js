$(function () {
  //loading
  $(window).on("load", function () {
    setInterval(() => {
        $("#loading").addClass("loaded");
        $(".hide").css("display", "block");
      }, 3000);
  });

});
