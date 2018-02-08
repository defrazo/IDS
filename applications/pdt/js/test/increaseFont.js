function toIncreaseFont() { //Увеличение шрифта
	
	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	$('.header>h1').css('font-size', '38px');
	if (newSize == '38')	$('.header>h1').css('font-size', '40px');
	if (newSize == '40')	$('.header>h1').css('font-size', '42px');
	if (newSize == '42')	$('.header>h1').css('font-size', '44px');

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	$('.header>h2').css('font-size', '28px');
	if (newSize == '28')	$('.header>h2').css('font-size', '30px');
	if (newSize == '30')	$('.header>h2').css('font-size', '32px');
	if (newSize == '32')	$('.header>h2').css('font-size', '34px');

	fontSize = $('.designation b').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	$('.designation b').css('font-size', '24px');
	if (newSize == '24')	$('.designation b').css('font-size', '26px');
	if (newSize == '26')	$('.designation b').css('font-size', '28px');
	if (newSize == '28')	$('.designation b').css('font-size', '30px');
	if (newSize == '30')	$('.designation b').css('font-size', '32px');

	tSize = $('.data_input_field').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('.data_input_field').css('font-size', '22px');
	if (newSize == '22')	$('.data_input_field').css('font-size', '24px');
	if (newSize == '24')	$('.data_input_field').css('font-size', '26px');
	if (newSize == '26')	$('.data_input_field').css('font-size', '28px');
	if (newSize == '28')	$('.data_input_field').css('font-size', '30px');

	fontSize = $('#date').css('width');
	newSize = parseInt(fontSize);
	if (newSize == '249')	$('#date').css('width', '292px');
	if (newSize == '292')	$('#date').css('width', '314px');
	if (newSize == '314')	$('#date').css('width', '336px');
	if (newSize == '336')	$('#date').css('width', '358px');

	fontSize = $('.progress-message').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	$('.progress-message').css('font-size', '18px');
	if (newSize == '18')	$('.progress-message').css('font-size', '20px');

	fontSize = $('.switch_name').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	$('.switch_name').css('font-size', '18px');
	if (newSize == '18')	$('.switch_name').css('font-size', '20px');
	if (newSize == '20')	$('.switch_name').css('font-size', '22px');

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

	fontSize = $('.variant').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	$('.variant').css('font-size', '22px');
	if (newSize == '22')	$('.variant').css('font-size', '24px');
	if (newSize == '24')	$('.variant').css('font-size', '26px');
	if (newSize == '26')	$('.variant').css('font-size', '28px');
	if (newSize == '28')	$('.variant').css('font-size', '30px');

	fontSize = $('a.next_button').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	$('a.next_button').css('font-size', '18px');
	if (newSize == '18')	$('a.next_button').css('font-size', '20px');
}