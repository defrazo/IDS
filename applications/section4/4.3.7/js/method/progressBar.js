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
		progress.css('width', '4.1%');
		progress.attr('aria-valuenow', '4.1');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '8.2%');
		progress.attr('aria-valuenow', '8.2');
		progressMessage.text('');
	}
	
	if (numValid == 3) {
		progress.css('width', '12.3%');
		progress.attr('aria-valuenow', '12.3');
		progressMessage.text('Прогресс: 12%');
	}
	
	if (numValid == 4) {
		progress.css('width', '16.4%');
		progress.attr('aria-valuenow', '16.4');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 5) {
		progress.css('width', '20.5%');
		progress.attr('aria-valuenow', '20.5');
		progressMessage.text('Прогресс: 20%');
	}
	
	if (numValid == 6) {
		progress.css('width', '24.6%');
		progress.attr('aria-valuenow', '24.6');
		progressMessage.text('Прогресс: 24%');
	}
	
	if (numValid == 7) {
		progress.css('width', '28.7%');
		progress.attr('aria-valuenow', '28.7');
		progressMessage.text('Прогресс: 28%');
	}
	
	if (numValid == 8) {
		progress.css('width', '32.8%');
		progress.attr('aria-valuenow', '32.8');
		progressMessage.text('Прогресс: 32%');
	}

	if (numValid == 9) {
		progress.css('width', '36.9%');
		progress.attr('aria-valuenow', '36.9');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 10) {
		progress.css('width', '41%');
		progress.attr('aria-valuenow', '41');
		progressMessage.text('Прогресс: 41%');
	}

	if (numValid == 11) {
		progress.css('width', '45.1%');
		progress.attr('aria-valuenow', '45.1');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 12) {
		progress.css('width', '49.2%');
		progress.attr('aria-valuenow', '49.2');
		progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 13) {
		progress.css('width', '53.3%');
		progress.attr('aria-valuenow', '53.3');
		progressMessage.text('Прогресс: 53%');
	}

	if (numValid == 14) {
		progress.css('width', '57.4%');
		progress.attr('aria-valuenow', '57.4');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 15) {
		progress.css('width', '61.5%');
		progress.attr('aria-valuenow', '61.5');
		progressMessage.text('Прогресс: 61%');
	}

	if (numValid == 16) {
		progress.css('width', '65.6%');
		progress.attr('aria-valuenow', '65.6');
		progressMessage.text('Прогресс: 65%');
	}

	if (numValid == 17) {
		progress.css('width', '69.7%');
		progress.attr('aria-valuenow', '69.7');
		progressMessage.text('Прогресс: 69%');
	}

	if (numValid == 18) {
		progress.css('width', '73.8%');
		progress.attr('aria-valuenow', '73.8');
		progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 19) {
		progress.css('width', '77.9%');
		progress.attr('aria-valuenow', '77.9');
		progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 20) {
		progress.css('width', '82%');
		progress.attr('aria-valuenow', '82');
		progressMessage.text('Прогресс: 82%');
	}

	if (numValid == 21) {
		progress.css('width', '86.1%');
		progress.attr('aria-valuenow', '86.1');
		progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 22) {
		progress.css('width', '90.2%');
		progress.attr('aria-valuenow', '90.2');
		progressMessage.text('Прогресс: 90%');
	}

	if (numValid == 23) {
		progress.css('width', '94.3%');
		progress.attr('aria-valuenow', '94.3');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 24) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 