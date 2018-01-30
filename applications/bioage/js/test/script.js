$(document).ready(function() {
	$('.blink').mouseover(function() {
		$('.blink').removeClass('blink');
	});

	$('#options_button').on('change', function() { 
		if ($("#options_button").prop("checked")) {  
			$('.options_container').css("display", "block");
		} else {
			$('.options_container').css("display", "none");
		}
	});
});