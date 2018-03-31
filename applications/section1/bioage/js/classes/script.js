$(document).ready(function() { // Открытие контейнера опций по переключателю
	$('#options_button').on('change', function() { 
		if ($('#options_button').prop('checked'))	$('.options_container').css('display', 'block');
		else	$('.options_container').css('display', 'none');
	});
});