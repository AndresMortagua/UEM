// JavaScript Document

$(".item").hover(function(){
if ($(".item:hover ul").slideToggle(true)) {
		$(".item: ul").addClass("visible");
	
}else { $(".item: ul").removeclass("visible")
}

});

$(window).scroll(function(){
	if ($(".punt").visible(true)) {
		$(".punt").addClass("visible");
} else {
	$(".punt").removeClass("visible");
	}
});