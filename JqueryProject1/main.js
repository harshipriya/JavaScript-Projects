/**
 * Created by hyarragonda on 4/24/17.
 */
// // $(document).ready(function(){
//
// });
/*
$(function () {
    $("#panel1").hide(300).show(1000);
    $("#panel2").slideUp(1000).delay(1000).slideDown(1000);
    $("#panel3").css({color:'red',opacity:'0.5'});
})*/

/*
$(function(){
    $("#btn1").on('click',function(){
        $("#panel1").toggle(200);
    });
    $("#btn2").on('click',function(){
        $("#panel2 .panel-body").html("my new panel content");
    });
    $("#btn3").on('mouseover',function(){
        $("#panel3").fadeOut(200);
    });
    $("#btn4").on('mouseover',function(){
        $("#panel4").fadeOut(200);
    });
    $("#btn3").on('click',function(){
        $("#panel3").fadeToggle(200);
    });
    $("#btn4").on('click',function(){
        $("#panel4").fadeToggle(200);
    });
});*/

/*
$(function(){
    $("#btn1").on("click",function(){
        $("#panel1").toggle();
    });
    $("#btn2").on("click",function(){
        $("#panel2").toggle();
    });
    $("#btn3").on("click",function(){
        $("#panel3").toggle();
    });
    $("#btn4").on("click",function(){
        $("#panel4").toggle();
    });
});*/

$(function(){
    var content="My new awsome content"
$('.panel-button').on('click',function(){
    var panelId=$(this).attr("data-panelid");
    $('#'+panelId).toggle();
    $('#'+panelId+' .panel-body').html(content);
});
});