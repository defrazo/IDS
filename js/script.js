$('#stopwatch_button').on('change', function() { 
	if($("#stopwatch_button").prop("checked")) {
		$("#options_button").prop('checked', false);  
		$('.stopwatch_container').css("display", "block");
		$('.options_container').css("display", "none");
	} else {
		$('.stopwatch_container').css("display", "none");
	}
});

$('#options_button').on('change', function() { 
	if($("#options_button").prop("checked")) { 
		$("#stopwatch_button").prop('checked', false);   
		$('.options_container').css("display", "block");
		$('.stopwatch_container').css("display", "none");
	} else {
		$('.options_container').css("display", "none");
	}
});