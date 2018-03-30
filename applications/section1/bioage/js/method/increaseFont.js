$(document).ready(function(){
	if (localStorage.getItem('hh1') != '') $('.header>h1').css('font-size', localStorage.getItem('hh1'));
	if (localStorage.getItem('hh2') != '') $('.header>h2').css('font-size', localStorage.getItem('hh2'));
	if (localStorage.getItem('des') != '') $('.designation').css('font-size', localStorage.getItem('des'));
	if (localStorage.getItem('dinp') != '') $('.data_input_field').css('font-size', localStorage.getItem('dinp'));
	if (localStorage.getItem('tbodys') != '') $('.tbody select').css('font-size', localStorage.getItem('tbodys'));
	if (localStorage.getItem('tbodyso') != '') $('.tbody select option').css('font-size', localStorage.getItem('tbodyso'));
	if (localStorage.getItem('glyph') != '') $('.glyphicon').css('font-size', localStorage.getItem('glyph'));
	if (localStorage.getItem('tclab') != '') $('#timer_controls>label').css('font-size', localStorage.getItem('tclab'));
	if (localStorage.getItem('timer') != '') $('.timer').css('padding', localStorage.getItem('timer'));
	if (localStorage.getItem('numb') != '') $('.numbers').css('font-size', localStorage.getItem('numb'));
	if (localStorage.getItem('var') != '') $('.variant').css('font-size', localStorage.getItem('var'));
});

function toIncreaseFont() { //Увеличение шрифта
	
	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	{$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');}
	if (newSize == '38')	{$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');}
	if (newSize == '40')	{$('.header>h1').css('font-size', '42px'); localStorage.setItem('hh1', '42px');}

	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	{$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');}
	if (newSize == '28')	{$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');}
	if (newSize == '30')	{$('.header>h2').css('font-size', '32px'); localStorage.setItem('hh2', '32px');}

	fontSize = $('.designation').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	{$('.designation').css('font-size', '24px'); localStorage.setItem('des', '24px');}
	if (newSize == '24')	{$('.designation').css('font-size', '26px'); localStorage.setItem('des', '26px');}
	if (newSize == '26')	{$('.designation').css('font-size', '28px'); localStorage.setItem('des', '28px');}
	
	fontSize = $('.data_input_field').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	{$('.data_input_field').css('font-size', '22px'); localStorage.setItem('dinp', '22px');}
	if (newSize == '22')	{$('.data_input_field').css('font-size', '24px'); localStorage.setItem('dinp', '24px');}
	if (newSize == '24')	{$('.data_input_field').css('font-size', '26px'); localStorage.setItem('dinp', '26px');}

	fontSize = $('tbody select').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	{$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');}
	if (newSize == '18')	{$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');}
	if (newSize == '20')	{$('tbody select').css('font-size', '22px'); localStorage.setItem('tbodys', '22px');}

	fontSize = $('tbody select option').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '16')	{$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');}
	if (newSize == '18')	{$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');}
	if (newSize == '20')	{$('tbody select option').css('font-size', '22px'); localStorage.setItem('tbodyso', '22px');}

	fontSize = $('.glyphicon').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	{$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');}
	if (newSize == '22')	{$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');}
	if (newSize == '24')	{$('.glyphicon').css('font-size', '26px'); localStorage.setItem('glyph', '26px');}

	fontSize = $('#timer_controls>label').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '14')	{$('#timer_controls>label').css('font-size', '16px'); localStorage.setItem('tclab', '16px');}
	if (newSize == '16')	{$('#timer_controls>label').css('font-size', '18px'); localStorage.setItem('tclab', '18px');}
	if (newSize == '18')	{$('#timer_controls>label').css('font-size', '20px'); localStorage.setItem('tclab', '20px');}

	fontSize = $('.timer').css('padding');
	newSize = parseInt(fontSize);
	if (newSize == '10')	{$('.timer').css('padding', '12px'); localStorage.setItem('timer', '12px');}
	if (newSize == '12')	{$('.timer').css('padding', '14px'); localStorage.setItem('timer', '14px');}
	if (newSize == '14')	{$('.timer').css('padding', '16px'); localStorage.setItem('timer', '16px');}

	fontSize = $('.numbers').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '36')	{$('.numbers').css('font-size', '40px'); localStorage.setItem('numb', '40px');}
	if (newSize == '40')	{$('.numbers').css('font-size', '44px'); localStorage.setItem('numb', '44px');}
	if (newSize == '44')	{$('.numbers').css('font-size', '48px'); localStorage.setItem('numb', '48px');}

	fontSize = $('.variant').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '20')	{$('.variant').css('font-size', '22px'); localStorage.setItem('var', '22px');}
	if (newSize == '22')	{$('.variant').css('font-size', '24px'); localStorage.setItem('var', '24px');}
	if (newSize == '24')	{$('.variant').css('font-size', '26px'); localStorage.setItem('var', '26px');}
}