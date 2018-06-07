$(document).on('ready click mousemove', function() {
	if (localStorage.getItem('zoom') == null) localStorage.setItem('zoom', 0);
	if (localStorage.getItem('hh1')) $('.header>h1').css('font-size', localStorage.getItem('hh1'));
	if (localStorage.getItem('hh2')) $('.header>h2').css('font-size', localStorage.getItem('hh2'));
	if (localStorage.getItem('note')) $('.note').css('font-size', localStorage.getItem('note'));
	if (localStorage.getItem('noteb')) $('.note b').css('font-size', localStorage.getItem('noteb'));
	if (localStorage.getItem('des')) $('.designation').css('font-size', localStorage.getItem('des'));
	if (localStorage.getItem('dinp')) $('.data_input_field').css('font-size', localStorage.getItem('dinp'));
	if (localStorage.getItem('tbodys')) $('.tbody select').css('font-size', localStorage.getItem('tbodys'));
	if (localStorage.getItem('tbodyso')) $('.tbody select option').css('font-size', localStorage.getItem('tbodyso'));
	if (localStorage.getItem('switchfac')) $('.switch_fac').css('font-size', localStorage.getItem('switchfac'));
	if (localStorage.getItem('switchfaco')) $('.switch_fac option').css('font-size', localStorage.getItem('switchfaco'));
	if (localStorage.getItem('glyph')) $('.glyphicon').css('font-size', localStorage.getItem('glyph'));
	if (localStorage.getItem('tclab')) $('#timer_controls>label').css('font-size', localStorage.getItem('tclab'));
	if (localStorage.getItem('timer')) $('.timer').css('padding', localStorage.getItem('timer'));
	if (localStorage.getItem('numb')) $('.numbers').css('font-size', localStorage.getItem('numb'));
	if (localStorage.getItem('var')) $('.variant').css('font-size', localStorage.getItem('var'));
	if (localStorage.getItem('restd')) $('.result_table td').css('font-size', localStorage.getItem('restd'));
});

$(document).on('ready click mousemove', function() {
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
		$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');
		$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');
		$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');
		$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');
		$('.designation').css('font-size', '24px'); localStorage.setItem('des', '24px');
		$('.designation b').css('font-size', '24px'); localStorage.setItem('des', '24px');
		$('.data_input_field').css('font-size', '22px'); localStorage.setItem('dinp', '22px');
		$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');
		$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');
		$('.switch_fac').css('font-size', '18px'); localStorage.setItem('switchfac', '18px');
		$('.switch_fac option').css('font-size', '18px'); localStorage.setItem('switchfaco', '18px');
		$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');
		$('#timer_controls>label').css('font-size', '16px'); localStorage.setItem('tclab', '16px');
		$('.timer').css('padding', '12px'); localStorage.setItem('timer', '12px');
		$('.numbers').css('font-size', '40px'); localStorage.setItem('numb', '40px');
		$('.variant').css('font-size', '22px'); localStorage.setItem('var', '22px'); 
		$('.result_table td').css('font-size', '22px'); localStorage.setItem('restd', '22px');
	}

	if (zoom == 2) {
		$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');
		$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');
		$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');
		$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');
		$('.designation').css('font-size', '26px'); localStorage.setItem('des', '26px');
		$('.designation b').css('font-size', '26px'); localStorage.setItem('des', '26px');
		$('.data_input_field').css('font-size', '24px'); localStorage.setItem('dinp', '24px');
		$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');
		$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');
		$('.switch_fac').css('font-size', '20px'); localStorage.setItem('switchfac', '20px');
		$('.switch_fac option').css('font-size', '20px'); localStorage.setItem('switchfaco', '20px');
		$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');
		$('#timer_controls>label').css('font-size', '18px'); localStorage.setItem('tclab', '18px');
		$('.timer').css('padding', '14px'); localStorage.setItem('timer', '14px');
		$('.numbers').css('font-size', '44px'); localStorage.setItem('numb', '44px');
		$('.variant').css('font-size', '24px'); localStorage.setItem('var', '24px');
		$('.result_table td').css('font-size', '24px'); localStorage.setItem('restd', '24px');
	}
	
	if (zoom == 3) {
		$('.header>h1').css('font-size', '42px'); localStorage.setItem('hh1', '42px');
		$('.header>h2').css('font-size', '32px'); localStorage.setItem('hh2', '32px');
		$('.note').css('font-size', '30px'); localStorage.setItem('note', '30px');
		$('.note b').css('font-size', '30px'); localStorage.setItem('noteb', '30px');
		$('.designation').css('font-size', '28px'); localStorage.setItem('des', '28px');
		$('.designation b').css('font-size', '28px'); localStorage.setItem('des', '28px');
		$('.data_input_field').css('font-size', '26px'); localStorage.setItem('dinp', '26px');
		$('tbody select').css('font-size', '22px'); localStorage.setItem('tbodys', '22px');
		$('tbody select option').css('font-size', '22px'); localStorage.setItem('tbodyso', '22px');
		$('.switch_fac').css('font-size', '22px'); localStorage.setItem('switchfac', '22px');
		$('.switch_fac option').css('font-size', '22px'); localStorage.setItem('switchfaco', '22px');
		$('.glyphicon').css('font-size', '26px'); localStorage.setItem('glyph', '26px');
		$('#timer_controls>label').css('font-size', '20px'); localStorage.setItem('tclab', '20px');
		$('.timer').css('padding', '16px'); localStorage.setItem('timer', '16px');
		$('.numbers').css('font-size', '48px'); localStorage.setItem('numb', '48px');
		$('.variant').css('font-size', '26px'); localStorage.setItem('var', '26px');
		$('.result_table td').css('font-size', '26px'); localStorage.setItem('restd', '26px');
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
		$('.header>h1').css('font-size', '40px'); localStorage.setItem('hh1', '40px');
		$('.header>h2').css('font-size', '30px'); localStorage.setItem('hh2', '30px');
		$('.note').css('font-size', '28px'); localStorage.setItem('note', '28px');
		$('.note b').css('font-size', '28px'); localStorage.setItem('noteb', '28px');
		$('.designation').css('font-size', '26px'); localStorage.setItem('des', '26px');
		$('.designation b').css('font-size', '26px'); localStorage.setItem('des', '26px');
		$('.data_input_field').css('font-size', '24px'); localStorage.setItem('dinp', '24px');
		$('tbody select').css('font-size', '20px'); localStorage.setItem('tbodys', '20px');
		$('tbody select option').css('font-size', '20px'); localStorage.setItem('tbodyso', '20px');
		$('.switch_fac').css('font-size', '20px'); localStorage.setItem('switchfac', '20px');
		$('.switch_fac option').css('font-size', '20px'); localStorage.setItem('switchfaco', '20px');
		$('.glyphicon').css('font-size', '24px'); localStorage.setItem('glyph', '24px');
		$('#timer_controls>label').css('font-size', '18px'); localStorage.setItem('tclab', '18px');
		$('.timer').css('padding', '14px'); localStorage.setItem('timer', '14px');
		$('.numbers').css('font-size', '44px'); localStorage.setItem('numb', '44px');
		$('.variant').css('font-size', '24px'); localStorage.setItem('var', '24px');
		$('.result_table td').css('font-size', '24px'); localStorage.setItem('restd', '24px');
	}

	if (zoom == 1) {
		$('.header>h1').css('font-size', '38px'); localStorage.setItem('hh1', '38px');
		$('.header>h2').css('font-size', '28px'); localStorage.setItem('hh2', '28px');
		$('.note').css('font-size', '26px'); localStorage.setItem('note', '26px');
		$('.note b').css('font-size', '26px'); localStorage.setItem('noteb', '26px');
		$('.designation').css('font-size', '24px'); localStorage.setItem('des', '24px');
		$('.designation b').css('font-size', '24px'); localStorage.setItem('des', '24px');
		$('.data_input_field').css('font-size', '22px'); localStorage.setItem('dinp', '22px');
		$('.switch_fac').css('font-size', '18px'); localStorage.setItem('switchfac', '18px');
		$('.switch_fac option').css('font-size', '18px'); localStorage.setItem('switchfaco', '18px');
		$('tbody select').css('font-size', '18px'); localStorage.setItem('tbodys', '18px');
		$('tbody select option').css('font-size', '18px'); localStorage.setItem('tbodyso', '18px');
		$('.glyphicon').css('font-size', '22px'); localStorage.setItem('glyph', '22px');
		$('#timer_controls>label').css('font-size', '16px'); localStorage.setItem('tclab', '16px');
		$('.timer').css('padding', '12px'); localStorage.setItem('timer', '12px');
		$('.numbers').css('font-size', '40px'); localStorage.setItem('numb', '40px');
		$('.variant').css('font-size', '22px'); localStorage.setItem('var', '22px');
		$('.result_table td').css('font-size', '22px'); localStorage.setItem('restd', '22px');
	}
	
	if (zoom == 0) {
		$('.header>h1').css('font-size', '36px'); localStorage.setItem('hh1', '36px');
		$('.header>h2').css('font-size', '26px'); localStorage.setItem('hh2', '26px');
		$('.note').css('font-size', '24px'); localStorage.setItem('note', '24px');
		$('.note b').css('font-size', '24px'); localStorage.setItem('noteb', '24px');
		$('.designation').css('font-size', '22px'); localStorage.setItem('des', '22px');
		$('.designation b').css('font-size', '22px'); localStorage.setItem('des', '22px');
		$('.data_input_field').css('font-size', '20px'); localStorage.setItem('dinp', '20px');
		$('tbody select').css('font-size', '16px'); localStorage.setItem('tbodys', '16px');
		$('tbody select option').css('font-size', '16px'); localStorage.setItem('tbodyso', '16px');
		$('.switch_fac').css('font-size', '16px'); localStorage.setItem('switchfac', '16px');
		$('.switch_fac option').css('font-size', '16px'); localStorage.setItem('switchfaco', '16px');
		$('.glyphicon').css('font-size', '20px'); localStorage.setItem('glyph', '20px');
		$('#timer_controls>label').css('font-size', '14px'); localStorage.setItem('tclab', '14px');
		$('.timer').css('padding', '10px'); localStorage.setItem('timer', '10px');
		$('.numbers').css('font-size', '36px'); localStorage.setItem('numb', '36px');
		$('.variant').css('font-size', '20px'); localStorage.setItem('var', '20px');
		$('.result_table td').css('font-size', '20px'); localStorage.setItem('restd', '20px');
	}
}