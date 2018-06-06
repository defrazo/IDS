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
		progress.css('width', '4.5%');
		progress.attr('aria-valuenow', '4.5');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '9%');
		progress.attr('aria-valuenow', '9');
		progressMessage.text('Прогресс: 9%');
	}
	
	if (numValid == 3) {
		progress.css('width', '13.5%');
		progress.attr('aria-valuenow', '13.5');
		progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 4) {
		progress.css('width', '18%');
		progress.attr('aria-valuenow', '18');
		progressMessage.text('Прогресс: 18%');
	}
	
	if (numValid == 5) {
		progress.css('width', '22.5%');
		progress.attr('aria-valuenow', '22.5');
		progressMessage.text('Прогресс: 22%');
	}
	
	if (numValid == 6) {
		progress.css('width', '27%');
		progress.attr('aria-valuenow', '27');
		progressMessage.text('Прогресс: 27%');
	}
	
	if (numValid == 7) {
		progress.css('width', '31.5%');
		progress.attr('aria-valuenow', '31.5');
		progressMessage.text('Прогресс: 31%');
	}
	
	if (numValid == 8) {
		progress.css('width', '36%');
		progress.attr('aria-valuenow', '36');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 9) {
		progress.css('width', '40.5%');
		progress.attr('aria-valuenow', '40.5');
		progressMessage.text('Прогресс: 40%');
	}

	if (numValid == 10) {
		progress.css('width', '45%');
		progress.attr('aria-valuenow', '45');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 11) {
		progress.css('width', '49.5%');
		progress.attr('aria-valuenow', '49.5');
		progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 12) {
		progress.css('width', '54%');
		progress.attr('aria-valuenow', '54');
		progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 13) {
		progress.css('width', '58.5%');
		progress.attr('aria-valuenow', '58.5');
		progressMessage.text('Прогресс: 58%');
	}

	if (numValid == 14) {
		progress.css('width', '63%');
		progress.attr('aria-valuenow', '63');
		progressMessage.text('Прогресс: 63%');
	}

	if (numValid == 15) {
		progress.css('width', '67.5%');
		progress.attr('aria-valuenow', '67.5');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 16) {
		progress.css('width', '72%');
		progress.attr('aria-valuenow', '72');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 17) {
		progress.css('width', '76.5%');
		progress.attr('aria-valuenow', '76.5');
		progressMessage.text('Прогресс: 76%');
	}

	if (numValid == 18) {
		progress.css('width', '81%');
		progress.attr('aria-valuenow', '81');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 19) {
		progress.css('width', '85.5%');
		progress.attr('aria-valuenow', '85.5');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 20) {
		progress.css('width', '90%');
		progress.attr('aria-valuenow', '90');
		progressMessage.text('Прогресс: 90%');
	}

	if (numValid == 21) {
		progress.css('width', '94.5%');
		progress.attr('aria-valuenow', '94.5');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 22) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 