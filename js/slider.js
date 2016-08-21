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
				button_left : "#btn-left", 		// кнопка влево
				button_right : "#btn-right",		// кнопка вправо
				count_visible_item : 8,			// колличество видимых элементов 
				item : ".item"					// элемент слайдера
    		}, options);

			var p_This = $(this);							//укатель на слайдер
			var width = $(this).width();
			var item_count = $(this).children(options.item).length;
			var offset = item_count * width;
			
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
			$(options.button_right).click(function(){	
				if (i< (item_count - options.count_visible_item)) {	
					offset += item_w;
					i++;
				}
				else{
					i=1;
					offset=0;
				}
				p_This.css({
					"transform":"translate3d(-"+offset+"px, 0px, 0px)",
					"transition":"all 0.3s ease"});
			});


			$(options.button_left).click(function(){
				if (i>0) { 
					offset -= item_w;
					i--;
				}
				else{
					i = item_count - options.count_visible_item;
					offset = item_w*i;
				}
				p_This.css({
					"transform":"translate3d(-"+offset+"px, 0px, 0px)", 
					"transition":"all 0.3s ease;"});
			});
			
			return this;
		};
	})(jQuery);

	$(".scroll").mt_line_slider();
});