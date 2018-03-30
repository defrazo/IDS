$(document).ready(function() {
	if (localStorage.getItem('hh1') != '') $('.header>h1').css('font-size', localStorage.getItem('hh1'));
	if (localStorage.getItem('hh2') != '') $('.header>h2').css('font-size', localStorage.getItem('hh2'));
	if (localStorage.getItem('note') != '') $('.note').css('font-size', localStorage.getItem('note'));
	if (localStorage.getItem('noteb') != '') $('.note b').css('font-size', localStorage.getItem('noteb'));
	if (localStorage.getItem('tbodys') != '') $('.tbody select').css('font-size', localStorage.getItem('tbodys'));
	if (localStorage.getItem('tbodyso') != '') $('.tbody select option').css('font-size', localStorage.getItem('tbodyso'));
	if (localStorage.getItem('glyph') != '') $('.glyphicon').css('font-size', localStorage.getItem('glyph'));
});

function toDecreaseFont() { //Уменьшение шрифта

	fontSize = $('.header>h1').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '42')	{$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');} 
	if (newSize == '40')	{$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');} 
	if (newSize == '38')	{$('.header>h1').css('font-size', '36px'); localStorage.setItem('hh1', '36px');} 
 
	fontSize = $('.header>h2').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '32')	{$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');}
	if (newSize == '30')	{$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');}
	if (newSize == '28')	{$('.header>h2').css('font-size', '26px'); localStorage.setItem('hh2', '26px');}

	fontSize = $('.note').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '30')	{$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');}
	if (newSize == '28')	{$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');}
	if (newSize == '26')	{$('.note').css('font-size', '24px'); localStorage.setItem('note', '24px');}

	fontSize = $('.note b').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '30')	{$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');}
	if (newSize == '28')	{$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');}
	if (newSize == '26')	{$('.note b').css('font-size', '24px'); localStorage.setItem('noteb', '24px');}

	fontSize = $('tbody select').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	{$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');}
	if (newSize == '20')	{$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');}
	if (newSize == '18')	{$('tbody select').css('font-size', '16px'); localStorage.setItem('tbodys', '16px');}

	fontSize = $('tbody select option').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '22')	{$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');}
	if (newSize == '20')	{$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');}
	if (newSize == '18')	{$('tbody select option').css('font-size', '16px'); localStorage.setItem('tbodyso', '16px');}

	fontSize = $('.glyphicon').css('font-size');
	newSize = parseInt(fontSize);
	if (newSize == '26')	{$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');}
	if (newSize == '24')	{$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');}
	if (newSize == '22')	{$('.glyphicon').css('font-size', '20px'); localStorage.setItem('glyph', '20px');}
}