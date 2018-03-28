$(document).ready(function() { // Открытие контейнера опций по переключателю
	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
	});

	$(document).on('click mousemove', function() {
		fontSize = $('.header>h1').css('font-size');
		if (fontSize == '36px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', true);}
		if (fontSize == '38px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', false);}
		if (fontSize == '40px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', false);}
		if (fontSize == '42px') {$('.plus').prop('disabled', true); $('.minus').prop('disabled', false);}
	});
});