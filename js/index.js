$(function () {
  $(".op_menu").on("click", function () {
    $(this).toggleClass("active");

    if ($(this).hasClass("active")) {
      $(".menu_screen").animate({ right: "0" }, "fast","linear");
    } else {
      $(".menu_screen").animate({ right: "-100vw" }, "fast","linear");
    }

  });

  $(".Form-Item-Job").change(function(){
    const v = $("option:selected").val();
    console.log(v);
    if(v == "採用について"){   
        $("#job_list").css("display","flex");
    }else{
        $("#job_list").css("display","none");

    }
  })
});
