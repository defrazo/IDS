function toIncreaseFont() { //Увеличение шрифта
	
	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	$('.header>h1').css('font-size', '38px');
	if (newSize == '38')	$('.header>h1').css('font-size', '40px');
	if (newSize == '40')	$('.header>h1').css('font-size', '42px');

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	$('.header>h2').css('font-size', '28px');
	if (newSize == '28')	$('.header>h2').css('font-size', '30px');
	if (newSize == '30')	$('.header>h2').css('font-size', '32px');
	
	fontSize = $('.result_table td').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('.result_table td').css('font-size', '22px');
	if (newSize == '22')	$('.result_table td').css('font-size', '24px');
	if (newSize == '24')	$('.result_table td').css('font-size', '26px');

	fontSize = $('tbody select').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	$('tbody select').css('font-size', '18px');
	if (newSize == '18')	$('tbody select').css('font-size', '20px');
	if (newSize == '20')	$('tbody select').css('font-size', '22px');

	fontSize = $('tbody select option').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	$('tbody select option').css('font-size', '18px');
	if (newSize == '18')	$('tbody select option').css('font-size', '20px');
	if (newSize == '20')	$('tbody select option').css('font-size', '22px');

	fontSize = $('.glyphicon').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('.glyphicon').css('font-size', '22px');
	if (newSize == '22')	$('.glyphicon').css('font-size', '24px');
	if (newSize == '24')	$('.glyphicon').css('font-size', '26px');
}