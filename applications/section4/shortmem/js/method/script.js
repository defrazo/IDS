$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($('#stopwatch_button').prop('checked'))	$('.stopwatch_container').css('display', 'block');
		else	$('.stopwatch_container').css('display', 'none');
	});

	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
	});
});

$(document).on('ready', function () { //T1
	$('#timer').runner();
	$("#btnstart").click(function() {
		$('#table1').css('display', 'table');
		$('#timer').runner('start');
		$('.s1').css('display','none');

	setInterval(function() {
		if ($('#timer').val() >= '17.00') $('#table1').addClass('blink');
		if ($('#timer').val() >= '20.00') {
			$('#table1').css('display', 'none'); 
			$('#timer').runner('stop');
			$('#table1c').css('display', 'table');
		}
	}, 500);
});
});