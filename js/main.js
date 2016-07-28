$(function(){
	$("p").hover(function () {
		$(this).removeClass("rotateIn").addClass("shake");
	}, 
		function() {$(this).removeClass("shake");
	});

	$(".logo").hover(function () {
		$(this).removeClass("fadeInUpBig").addClass("shake");
	}, 
		function() {$(this).removeClass("shake");
	});

	$(".smiley").hover(function () {
		$(this).removeClass("fadeInRightBig").addClass("pulse");
	}, 
		function() {$(this).removeClass("pulse");
	});
});