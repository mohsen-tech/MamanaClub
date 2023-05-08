
$(document).ready(function(){

 $("#bgX").delay(1).animate({opacity:1,left:"0px"},function(){
   $("#logo").fadeIn("slow")
 });


$('.mainSlide').bxSlider({
  mode: 'fade',
  captions: true,
  nextText:"",
  prevText:"",
  auto: true,
  nextText:"",
  prevText:"",
  nextSelector: '.nextA',
  prevSelector: '.prevA'

});
 

$("#menuBtn").click(function(){
 if($(this).hasClass("activeX")){
    $(this).removeClass("activeX");
    $("#rightMenu").animate({width:"0px"})

   // $("#wrapper").animate({paddingRight:"00px"})
    $("#menuBtn").animate({right:"0px"})
 }else{
    $(this).addClass("activeX");
    $("#rightMenu").animate({width:"200px"})

   // $("#wrapper").animate({paddingRight:"150px"})
    $("#menuBtn").animate({right:"200px"})

 }
})


})