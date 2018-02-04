/* 
hwSlideSpeed - Скорость анимации перехода слайда.
hwNeedLinks - включает или отключает показ ссылок "следующий - предыдущий". Значения true или false
*/
(function ($) {
	var hwSlideSpeed = 0;
	var hwNeedLinks = true;

	$(document).ready(function(e) {
		$('.tab').css({'top':'0', 'left': '0'}).hide().eq(0).show();
		var slideNum = 0;
		var slideTime;

		slideCount = $('.tabs .tab').size();
		var animSlide = function(arrow) {
			$('.tab').eq(slideNum).fadeOut(hwSlideSpeed);
			if (arrow == "next") {
				if (slideNum == (slideCount-1)) slideNum=0;
				else slideNum++
			} else if (arrow == "prew") {
				if (slideNum == 0) slideNum=slideCount-1;
				else slideNum-=1
				} else slideNum = arrow;

			$('.tab').eq(slideNum).fadeIn(hwSlideSpeed);
			$('.control-slide.active').removeClass('active');
			$('.control-slide').eq(slideNum).addClass('active');
		}

		if (hwNeedLinks) {
		var $linkArrow = $('<a id="prewbutton" href="#">&lt;</a><a id="nextbutton" href="#">&gt;</a>').prependTo('.tabs');		
			$('#nextbutton').click(function() {
				animSlide("next");
				return false;
			});

			$('#prewbutton').click(function() {
				animSlide("prew");
				return false;
			});
		}

		var $adderSpan = '';
		$('.tab').each(function(index) {
			$adderSpan += '<span class = "control-slide" id=tab'+index+'>' + index + '</span>';
		});

		$('<div class ="sli-links">' + $adderSpan +'</div>').appendTo('.main_box');
		$(".control-slide:first").addClass('active');
		$('.control-slide').click(function() {
			var goToNum = parseFloat($(this).text());
			animSlide(goToNum);
		});
	});
})(jQuery);