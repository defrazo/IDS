$(document).on('ready click focuson focusout mousemove', function() {
	
	var numValid = 0;

	$('.tab input[required]').each(function() {
	    if (this.validity.valid) numValid++;
	});

	$('.tab select[required]').each(function() {
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
		progress.css('width', '5.5%');
	    progress.attr('aria-valuenow', '5.5');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '1%');
	    progress.attr('aria-valuenow', '11');
	    progressMessage.text('');
	}
	
	if (numValid == 3) {
		progress.css('width', '16.5%');
	    progress.attr('aria-valuenow', '16.5');
	    progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 4) {
		progress.css('width', '22%');
	    progress.attr('aria-valuenow', '22');
	    progressMessage.text('Прогресс: 22%');
	}
	
	if (numValid == 5) {
		progress.css('width', '27.5%');
	    progress.attr('aria-valuenow', '27.5');
	    progressMessage.text('Прогресс: 27%');
	}
	
	if (numValid == 6) {
		progress.css('width', '33%');
	    progress.attr('aria-valuenow', '33');
	    progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 7) {
		progress.css('width', '38.5%');
	    progress.attr('aria-valuenow', '38.5');
	    progressMessage.text('Прогресс: 38%');
	}
	
	if (numValid == 8) {
		progress.css('width', '44%');
	    progress.attr('aria-valuenow', '44');
	    progressMessage.text('Прогресс: 44%');
	}

	if (numValid == 9) {
		progress.css('width', '49.5%');
	    progress.attr('aria-valuenow', '49.5');
	    progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 10) {
		progress.css('width', '55%');
	    progress.attr('aria-valuenow', '55');
	    progressMessage.text('Прогресс: 55%');
	}

	if (numValid == 11) {
		progress.css('width', '60.5%');
	    progress.attr('aria-valuenow', '60.5');
	    progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 12) {
		progress.css('width', '66%');
	    progress.attr('aria-valuenow', '66');
	    progressMessage.text('Прогресс: 66%');
	}

	if (numValid == 13) {
		progress.css('width', '71.5%');
	    progress.attr('aria-valuenow', '71.5');
	    progressMessage.text('Прогресс: 71%');
	}

	if (numValid == 14) {
		progress.css('width', '77%');
	    progress.attr('aria-valuenow', '77');
	    progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 15) {
		progress.css('width', '82.5%');
	    progress.attr('aria-valuenow', '82.5');
	    progressMessage.text('Прогресс: 82%');
	}

	if (numValid == 16) {
		progress.css('width', '88%');
	    progress.attr('aria-valuenow', '88');
	    progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 17) {
		progress.css('width', '93.5%');
	    progress.attr('aria-valuenow', '93.5');
	    progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 18) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});