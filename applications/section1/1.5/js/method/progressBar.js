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
		progress.css('width', '3.2%');
	    progress.attr('aria-valuenow', '3.2');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '6.4%');
	    progress.attr('aria-valuenow', '6.4');
	    progressMessage.text('Прогресс: 6%');
	}
	
	if (numValid == 3) {
		progress.css('width', '9.6%');
	    progress.attr('aria-valuenow', '9.6');
	    progressMessage.text('Прогресс: 9%');
	}
	
	if (numValid == 4) {
		progress.css('width', '12.8%');
	    progress.attr('aria-valuenow', '12.8');
	    progressMessage.text('Прогресс: 12%');
	}
	
	if (numValid == 5) {
		progress.css('width', '16%');
	    progress.attr('aria-valuenow', '16');
	    progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 6) {
		progress.css('width', '19.2%');
	    progress.attr('aria-valuenow', '19.2');
	    progressMessage.text('Прогресс: 19%');
	}
	
	if (numValid == 7) {
		progress.css('width', '22.4%');
	    progress.attr('aria-valuenow', '22.4');
	    progressMessage.text('Прогресс: 22%');
	}
	
	if (numValid == 8) {
		progress.css('width', '25.6%');
	    progress.attr('aria-valuenow', '25.6');
	    progressMessage.text('Прогресс: 25%');
	}

	if (numValid == 9) {
		progress.css('width', '28.8%');
	    progress.attr('aria-valuenow', '28.8');
	    progressMessage.text('Прогресс: 28%');
	}

	if (numValid == 10) {
		progress.css('width', '32%');
	    progress.attr('aria-valuenow', '32');
	    progressMessage.text('Прогресс: 32%');
	}

	if (numValid == 11) {
		progress.css('width', '35.2%');
	    progress.attr('aria-valuenow', '35.2');
	    progressMessage.text('Прогресс: 35%');
	}

	if (numValid == 12) {
		progress.css('width', '38.4%');
	    progress.attr('aria-valuenow', '38.4');
	    progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 13) {
		progress.css('width', '41.6%');
	    progress.attr('aria-valuenow', '41.6');
	    progressMessage.text('Прогресс: 41%');
	}

	if (numValid == 14) {
		progress.css('width', '44.8%');
	    progress.attr('aria-valuenow', '44.8');
	    progressMessage.text('Прогресс: 44%');
	}

	if (numValid == 15) {
		progress.css('width', '48%');
	    progress.attr('aria-valuenow', '48');
	    progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 16) {
		progress.css('width', '51.2%');
	    progress.attr('aria-valuenow', '51.2');
	    progressMessage.text('Прогресс: 51%');
	}

	if (numValid == 17) {
		progress.css('width', '54.4%');
	    progress.attr('aria-valuenow', '54.4');
	    progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 18) {
		progress.css('width', '57.6%');
	    progress.attr('aria-valuenow', '57.6');
	    progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 19) {
		progress.css('width', '60.8%');
	    progress.attr('aria-valuenow', '60.8');
	    progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 20) {
		progress.css('width', '64%');
	    progress.attr('aria-valuenow', '64');
	    progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 21) {
		progress.css('width', '67.2%');
	    progress.attr('aria-valuenow', '67.2');
	    progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 22) {
		progress.css('width', '70.4%');
	    progress.attr('aria-valuenow', '70.4');
	    progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 23) {
		progress.css('width', '73.6%');
	    progress.attr('aria-valuenow', '73.6');
	    progressMessage.text('Прогресс: 73.6%');
	}

	if (numValid == 24) {
		progress.css('width', '76.8%');
	    progress.attr('aria-valuenow', '76.8');
	    progressMessage.text('Прогресс: 76.8%');
	}

	if (numValid == 25) {
		progress.css('width', '80%');
	    progress.attr('aria-valuenow', '80');
	    progressMessage.text('Прогресс: 80%');
	}

	if (numValid == 26) {
		progress.css('width', '83.2%');
	    progress.attr('aria-valuenow', '83.2');
	    progressMessage.text('Прогресс: 83%');
	}

	if (numValid == 27) {
		progress.css('width', '86.4%');
	    progress.attr('aria-valuenow', '86.4');
	    progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 28) {
		progress.css('width', '89.6%');
	    progress.attr('aria-valuenow', '89.6');
	    progressMessage.text('Прогресс: 89%');
	}

	if (numValid == 29) {
		progress.css('width', '92.8%');
	    progress.attr('aria-valuenow', '92.8');
	    progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 30) {
		progress.css('width', '96%');
	    progress.attr('aria-valuenow', '96');
	    progressMessage.text('Прогресс: 96%');
	}

	if (numValid == 31) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});