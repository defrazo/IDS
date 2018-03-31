 //Проверяет заполнение полей и заполняет ProgressBar
$(document).on('click focuson focusout mousemove', function() {
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
		progress.css('width', '6.25%');
	    progress.attr('aria-valuenow', '6.25');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '12.5%');
	    progress.attr('aria-valuenow', '12.5');
	    progressMessage.text('Прогресс: 12.5%');
	}
	
	if (numValid == 3) {
		progress.css('width', '18.75%');
	    progress.attr('aria-valuenow', '18.75');
	    progressMessage.text('Прогресс: 18.75%');
	}
	
	if (numValid == 4) {
		progress.css('width', '25%');
	    progress.attr('aria-valuenow', '25');
	    progressMessage.text('Прогресс: 25%');
	}
	
	if (numValid == 5) {
		progress.css('width', '31.25%');
	    progress.attr('aria-valuenow', '31.25');
	    progressMessage.text('Прогресс: 31.25%');
	}
	
	if (numValid == 6) {
		progress.css('width', '37.5%');
	    progress.attr('aria-valuenow', '37.5');
	    progressMessage.text('Прогресс: 37.5%');
	}
	
	if (numValid == 7) {
		progress.css('width', '43.75%');
	    progress.attr('aria-valuenow', '43.75');
	    progressMessage.text('Прогресс: 43.75%');
	}
	
	if (numValid == 8) {
		progress.css('width', '50%');
	    progress.attr('aria-valuenow', '50');
	    progressMessage.text('Прогресс: 50%');
	}
	
	if (numValid == 9) {
		progress.css('width', '56.25%');
	    progress.attr('aria-valuenow', '56.25');
	    progressMessage.text('Прогресс: 56.25%');
	}	
	
	if (numValid == 10) {
		progress.css('width', '62.5%');
	    progress.attr('aria-valuenow', '62.5');
	    progressMessage.text('Прогресс: 62.5%');
	}
	
	if (numValid == 11) {
		progress.css('width', '68.75%');
	    progress.attr('aria-valuenow', '68.75');
	    progressMessage.text('Прогресс: 68.75%');
	}

	if (numValid == 12) {
		progress.css('width', '75%');
	    progress.attr('aria-valuenow', '75');
	    progressMessage.text('Прогресс: 75%');
	}	

	if (numValid == 13) {
		progress.css('width', '81.25%');
	    progress.attr('aria-valuenow', '81.25');
	    progressMessage.text('Прогресс: 81.25%');
	}	

	if (numValid == 14) {
		progress.css('width', '87.5%');
	    progress.attr('aria-valuenow', '87.5');
	    progressMessage.text('Прогресс: 87.5%');
	}

	if (numValid == 15) {
		progress.css('width', '99%');
	    progress.attr('aria-valuenow', '99');
	    progressMessage.text('Прогресс: 99%');
	}

	if (numValid == 16) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});