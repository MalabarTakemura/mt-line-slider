$(document).ready(function() {
//	Структура слайдера:
//		#btn-left
//		#btn-right
//		слайдер рамка (к примеру .scroll-window), обозначающая область видимости
//			.scroll к которому применяется плагин
//				.item
//				.item
//				.item	
//				.item
//				.item...
//

	(function($){ 
		$.fn.mt_line_slider = function(options){
			options = $.extend({
				buttonLeft : "#btn-left", 		// кнопка влево
				buttonRight : "#btn-right",		// кнопка вправо
				countVisibleItem : 8,			// колличество видимых элементов 
				item : ".item"					// элемент слайдера
    		}, options);

			var p_This = $(this);							//укатель на слайдер
			var width = $(this).width();
			var itemCount = $(this).children(options.item).length;
			var offset = itemCount * width;
			
			$(this).css('width',offset);
			offset = 0;


			var item_w = $(this).children(options.item).width();
			item_w+=0; //margin и padding
	
			$(this).find(options.item).each(function(i,el){
				$(el).css({
					"position":"relative",
					"margin":"0 0 0 0",
					"padding":"0 0 0 0",
					"float":"left",
					"display":"inline-block"
				});
			});



			// Обработчики событий
		    var i=0;
			$(options.buttonRight).click(function(){	
				if (i< (itemCount - options.countVisibleItem)) {	
					offset += item_w;
					p_This.css({
						"transform":"translate3d(-"+offset+"px, 0px, 0px)",
						"transition":"all 0.3s ease"});
					i++;
				}
			});


			$(options.buttonLeft).click(function(){
				if (i>0) { 
					offset -= item_w;
					p_This.css({
						"transform":"translate3d(-"+offset+"px, 0px, 0px)", 
						"transition":"all 0.3s ease;"});
					i--;
				}
			});
			
			return this;
		};
	})(jQuery);

	$(".scroll").mt_line_slider();
});