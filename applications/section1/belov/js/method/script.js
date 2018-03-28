$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($('#stopwatch_button').prop('checked'))	$('.stopwatch_container').css('display', 'block');
		else	$('.stopwatch_container').css('display', 'none');
	});

	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
	});

	$('.blink').mouseover(function() {
		$('.blink').removeClass('blink');
	});

	$(document).on('click mousemove', function() {
		fontSize = $('.header>h1').css('font-size');
		if (fontSize == '36px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', true);}
		if (fontSize == '38px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', false);}
		if (fontSize == '40px') {$('.plus').prop('disabled', false); $('.minus').prop('disabled', false);}
		if (fontSize == '42px') {$('.plus').prop('disabled', true); $('.minus').prop('disabled', false);}
	});
});

$(document).mousemove(function() {
	$('input[name="gender"]').change(function() {
		var genderValue = $('input[name="gender"]:checked').val();
			if (genderValue) {
				localStorage.setItem('genderinp', genderValue);	
				localStorage.setItem('vGender', 1);	
			}
		});

	if ($('input[name="gender"]:checked').val() == 'Мужской') {
		$('.push').css('display', 'block');
		$('.pull').css('display', 'block');
		$('.lift').css('display', 'none');
		} else {
			$('.push').css('display', 'none');
			$('.pull').css('display', 'none');
			$('.lift').css('display', 'block');
			}
})