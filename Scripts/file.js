// Homm page
// Nice Scroll 
$(document).ready(function () {
	"use strict";
$("html").niceScroll({
  cursorcolor:"#140606",
	cursorwidth:"12px",
	cursorborder:"#E41B17 solid 2px"
});
});
// Toggle Themes Button 

$(document).ready(function () {
    "use strict";

$(".cog-option").click(function()
{
	$(".color-option").toggle();
	
});
// Toggle Color
	var colorLi = $(".color-option ul li");
colorLi
	.eq(0).css("backgroundColor", "#E41B17").end()
	.eq(1).css("backgroundColor", "#b415a7").end()
	.eq(2).css("backgroundColor", "#009AFF").end()
	.eq(3).css("backgroundColor", "#e5c316");
	
	colorLi.click(function()
{
	$("link[href*='Theme']").attr("href", $(this).attr("data-value"));
	// console.log($(this).attr("data-value"));
});
});

// Loading screen 
$(window).on('load', function (){
	"use strict";
//Show Scroll
$(".loading-overlay .sk-cube-grid").fadeOut(1000,
		function(){	
	$("body").css("overflow","auto");
	$(this).parent().fadeOut(2000,
		 function(){
		
		$(this).remove();
		});
	});	
});
	
	// Nice Scroll 


/*_____________ End Home Page  _______________*/


