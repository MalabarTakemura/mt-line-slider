$(document).ready(function() {
	var pathToSlide = ".partners-scrl .scroll-window .scroll";
	var pathToButtonRight = "#btn-right";
	var pathToButtonLeft = "#btn-left";
	var countVisibleItem = 8;
	var x = 0;


	var slides = $(pathToSlide).children(".item");
	var width = $(pathToSlide).width();
	var itemCount = slides.length;
	var offset = itemCount * width;
	var item_w = $(pathToSlide+" .item").width();
	
	item_w+=x; //margin
	
	$(pathToSlide).css('width',offset);
	
	offset = 0;
    var i=0;
	$(pathToButtonRight).click(function(){	
		if (i< (itemCount-countVisibleItem)) {	
			offset += item_w;
			$(pathToSlide).css({				"transform":"translate3d(-"+offset+"px, 0px, 0px)",				"transition":"all 0.3s ease"});
			i++;
		}
		
	});


	$(pathToButtonLeft).click(function(){
		if (i>0) { 
			offset -= item_w;
			$(pathToSlide).css({				"transform":"translate3d(-"+offset+"px, 0px, 0px)", 				"transition":"all 0.3s ease;"});
			i--;
		}
	});
});