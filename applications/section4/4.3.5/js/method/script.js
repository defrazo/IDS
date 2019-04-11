$(document).on('ready mousemove change', function() {
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
				$('.nb').css('display', 'block');
			}
		}, 500);
	});
});