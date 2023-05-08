$(function() {
    var elem="td , #inp";
	$("#colorbk").change(function(e) {	
		$("body #inp").css("background-color", "rgb("+ $(this).val()+","+ $(this).val()+","+ $(this).val()+")");
		$("body").css("background-color", "rgb("+ $(this).val()+","+ $(this).val()+","+ $(this).val()+")");
        changes();		
	});
	$("#font-size-slider").change(function(e) {
		$(elem).css("font-size", $(this).val() + "px");	
        changes();	
	});
	
	$(".color-slider").change(function(e) {
		$(elem).css("color", "hsla(" + $("#color-slider-1").val() + ", " + $("#color-slider-2").val() + "%, " + $("#color-slider-3").val() + "%, 1)");	
        changes();	
	});
	
	$("#fontfamily").change(function(e) {	
		$(elem).css("font-family", "f"+ $(this).val());
        changes();		
	});
	
    var colorA="";var shadowA="";
	$(".color-shadowA").change(function(e) {
	    colorA ="hsla(" + $("#color-shadowA-1").val() + ", " + $("#color-shadowA-2").val() + "%, " + $("#color-shadowA-3").val() + "%, 1)";	
		$(".shadow-sliderA").change();
        changes();	
	}); 
	$(".shadow-sliderA").change(function(e) {	
	    shadowA=colorA+" "+ $("#shadow-sliderA-1").val() + "px " + $("#shadow-sliderA-2").val() + "px " + $("#shadow-sliderA-3").val() + "px";
		$(elem).css("text-shadow",shadowA);
        changes(); 		 
	});
	
    var colorA="";var shadowA="";
	$(".color-shadowA").change(function(e) {
	    colorA ="hsla(" + $("#color-shadowA-1").val() + ", " + $("#color-shadowA-2").val() + "%, " + $("#color-shadowA-3").val() + "%, 1)";	 
		$(".shadow-sliderA").change();
        changes();	
	}); 
	$(".shadow-sliderA").change(function(e) {	
        if(($("#shadow-sliderA-1").val() + $("#shadow-sliderA-2").val() + $("#shadow-sliderA-3").val())>0)
	      shadowA=colorA+" "+ $("#shadow-sliderA-1").val() + "px " + $("#shadow-sliderA-2").val() + "px " + $("#shadow-sliderA-3").val() + "px"; 
		else
          shadowA=""; 
        changes(); 		 
	});
	
    var colorB="";var shadowB="";
	$(".color-shadowB").change(function(e) {
	    colorB ="hsla(" + $("#color-shadowB-1").val() + ", " + $("#color-shadowB-2").val() + "%, " + $("#color-shadowB-3").val() + "%, 1)";	 
		$(".shadow-sliderB").change();
        changes();	
	}); 
	$(".shadow-sliderB").change(function(e) {	
        if(($("#shadow-sliderB-1").val() + $("#shadow-sliderB-2").val() + $("#shadow-sliderB-3").val())>0)
	      shadowB=colorB+" "+ $("#shadow-sliderB-1").val() + "px " + $("#shadow-sliderB-2").val() + "px " + $("#shadow-sliderB-3").val() + "px"; 
		else
          shadowB=""; 
        changes(); 		 
	});
	
    var colorC="";var shadowC="";
	$(".color-shadowC").change(function(e) {
	    colorC ="hsla(" + $("#color-shadowC-1").val() + ", " + $("#color-shadowC-2").val() + "%, " + $("#color-shadowC-3").val() + "%, 1)"; 
		$(".shadow-sliderC").change();
        changes();	
	}); 
	$(".shadow-sliderC").change(function(e) {	
        if(($("#shadow-sliderC-1").val() + $("#shadow-sliderC-2").val() + $("#shadow-sliderC-3").val())>0)
	      shadowC=colorC+" "+ $("#shadow-sliderC-1").val() + "px " + $("#shadow-sliderC-2").val() + "px " + $("#shadow-sliderC-3").val() + "px"; 
		else
          shadowC=""; 
        changes(); 		 
	});
	
    var colorD="";var shadowD="";
	$(".color-shadowD").change(function(e) {
	    colorD ="hsla(" + $("#color-shadowD-1").val() + ", " + $("#color-shadowD-2").val() + "%, " + $("#color-shadowD-3").val() + "%, 1)";	 
		$(".shadow-sliderD").change();
        changes();	
	}); 
	$(".shadow-sliderD").change(function(e) {	
        if(($("#shadow-sliderD-1").val() + $("#shadow-sliderD-2").val() + $("#shadow-sliderD-3").val())>0)
	      shadowD=colorD+" "+ $("#shadow-sliderD-1").val() + "px " + $("#shadow-sliderD-2").val() + "px " + $("#shadow-sliderD-3").val() + "px"; 
		else
          shadowD=""; 
        changes(); 		 
	});
	
	

	$("#font-size-slider").change();
	$(".color-slider").change();
	$("#fontfamily").change();
	
	$(".color-shadowA").change();
	$(".shadow-sliderA").change();
	$(".color-shadowB").change();
	$(".shadow-sliderB").change();
	$(".color-shadowC").change();
	$(".shadow-sliderC").change();
	$(".color-shadowD").change();
	$(".shadow-sliderD").change();
	
	function changes(){
	   var shadow=""
	   if(shadowA!="")shadow+=shadowA;
	   if(shadowB!="")shadow+=" , "+shadowB;
	   if(shadowC!="")shadow+=" , "+shadowC;
	   if(shadowD!="")shadow+=" , "+shadowD;
	   
	   if(shadow!="")$(elem).css("text-shadow",shadow);
	   var e=$("td")[0].style.length;
	   var t="{";
	   for(var i=0;i<e;i++) t+="\t\r\n"+$("td")[0].style[i]+":"+$("td")[0].style[$("td")[0].style[i]]+";";
	   t+="\r\n}";
	   $("#sout").text(t); 
	}
	
	
});