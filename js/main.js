$("p").hover(function () {
	$(this).removeClass("rotateIn").addClass("shake");
}, function(){$(this).removeClass("shake");
});