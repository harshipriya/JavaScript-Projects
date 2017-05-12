/**
 * Created by hyarragonda on 4/24/17.
 */
/*
$(function(){
    $('li').on('click',function(){
        //$(this).siblings().hide();
        //$(this).next().hide();
        $(this).removeClass('special');
        $(this).siblings().addClass("special");
    });
});*/
/*$(function(){
   $('li').on('click',function (){
       $(this).closest('.list').addClass("special");
   }) ;
});*/
/*
$(function() {
    $('.list').on('click', function () {
        $(this).find('.li').addClass("special");
    });
});*/
/*$(function(){
    $('li').on('click',function () {
        $(this).hide();
        if($(this).not('.special')){
            alert('not special');
        }
    });
});*/
$(function(){
    $('li').on('click',function(){
        $(this).hide();
        if(!$(this).is('.special')){
            alert('not special');
        }
    });
});
/*
$(function(){
    $('li').on('click',function(){
        $(this).hide();
        if($(this).is('.special')){
            alert('special');
        }
    })
})*/
/*$(function(){
    $('li').on('click',function(){
        console.log('clicked li')
        if($(this).parent().is('.sublist')){
            $(this).hide();
        }
    })
})*/
