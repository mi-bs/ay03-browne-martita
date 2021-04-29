$(document).ready(function(){
    var frutas = $(".div2");

    frutas.mouseenter(function(){
        $(this).css("color", "red");
    });

    frutas.mouseleave(function(){
        $(this).css("color", "black");
    });

    $(".boton1").click(function(){
      $(".div2").hide();
    });

    $(".boton2").click(function(){
      $(".div2").show();
    });

    $("#boton3").click(function(){
      $("#s1").css({"color":"rgb(134, 168, 74)","text-shadow": "0px 2px 0px darkslategray"})
    });
});