$(document).ready(function () {
    //Анимация search
    $(".search").click(function () {
      if ($(".search_form").is(":visible")) {
        $(".search_form").hide();
        $(".search").css("margin-left","584px");
      }
      else {
        $(".search_form").show();
        $(".search").css("margin-left","0");
      }
    });
    //-------------------------------------------------------
    // Фиксированное меню
    var $menu = $(".main_menu");

    $(window).scroll(function () {
      if ($(this).scrollTop() > 45 && $menu.hasClass("default")) {
        $menu.removeClass("default").addClass("fixed");
      }

      else if ($(this).scrollTop() <= 45 && $menu.hasClass("fixed")){
        $menu.removeClass("fixed").addClass("default");
      }
    });
    // -----------------------------------------------------
    // Индикаотры для разделов
    $("#btn1").focus(function () {
      $("#pforbtn1").css("background-color", "#57c5a0");
      $("#pspanforbtn1").css("color", "white");
      $("#pspanforbtn1 span").css("color","white");
    });
    $("#btn1").focusout(function () {
      $("#pforbtn1").css("background-color", "black");
      $("#pspanforbtn1").css("color", "#979797");
      $("#pspanforbtn1 span").css("color", "#616161");
    });
    $("#btn2").focus(function () {
      $("#pforbtn2").css("background-color", "#57c5a0");
      $("#pspanforbtn2").css("color", "white");
      $("#pspanforbtn2 span").css("color","white");
    });
    $("#btn2").focusout(function () {
      $("#pforbtn2").css("background-color", "black");
      $("#pspanforbtn2").css("color", "#979797");
      $("#pspanforbtn2 span").css("color", "#616161");
    });
    $("#btn3").focus(function () {
      $("#pforbtn3").css("background-color", "#57c5a0");
      $("#pspanforbtn3").css("color", "white");
      $("#pspanforbtn3 span").css("color","white");
    });
    $("#btn3").focusout(function () {
      $("#pforbtn3").css("background-color", "black");
      $("#pspanforbtn3").css("color", "#979797");
      $("#pspanforbtn3 span").css("color", "#616161");
    });
    $("#btn4").focus(function () {
      $("#pforbtn4").css("background-color", "#57c5a0");
      $("#pspanforbtn4").css("color", "white");
      $("#pspanforbtn4 span").css("color","white");
    });
    $("#btn4").focusout(function () {
      $("#pforbtn4").css("background-color", "black");
      $("#pspanforbtn4").css("color", "#979797");
      $("#pspanforbtn4 span").css("color", "#616161");
    });
    $("#btn5").focus(function () {
      $("#pforbtn5").css("background-color", "#57c5a0");
      $("#pspanforbtn5").css("color", "white");
      $("#pspanforbtn5 span").css("color","white");
    });
    $("#btn5").focusout(function () {
      $("#pforbtn5").css("background-color", "black");
      $("#pspanforbtn5").css("color", "#979797");
      $("#pspanforbtn5 span").css("color", "#616161");
    });
    // -------------------------------------------------------
    // Ссылки у продуктов
    $(".name_of_bestseller_first").click (function (){
      if ($(".firstBS").is(":visible")){
        $(".firstBS").hide();
        $(".nav_for_firstBS").show(function () {
          $(".nav_for_firstBS").css("display", "flex")
        });
      }
      else {
        $(".firstBS").show();
        $(".nav_for_firstBS").hide();
      }
    });

    $(".name_of_newarrival_first").click (function (){
      if ($(".firstNA").is(":visible")){
        $(".firstNA").hide();
        $(".nav_for_firstNA").show(function () {
          $(".nav_for_firstNA").css("display", "flex")
        });
      }
      else {
        $(".firstNA").show();
        $(".nav_for_firstNA").hide();
      }
    });
    // ---------------------------------------------------------
});
