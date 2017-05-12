// /**
//  * Created by hyarragonda on 4/21/17.
//  */
// var numOne=document.getElementById("num-one");
// var numTwo=document.getElementById("num-two");
// var addsum=document.getElementById("add-sum");
// numOne.addEventListener("input",add);
// numTwo.addEventListener("input",add);
// function add(){
//     var one=parseFloat(numOne.value) || 0;
//     var two=parseFloat(numTwo.value) || 0;
//     var sum=one+two;
//     addsum.innerHTML="your sum is "+sum;
// }

/*
var simon=document.getElementById("simon");
var simonPic=document.getElementById("simon-pic");
var bruce=document.getElementById("bruce");
var brucePic=document.getElementById("bruce-pic");
var ben=document.getElementById("ben");
var benPic=document.getElementById("ben-pic");

simon.addEventListener('click', function(){
    console.log("click");
    if(simonPic.className==="hide"){
        console.log("click");
        simonPic.className="";
        console.log(simonPic.className);
    }
    else{
        simonPic.className="hide";
    }
})

bruce.addEventListener("click",brucegetpic);
function brucegetpic(){
    if(brucePic.className==="hide"){
        brucePic.className="";
    }
    else{
        brucePic.className="hide";
    }
}
ben.addEventListener("click",bengetpic);
function bengetpic(){
    if(benPic.className==="hide"){
        benPic.className="";
    }
    else{
        benPic.className="hide";
    }
}*/
var simon=document.getElementById("simon");
var bruce=document.getElementById("bruce");
var ben=document.getElementById("ben");

simon.addEventListener("click",picLink);
bruce.addEventListener("click",picLink);
ben.addEventListener("click",picLink);

function picLink() {
    var allImages=document.querySelectorAll("img");
    console.log(allImages);
    for(var i=0;i<allImages.length;i++){
        allImages[i].className="hide";

    }
    var picId=this.attributes["data-img"].value;
    var pic=document.getElementById(picId);
    if(pic.className==="hide"){
        pic.className="";
    }
    else{
        pic.className="hide";
    }
}