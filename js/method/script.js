$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($("#stopwatch_button").prop("checked")) {  
			$('.stopwatch_container').css("display", "block");
		} else {
			$('.stopwatch_container').css("display", "none");
		}
	});
});