$(document).ready(function(){
	if (localStorage.getItem('zoom') == null) localStorage.setItem('zoom', 0);
	if (localStorage.getItem('hh1') != '') $('.header>h1').css('font-size', localStorage.getItem('hh1'));
	if (localStorage.getItem('hh2') != '') $('.header>h2').css('font-size', localStorage.getItem('hh2'));
	if (localStorage.getItem('note') != '') $('.note').css('font-size', localStorage.getItem('note'));
	if (localStorage.getItem('noteb') != '') $('.note b').css('font-size', localStorage.getItem('noteb'));
	if (localStorage.getItem('des') != '') $('.designation').css('font-size', localStorage.getItem('des'));
	if (localStorage.getItem('dinp') != '') $('.data_input_field').css('font-size', localStorage.getItem('dinp'));
	if (localStorage.getItem('tbodys') != '') $('.tbody select').css('font-size', localStorage.getItem('tbodys'));
	if (localStorage.getItem('tbodyso') != '') $('.tbody select option').css('font-size', localStorage.getItem('tbodyso'));
	if (localStorage.getItem('switchfac') != '') $('.switch_fac').css('font-size', localStorage.getItem('switchfac'));
	if (localStorage.getItem('switchfaco') != '') $('.switch_fac option').css('font-size', localStorage.getItem('switchfaco'));
	if (localStorage.getItem('glyph') != '') $('.glyphicon').css('font-size', localStorage.getItem('glyph'));
	if (localStorage.getItem('tclab') != '') $('#timer_controls>label').css('font-size', localStorage.getItem('tclab'));
	if (localStorage.getItem('timer') != '') $('.timer').css('padding', localStorage.getItem('timer'));
	if (localStorage.getItem('numb') != '') $('.numbers').css('font-size', localStorage.getItem('numb'));
	if (localStorage.getItem('var') != '') $('.variant').css('font-size', localStorage.getItem('var'));
	if (localStorage.getItem('restd') != '') $('.result_table td').css('font-size', localStorage.getItem('restd'));
});

$(document).on('click mousemove', function() {
	zoomval = localStorage.getItem('zoom');
	switch (true) {
		case (zoomval == 0) : $('.plus').prop('disabled', false); $('.minus').prop('disabled', true); break;
		case (zoomval == 1) : $('.plus').prop('disabled', false); $('.minus').prop('disabled', false); break;
		case (zoomval == 2) : $('.plus').prop('disabled', false); $('.minus').prop('disabled', false); break;
		case (zoomval == 3) : $('.plus').prop('disabled', true); $('.minus').prop('disabled', false); break;
	}
});

function increase() {
	zoomval = localStorage.getItem('zoom');
	switch (true) {
		case (zoomval == 0) : zoomval = 1; localStorage.setItem('zoom', 1); console.log(localStorage.getItem('zoom')); break;
		case (zoomval == 1) : zoomval = 2; localStorage.setItem('zoom', 2); console.log(localStorage.getItem('zoom')); break;
		case (zoomval == 2) : zoomval = 3; localStorage.setItem('zoom', 3); console.log(localStorage.getItem('zoom')); break;
	}

	var zoom = localStorage.getItem('zoom');

	if (zoom == 1) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '36')	{$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.designation').css('font-size', '24px'); localStorage.setItem('des', '24px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.designation b').css('font-size', '24px'); localStorage.setItem('des', '24px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.data_input_field').css('font-size', '22px'); localStorage.setItem('dinp', '22px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('.switch_fac').css('font-size', '18px'); localStorage.setItem('switchfac', '18px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('.switch_fac option').css('font-size', '18px'); localStorage.setItem('switchfaco', '18px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '14')	{$('#timer_controls>label').css('font-size', '16px'); localStorage.setItem('tclab', '16px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '10')	{$('.timer').css('padding', '12px'); localStorage.setItem('timer', '12px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '36')	{$('.numbers').css('font-size', '40px'); localStorage.setItem('numb', '40px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.variant').css('font-size', '22px'); localStorage.setItem('var', '22px');}; 
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.result_table td').css('font-size', '22px'); localStorage.setItem('restd', '22px');}
	}

	if (zoom == 2) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '38')	{$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.designation').css('font-size', '26px'); localStorage.setItem('des', '26px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.designation b').css('font-size', '26px'); localStorage.setItem('des', '26px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.data_input_field').css('font-size', '24px'); localStorage.setItem('dinp', '24px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('.switch_fac').css('font-size', '20px'); localStorage.setItem('switchfac', '20px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('.switch_fac option').css('font-size', '20px'); localStorage.setItem('switchfaco', '20px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('#timer_controls>label').css('font-size', '18px'); localStorage.setItem('tclab', '18px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '12')	{$('.timer').css('padding', '14px'); localStorage.setItem('timer', '14px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '40')	{$('.numbers').css('font-size', '44px'); localStorage.setItem('numb', '44px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.variant').css('font-size', '24px'); localStorage.setItem('var', '24px');}
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.result_table td').css('font-size', '24px'); localStorage.setItem('restd', '24px');}
	}
	
	if (zoom == 3) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '40')	{$('.header>h1').css('font-size', '42px'); localStorage.setItem('hh1', '42px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '30')	{$('.header>h2').css('font-size', '32px'); localStorage.setItem('hh2', '32px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.note').css('font-size', '30px'); localStorage.setItem('note', '30px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.note b').css('font-size', '30px'); localStorage.setItem('noteb', '30px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.designation').css('font-size', '28px'); localStorage.setItem('des', '28px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.designation b').css('font-size', '28px'); localStorage.setItem('des', '28px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.data_input_field').css('font-size', '26px'); localStorage.setItem('dinp', '26px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('tbody select').css('font-size', '22px'); localStorage.setItem('tbodys', '22px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('tbody select option').css('font-size', '22px'); localStorage.setItem('tbodyso', '22px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.switch_fac').css('font-size', '22px'); localStorage.setItem('switchfac', '22px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.switch_fac option').css('font-size', '22px'); localStorage.setItem('switchfaco', '22px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.glyphicon').css('font-size', '26px'); localStorage.setItem('glyph', '26px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('#timer_controls>label').css('font-size', '20px'); localStorage.setItem('tclab', '20px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '14')	{$('.timer').css('padding', '16px'); localStorage.setItem('timer', '16px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '44')	{$('.numbers').css('font-size', '48px'); localStorage.setItem('numb', '48px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.variant').css('font-size', '26px'); localStorage.setItem('var', '26px');}
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.result_table td').css('font-size', '26px'); localStorage.setItem('restd', '26px');}
	}
}

function decrease() {
	zoomval = parseInt(localStorage.getItem('zoom'));
	switch (true) {
		case (zoomval == 3) : zoomval = 2; localStorage.setItem('zoom', 2); console.log(localStorage.getItem('zoom')); break;
		case (zoomval == 2) : zoomval = 1; localStorage.setItem('zoom', 1); console.log(localStorage.getItem('zoom')); break;
		case (zoomval == 1) : zoomval = 0; localStorage.setItem('zoom', 0); console.log(localStorage.getItem('zoom')); break;
	}

	var zoom = localStorage.getItem('zoom');

	if (zoom == 2) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '42')	{$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '32')	{$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '30')	{$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '30')	{$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.designation').css('font-size', '26px'); localStorage.setItem('des', '26px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.designation b').css('font-size', '26px'); localStorage.setItem('des', '26px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.data_input_field').css('font-size', '24px'); localStorage.setItem('dinp', '24px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.switch_fac').css('font-size', '20px'); localStorage.setItem('switchfac', '20px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.switch_fac option').css('font-size', '20px'); localStorage.setItem('switchfaco', '20px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('#timer_controls>label').css('font-size', '18px'); localStorage.setItem('tclab', '18px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '16')	{$('.timer').css('padding', '14px'); localStorage.setItem('timer', '14px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '48')	{$('.numbers').css('font-size', '44px'); localStorage.setItem('numb', '44px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.variant').css('font-size', '24px'); localStorage.setItem('var', '24px');}
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.result_table td').css('font-size', '24px'); localStorage.setItem('restd', '24px');}
	}

	if (zoom == 1) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '40')	{$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '30')	{$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.designation').css('font-size', '24px'); localStorage.setItem('des', '24px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.designation b').css('font-size', '24px'); localStorage.setItem('des', '24px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.data_input_field').css('font-size', '22px'); localStorage.setItem('dinp', '22px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.switch_fac').css('font-size', '18px'); localStorage.setItem('switchfac', '18px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('.switch_fac option').css('font-size', '18px'); localStorage.setItem('switchfaco', '18px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '20')	{$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('#timer_controls>label').css('font-size', '16px'); localStorage.setItem('tclab', '16px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '14')	{$('.timer').css('padding', '12px'); localStorage.setItem('timer', '12px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '44')	{$('.numbers').css('font-size', '40px'); localStorage.setItem('numb', '40px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.variant').css('font-size', '22px'); localStorage.setItem('var', '22px');}
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.result_table td').css('font-size', '22px'); localStorage.setItem('restd', '22px');}
	}
	
	if (zoom == 0) {
		fontSize = $('.header>h1').css('font-size'); newSize = parseInt(fontSize); if (newSize == '38')	{$('.header>h1').css('font-size', '36px'); localStorage.setItem('hh1', '36px');}
		fontSize = $('.header>h2').css('font-size'); newSize = parseInt(fontSize); if (newSize == '28')	{$('.header>h2').css('font-size', '26px'); localStorage.setItem('hh2', '26px');}
		fontSize = $('.note').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.note').css('font-size', '24px'); localStorage.setItem('note', '24px');}
		fontSize = $('.note b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '26')	{$('.note b').css('font-size', '24px'); localStorage.setItem('noteb', '24px');}
		fontSize = $('.designation').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.designation').css('font-size', '22px'); localStorage.setItem('des', '22px');}
		fontSize = $('.designation b').css('font-size'); newSize = parseInt(fontSize); if (newSize == '24')	{$('.designation b').css('font-size', '22px'); localStorage.setItem('des', '22px');}
		fontSize = $('.data_input_field').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.data_input_field').css('font-size', '20px'); localStorage.setItem('dinp', '20px');}
		fontSize = $('tbody select').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('tbody select').css('font-size', '16px'); localStorage.setItem('tbodys', '16px');}
		fontSize = $('tbody select option').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('tbody select option').css('font-size', '16px'); localStorage.setItem('tbodyso', '16px');}
		fontSize = $('.switch_fac').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('.switch_fac').css('font-size', '16px'); localStorage.setItem('switchfac', '16px');}
		fontSize = $('.switch_faco').css('font-size'); newSize = parseInt(fontSize); if (newSize == '18')	{$('.switch_fac option').css('font-size', '16px'); localStorage.setItem('switchfaco', '16px');}
		fontSize = $('.glyphicon').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.glyphicon').css('font-size', '20px'); localStorage.setItem('glyph', '20px');}
		fontSize = $('#timer_controls>label').css('font-size'); newSize = parseInt(fontSize); if (newSize == '16')	{$('#timer_controls>label').css('font-size', '14px'); localStorage.setItem('tclab', '14px');}
		fontSize = $('.timer').css('padding'); newSize = parseInt(fontSize); if (newSize == '12')	{$('.timer').css('padding', '10px'); localStorage.setItem('timer', '10px');}
		fontSize = $('.numbers').css('font-size'); newSize = parseInt(fontSize); if (newSize == '40')	{$('.numbers').css('font-size', '36px'); localStorage.setItem('numb', '36px');}
		fontSize = $('.variant').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.variant').css('font-size', '20px'); localStorage.setItem('var', '20px');}
		fontSize = $('.result_table td').css('font-size'); newSize = parseInt(fontSize); if (newSize == '22')	{$('.result_table td').css('font-size', '20px'); localStorage.setItem('restd', '20px');}
	}
}