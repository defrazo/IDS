$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($('#stopwatch_button').prop('checked'))	$('.stopwatch_container').css('display', 'block');
		else	$('.stopwatch_container').css('display', 'none');
	});

	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
		tmrr = parseInt(localStorage.getItem('tmrinp'));

		console.log(tmrr);
	});
});

$(document).on('ready', function () { //T1
	$('#timer').runner();
	hmin = 0;
	$("#btnstart").click(function() {
		$('#table').css('display', 'table');
		$('#timer').runner('start');
		$('.s1').css('display','none');
	});

	setInterval(function() {
		if ($('#timer').val() >= '30.00') {
			$('#timer').runner('reset');
			hmin++;
			$('#timer').runner('start');
		}
		if (hmin == 5) $('#table').addClass('blink');
		if (hmin == 6) {
			$('#timer').runner('stop');
			get_data();
			$(location).attr('href', 'results.html');
		}
	}, 500);
});