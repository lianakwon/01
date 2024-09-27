$(document).ready(function(){


    // list 색바꿈
    $("#project_list li").click( function(){
        $("#project_list li").removeClass("on");
        $(this).addClass("on");
    });


    // img 커버 onoff
    $("#project_list").children().eq(0).click( function(){
        $("#project_img li").removeClass("off");
    });
    $("#project_list").children().eq(1).click( function(){
        $("#project_img li").addClass("off");
        $("#project_img li").eq(0).removeClass("off");
        $("#project_img li").eq(1).removeClass("off");
        $("#project_img li").eq(2).removeClass("off");
        $("#project_img li").eq(3).removeClass("off");
    });
    $("#project_list").children().eq(2).click( function(){
        $("#project_img li").addClass("off");
        $("#project_img li").eq(4).removeClass("off");
        $("#project_img li").eq(5).removeClass("off");
        $("#project_img li").eq(6).removeClass("off");
    });
    $("#project_list").children().eq(3).click( function(){
        $("#project_img li").addClass("off");
        $("#project_img li").eq(7).removeClass("off");
        $("#project_img li").eq(8).removeClass("off");
        $("#project_img li").eq(9).removeClass("off");
        $("#project_img li").eq(10).removeClass("off");
    });


    // BUTTON
    $("#show").click( function() {
        $("#show").addClass("off");
        $("#bottom").removeClass("off");
        $("#content").removeClass("off");
    });
    $("#show").trigger("click");


});