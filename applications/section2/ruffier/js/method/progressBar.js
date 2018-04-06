//Проверяет заполнение полей и заполняет ProgressBar
$(document).on('ready click focuson focusout mousemove', function() {
	var numValid = 0;
	
	$('.tab input[required]').each(function() {
	    if (this.validity.valid) numValid++;
	});

	var progress = $('.progress-bar'),
	    progressMessage = $('.progress-message');

	if (numValid == 0) {
		progress.css('width', '0%');
	    progress.attr('aria-valuenow', '0');
	    progressMessage.text('');
	}

	if (numValid == 1) {
		progress.css('width', '12.5%');
	    progress.attr('aria-valuenow', '12.5');
	    progressMessage.text('Прогресс: 12.5%');
	}
	
	if (numValid == 2) {
		progress.css('width', '25%');
	    progress.attr('aria-valuenow', '25');
	    progressMessage.text('Прогресс: 25%');
	}
	
	if (numValid == 3) {
		progress.css('width', '37.5%');
	    progress.attr('aria-valuenow', '37.5');
	    progressMessage.text('Прогресс: 37.5%');
	}
	
	if (numValid == 4) {
		progress.css('width', '50%');
	    progress.attr('aria-valuenow', '50');
	    progressMessage.text('Прогресс: 50%');
	}
	
	if (numValid == 5) {
		progress.css('width', '62.5%');
	    progress.attr('aria-valuenow', '62.5');
	    progressMessage.text('Прогресс: 62.5%');
	}
	
	if (numValid == 6) {
		progress.css('width', '75%');
	    progress.attr('aria-valuenow', '75');
	    progressMessage.text('Прогресс: 75%');
	}
	
	if (numValid == 7) {
		progress.css('width', '87.5%');
	    progress.attr('aria-valuenow', '87.5');
	    progressMessage.text('Прогресс: 87.5%');
	}
	
	if (numValid == 8) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});