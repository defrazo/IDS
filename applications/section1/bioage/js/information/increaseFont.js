$(document).ready(function(){
	if (localStorage.getItem('hh1') != '') $('.header>h1').css('font-size', localStorage.getItem('hh1'));
	if (localStorage.getItem('hh2') != '') $('.header>h2').css('font-size', localStorage.getItem('hh2'));
	if (localStorage.getItem('note') != '') $('.note').css('font-size', localStorage.getItem('note'));
	if (localStorage.getItem('noteb') != '') $('.note b').css('font-size', localStorage.getItem('noteb'));
	if (localStorage.getItem('tbodys') != '') $('.tbody select').css('font-size', localStorage.getItem('tbodys'));
	if (localStorage.getItem('tbodyso') != '') $('.tbody select option').css('font-size', localStorage.getItem('tbodyso'));
	if (localStorage.getItem('glyph') != '') $('.glyphicon').css('font-size', localStorage.getItem('glyph'));
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

	fontSize = $('.note').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '24')	{$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');}
	if (newSize == '26')	{$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');}
	if (newSize == '28')	{$('.note').css('font-size', '30px'); localStorage.setItem('note', '30px');}

	fontSize = $('.note b').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '24')	{$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');}
	if (newSize == '26')	{$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');}
	if (newSize == '28')	{$('.note b').css('font-size', '30px'); localStorage.setItem('noteb', '30px');}

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
}