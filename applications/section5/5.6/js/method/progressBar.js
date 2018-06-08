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
		progress.css('width', '2.7%');
		progress.attr('aria-valuenow', '2.7');
		progressMessage.text('2%');
	}
	
	if (numValid == 2) {
		progress.css('width', '5.4%');
		progress.attr('aria-valuenow', '5.4');
		progressMessage.text('5%');
	}
	
	if (numValid == 3) {
		progress.css('width', '8.1%');
		progress.attr('aria-valuenow', '8.1');
		progressMessage.text('8%');
	}
	
	if (numValid == 4) {
		progress.css('width', '10.8%');
		progress.attr('aria-valuenow', '10.8');
		progressMessage.text('10%');
	}
	
	if (numValid == 5) {
		progress.css('width', '13.5%');
		progress.attr('aria-valuenow', '13.5');
		progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 6) {
		progress.css('width', '16.2%');
		progress.attr('aria-valuenow', '16.2');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 7) {
		progress.css('width', '18.9%');
		progress.attr('aria-valuenow', '18.9');
		progressMessage.text('Прогресс: 18%');
	}
	
	if (numValid == 8) {
		progress.css('width', '21.6%');
		progress.attr('aria-valuenow', '21.6');
		progressMessage.text('Прогресс: 21%');
	}

	if (numValid == 9) {
		progress.css('width', '24.3%');
		progress.attr('aria-valuenow', '24.3');
		progressMessage.text('Прогресс: 24%');
	}

	if (numValid == 10) {
		progress.css('width', '27%');
		progress.attr('aria-valuenow', '27');
		progressMessage.text('Прогресс: 27%');
	}

	if (numValid == 11) {
		progress.css('width', '29.7%');
		progress.attr('aria-valuenow', '29.7');
		progressMessage.text('Прогресс: 29%');
	}

	if (numValid == 12) {
		progress.css('width', '32.4%');
		progress.attr('aria-valuenow', '32.4');
		progressMessage.text('Прогресс: 32%');
	}

	if (numValid == 13) {
		progress.css('width', '35.1%');
		progress.attr('aria-valuenow', '35.1');
		progressMessage.text('Прогресс: 35%');
	}

	if (numValid == 14) {
		progress.css('width', '37.8%');
		progress.attr('aria-valuenow', '37.8');
		progressMessage.text('Прогресс: 37%');
	}

	if (numValid == 15) {
		progress.css('width', '40.5%');
		progress.attr('aria-valuenow', '40.5');
		progressMessage.text('Прогресс: 40%');
	}

	if (numValid == 16) {
		progress.css('width', '43.2%');
		progress.attr('aria-valuenow', '43.2');
		progressMessage.text('Прогресс: 43%');
	}

	if (numValid == 17) {
		progress.css('width', '45.9%');
		progress.attr('aria-valuenow', '45.9');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 18) {
		progress.css('width', '48.6%');
		progress.attr('aria-valuenow', '48.6');
		progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 19) {
		progress.css('width', '51.3%');
		progress.attr('aria-valuenow', '51.3');
		progressMessage.text('Прогресс: 51%');
	}

	if (numValid == 20) {
		progress.css('width', '54%');
		progress.attr('aria-valuenow', '54');
		progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 21) {
		progress.css('width', '56.7%');
		progress.attr('aria-valuenow', '56.7');
		progressMessage.text('Прогресс: 56%');
	}

	if (numValid == 22) {
		progress.css('width', '59.4%');
		progress.attr('aria-valuenow', '59.4');
		progressMessage.text('Прогресс: 59%');
	}

	if (numValid == 23) {
		progress.css('width', '62.1%');
		progress.attr('aria-valuenow', '62.1');
		progressMessage.text('Прогресс: 62%');
	}

	if (numValid == 24) {
		progress.css('width', '64.8%');
		progress.attr('aria-valuenow', '64.8');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 25) {
		progress.css('width', '67.5%');
		progress.attr('aria-valuenow', '67.5');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 26) {
		progress.css('width', '70.2%');
		progress.attr('aria-valuenow', '70.2');
		progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 27) {
		progress.css('width', '72.9%');
		progress.attr('aria-valuenow', '72.9');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 28) {
		progress.css('width', '75.6%');
		progress.attr('aria-valuenow', '75.6');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 29) {
		progress.css('width', '78.3%');
		progress.attr('aria-valuenow', '78.3');
		progressMessage.text('Прогресс: 78%');
	}

	if (numValid == 30) {
		progress.css('width', '81%');
		progress.attr('aria-valuenow', '81');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 31) {
		progress.css('width', '83.7%');
		progress.attr('aria-valuenow', '83.7');
		progressMessage.text('Прогресс: 83%');
	}

	if (numValid == 32) {
		progress.css('width', '86.4%');
		progress.attr('aria-valuenow', '86.4');
		progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 33) {
		progress.css('width', '89.1%');
		progress.attr('aria-valuenow', '89.1');
		progressMessage.text('Прогресс: 89%');
	}

	if (numValid == 34) {
		progress.css('width', '91.8%');
		progress.attr('aria-valuenow', '91.8');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 35) {
		progress.css('width', '94.5%');
		progress.attr('aria-valuenow', '94.5');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 36) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
});