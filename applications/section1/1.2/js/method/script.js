$(document).ready(function() {
	$('.blink1').mouseover(function() {$('.blink1').removeClass('blink1');});

	$('.blink2').mouseover(function() {$('.blink2').removeClass('blink2');});

	$('.blink3').mouseover(function() {$('.blink3').removeClass('blink3');});

	$('.blink4').mouseover(function() {$('.blink4').removeClass('blink4');});
});

$(document).mousemove(function() {
	$('input[name="gender"]').change(function() {
		var genderValue = $('input[name="gender"]:checked').val();
			if (genderValue) localStorage.setItem('genderinp', genderValue);
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
		if (groupValue) localStorage.setItem('groupinp', groupValue);	
	});

	if ($('input[name="group"]:checked').val() == 'Специальная') {
		$('.spec').css('display', 'block');
		$('.nospec').css('display', 'none');
	} else {
		$('.spec').css('display', 'none');
		$('.nospec').css('display', 'block');
	}
});