function toDecreaseFont() { //Уменьшение шрифта

	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '42')	$('.header>h1').css('font-size', '40px');
	if (newSize == '40')	$('.header>h1').css('font-size', '38px');
	if (newSize == '38')	$('.header>h1').css('font-size', '36px');

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '32')	$('.header>h2').css('font-size', '30px');
	if (newSize == '30')	$('.header>h2').css('font-size', '28px');
	if (newSize == '28')	$('.header>h2').css('font-size', '26px');

	fontSize = $('.note').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '28')	$('.note').css('font-size', '26px');
	if (newSize == '26')	$('.note').css('font-size', '24px');

	fontSize = $('.note b').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '28')	$('.note b').css('font-size', '26px');
	if (newSize == '26')	$('.note b').css('font-size', '24px');

	fontSize = $('tbody select').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('tbody select').css('font-size', '20px');
	if (newSize == '20')	$('tbody select').css('font-size', '18px');
	if (newSize == '18')	$('tbody select').css('font-size', '16px');

	fontSize = $('tbody select option').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('tbody select option').css('font-size', '20px');
	if (newSize == '20')	$('tbody select option').css('font-size', '18px');
	if (newSize == '18')	$('tbody select option').css('font-size', '16px');

	fontSize = $('.glyphicon').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	$('.glyphicon').css('font-size', '24px');
	if (newSize == '24')	$('.glyphicon').css('font-size', '22px');
	if (newSize == '22')	$('.glyphicon').css('font-size', '20px');
}