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
		progress.css('width', '6.66%');
	    progress.attr('aria-valuenow', '6.66');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '13.32%');
	    progress.attr('aria-valuenow', '13.32');
	    progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 3) {
		progress.css('width', '19.98%');
	    progress.attr('aria-valuenow', '19.98');
	    progressMessage.text('Прогресс: 19%');
	}
	
	if (numValid == 4) {
		progress.css('width', '26.64%');
	    progress.attr('aria-valuenow', '26.64');
	    progressMessage.text('Прогресс: 26%');
	}
	
	if (numValid == 5) {
		progress.css('width', '33.3%');
	    progress.attr('aria-valuenow', '33.3');
	    progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 6) {
		progress.css('width', '39.96%');
	    progress.attr('aria-valuenow', '39.96');
	    progressMessage.text('Прогресс: 39%');
	}
	
	if (numValid == 7) {
		progress.css('width', '46.62%');
	    progress.attr('aria-valuenow', '46.62');
	    progressMessage.text('Прогресс: 46%');
	}
	
	if (numValid == 8) {
		progress.css('width', '53.28%');
	    progress.attr('aria-valuenow', '53.28');
	    progressMessage.text('Прогресс: 53%');
	}
	
	if (numValid == 9) {
		progress.css('width', '59.94%');
	    progress.attr('aria-valuenow', '59.94');
	    progressMessage.text('Прогресс: 59%');
	}	
	
	if (numValid == 10) {
		progress.css('width', '66.6%');
	    progress.attr('aria-valuenow', '66.6');
	    progressMessage.text('Прогресс: 66%');
	}
	
	if (numValid == 11) {
		progress.css('width', '73.26%');
	    progress.attr('aria-valuenow', '73.26');
	    progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 12) {
		progress.css('width', '79.92%');
	    progress.attr('aria-valuenow', '79.92');
	    progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 13) {
		progress.css('width', '86.58%');
	    progress.attr('aria-valuenow', '86.58');
	    progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 14) {
		progress.css('width', '93.24%');
	    progress.attr('aria-valuenow', '93.24');
	    progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 15) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
}); 