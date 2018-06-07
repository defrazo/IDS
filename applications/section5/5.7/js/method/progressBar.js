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
		progress.css('width', '3.5%');
	    progress.attr('aria-valuenow', '3.5');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '7%');
	    progress.attr('aria-valuenow', '7');
	    progressMessage.text('');
	}
	
	if (numValid == 3) {
		progress.css('width', '10.5%');
	    progress.attr('aria-valuenow', '10.5');
	    progressMessage.text('');
	}
	
	if (numValid == 4) {
		progress.css('width', '14%');
	    progress.attr('aria-valuenow', '14');
	    progressMessage.text('Прогресс: 14%');
	}
	
	if (numValid == 5) {
		progress.css('width', '17.5%');
	    progress.attr('aria-valuenow', '17.5');
	    progressMessage.text('Прогресс: 17%');
	}
	
	if (numValid == 6) {
		progress.css('width', '21%');
	    progress.attr('aria-valuenow', '21');
	    progressMessage.text('Прогресс: 21%');
	}
	
	if (numValid == 7) {
		progress.css('width', '24.5%');
	    progress.attr('aria-valuenow', '24.5');
	    progressMessage.text('Прогресс: 24%');
	}
	
	if (numValid == 8) {
		progress.css('width', '28%');
	    progress.attr('aria-valuenow', '28');
	    progressMessage.text('Прогресс: 28%');
	}

	if (numValid == 9) {
		progress.css('width', '31.5%');
	    progress.attr('aria-valuenow', '31.5');
	    progressMessage.text('Прогресс: 31%');
	}

	if (numValid == 10) {
		progress.css('width', '35%');
	    progress.attr('aria-valuenow', '35');
	    progressMessage.text('Прогресс: 35%');
	}

	if (numValid == 11) {
		progress.css('width', '38.5%');
	    progress.attr('aria-valuenow', '38.5');
	    progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 12) {
		progress.css('width', '42%');
	    progress.attr('aria-valuenow', '42');
	    progressMessage.text('Прогресс: 42%');
	}

	if (numValid == 13) {
		progress.css('width', '45.5%');
	    progress.attr('aria-valuenow', '45.5');
	    progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 14) {
		progress.css('width', '49%');
	    progress.attr('aria-valuenow', '49');
	    progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 15) {
		progress.css('width', '52.5%');
	    progress.attr('aria-valuenow', '52.5');
	    progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 16) {
		progress.css('width', '56%');
	    progress.attr('aria-valuenow', '56');
	    progressMessage.text('Прогресс: 56%');
	}

	if (numValid == 17) {
		progress.css('width', '59.5%');
	    progress.attr('aria-valuenow', '59.5');
	    progressMessage.text('Прогресс: 59%');
	}

	if (numValid == 18) {
		progress.css('width', '63%');
	    progress.attr('aria-valuenow', '63');
	    progressMessage.text('Прогресс: 63%');
	}

	if (numValid == 19) {
		progress.css('width', '66.5%');
	    progress.attr('aria-valuenow', '66.5');
	    progressMessage.text('Прогресс: 66%');
	}

	if (numValid == 20) {
		progress.css('width', '70%');
	    progress.attr('aria-valuenow', '70');
	    progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 21) {
		progress.css('width', '73.5%');
	    progress.attr('aria-valuenow', '73.5');
	    progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 22) {
		progress.css('width', '77%');
	    progress.attr('aria-valuenow', '77');
	    progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 23) {
		progress.css('width', '80.5%');
	    progress.attr('aria-valuenow', '80.5');
	    progressMessage.text('Прогресс: 80%');
	}

	if (numValid == 24) {
		progress.css('width', '84%');
	    progress.attr('aria-valuenow', '84');
	    progressMessage.text('Прогресс: 84%');
	}

	if (numValid == 25) {
		progress.css('width', '87.5%');
	    progress.attr('aria-valuenow', '87.5');
	    progressMessage.text('Прогресс: 87%');
	}

	if (numValid == 26) {
		progress.css('width', '93.5%');
	    progress.attr('aria-valuenow', '93.5');
	    progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 27) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});