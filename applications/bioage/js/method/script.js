$(document).ready(function() {
	$('#stopwatch_button').on('change', function() { 
		if ($("#stopwatch_button").prop("checked")) {  
			$('.stopwatch_container').css("display", "block");
		} else {
			$('.stopwatch_container').css("display", "none");
		}
	});

	$('#options_button').on('change', function() { 
		if ($("#options_button").prop("checked")) {  
			$('.options_container').css("display", "block");
		} else {
			$('.options_container').css("display", "none");
		}
	});

	$('#fs14px').on('click', function(){
		$('body').addClass('.fs14px');
	})

	var newValue;
	$('#styleSwitch').change(function () {
	if (newValue)
		newValue.css('color', 'black');
		
	newValue = $(this).find(':selected');
	newValue.css('color', 'red');
	});
});