$(document).on('ready', function () {
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