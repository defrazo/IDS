function toDecreaseFont() {

	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '46')	$('.header>h1').css('font-size', '44px');
	if (newSize == '44')	$('.header>h1').css('font-size', '42px');
	if (newSize == '42')	$('.header>h1').css('font-size', '40px');
	if (newSize == '40')	$('.header>h1').css('font-size', '38px');
	if (newSize == '38')	$('.header>h1').css('font-size', '36px');

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	$('.header>h2').css('font-size', '34px');
	if (newSize == '34')	$('.header>h2').css('font-size', '32px');
	if (newSize == '32')	$('.header>h2').css('font-size', '30px');
	if (newSize == '30')	$('.header>h2').css('font-size', '28px');
	if (newSize == '28')	$('.header>h2').css('font-size', '26px');

	fontSize = $('.designation b').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '32')	$('.designation b').css('font-size', '30px');
	if (newSize == '30')	$('.designation b').css('font-size', '28px');
	if (newSize == '28')	$('.designation b').css('font-size', '26px');
	if (newSize == '26')	$('.designation b').css('font-size', '24px');
	if (newSize == '24')	$('.designation b').css('font-size', '22px');
	
	fontSize = $('.progress-message').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('.progress-message').css('font-size', '18px');
	if (newSize == '18')	$('.progress-message').css('font-size', '16px');

	fontSize = $('.switch_name').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('.switch_name').css('font-size', '20px');
	if (newSize == '20')	$('.switch_name').css('font-size', '18px');
	if (newSize == '18')	$('.switch_name').css('font-size', '16px');

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

	fontSize = $('.variant').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '30')	$('.variant').css('font-size', '28px');
	if (newSize == '28')	$('.variant').css('font-size', '26px');
	if (newSize == '26')	$('.variant').css('font-size', '24px');
	if (newSize == '24')	$('.variant').css('font-size', '22px');
	if (newSize == '22')	$('.variant').css('font-size', '20px');

	fontSize = $('a.next_button').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('a.next_button').css('font-size', '18px');
	if (newSize == '18')	$('a.next_button').css('font-size', '16px');
}