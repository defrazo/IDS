$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($('#stopwatch_button').prop('checked'))	$('.stopwatch_container').css('display', 'block');
		else	$('.stopwatch_container').css('display', 'none');
	});

	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
	});

	$('.blink1').mouseover(function() {
		$('.blink1').removeClass('blink1');
	});

	$('.blink2').mouseover(function() {
		$('.blink2').removeClass('blink2');
	});

	$('.blink3').mouseover(function() {
		$('.blink3').removeClass('blink3');
	});

	$('.blink4').mouseover(function() {
		$('.blink4').removeClass('blink4');
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

	$('input[name="group"]').change(function() {
		var groupValue = $('input[name="group"]:checked').val();
			if (groupValue) {
				localStorage.setItem('groupinp', groupValue);	
				localStorage.setItem('vgroup', 1);	
			}
		});

	if ($('input[name="group"]:checked').val() == 'Специальная') {
		$('.spec').css('display', 'block');
		$('.nospec').css('display', 'none');
		} else {
			$('.spec').css('display', 'none');
			$('.nospec').css('display', 'block');
			}
})