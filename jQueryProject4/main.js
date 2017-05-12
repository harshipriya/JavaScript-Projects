/**
 * Created by hyarragonda on 4/25/17.
 */
// var myInterval=setInterval(function(){
//     console.log(new Date())
// },1000);

// $(selector).animate(obj,time,callback)
$(function(){
    //configuration
    var width=720;
    var animationSpeed=1000;
    var pause=1000;
    var currentSlide=1;

    //setInterval
    var $slider = $("#slider");
    var $slideContainer=$slider.find('.slides');
    var $slides=$slideContainer.find(".slide");
    var interval;
    function startSlider(){
        interval=setInterval(function () {
            $slideContainer.animate({"margin-left":"-="+width},animationSpeed,function(){
                currentSlide++;
                if(currentSlide===$slides.length){
                    currentSlide=1;
                    $slideContainer.css('margin-left',0);
                };

            });
        },pause);
    }
    function pauseSlider(){
        clearInterval(interval);
    }
    //animate margin left
    //if it is last slide, go to 1(0px)
    //listen for mouseenter and pause
    $slider.on("mouseenter",pauseSlider).on("mouseleave",startSlider);
    startSlider();
    //resume on mouse leave
});