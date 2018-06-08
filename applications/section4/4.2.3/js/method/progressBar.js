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
		progress.css('width', '4.7%');
		progress.attr('aria-valuenow', '4.7');
		progressMessage.text('4%');
	}
	
	if (numValid == 2) {
		progress.css('width', '9.4%');
		progress.attr('aria-valuenow', '9.4');
		progressMessage.text('9%');
	}
	
	if (numValid == 3) {
		progress.css('width', '14.1%');
		progress.attr('aria-valuenow', '14.1');
		progressMessage.text('Прогресс: 14%');
	}
	
	if (numValid == 4) {
		progress.css('width', '18.8%');
		progress.attr('aria-valuenow', '18.8');
		progressMessage.text('Прогресс: 18%');
	}
	
	if (numValid == 5) {
		progress.css('width', '23.5%');
		progress.attr('aria-valuenow', '23.5');
		progressMessage.text('Прогресс: 23%');
	}
	
	if (numValid == 6) {
		progress.css('width', '28.2%');
		progress.attr('aria-valuenow', '28.2');
		progressMessage.text('Прогресс: 28%');
	}
	
	if (numValid == 7) {
		progress.css('width', '32.9%');
		progress.attr('aria-valuenow', '32.9');
		progressMessage.text('Прогресс: 32%');
	}
	
	if (numValid == 8) {
		progress.css('width', '37.6%');
		progress.attr('aria-valuenow', '37.6');
		progressMessage.text('Прогресс: 37%');
	}

	if (numValid == 9) {
		progress.css('width', '42.3%');
		progress.attr('aria-valuenow', '42.3');
		progressMessage.text('Прогресс: 42%');
	}

	if (numValid == 10) {
		progress.css('width', '47%');
		progress.attr('aria-valuenow', '47');
		progressMessage.text('Прогресс: 47%');
	}

	if (numValid == 11) {
		progress.css('width', '51.7%');
		progress.attr('aria-valuenow', '51.7');
		progressMessage.text('Прогресс: 51.7%');
	}

	if (numValid == 12) {
		progress.css('width', '56.4%');
		progress.attr('aria-valuenow', '56.4');
		progressMessage.text('Прогресс: 56%');
	}

	if (numValid == 13) {
		progress.css('width', '61.1%');
		progress.attr('aria-valuenow', '61.1');
		progressMessage.text('Прогресс: 61%');
	}

	if (numValid == 14) {
		progress.css('width', '65.8%');
		progress.attr('aria-valuenow', '65.8');
		progressMessage.text('Прогресс: 65%');
	}

	if (numValid == 15) {
		progress.css('width', '70.5%');
		progress.attr('aria-valuenow', '70.5');
		progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 16) {
		progress.css('width', '75.2%');
		progress.attr('aria-valuenow', '75.2');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 17) {
		progress.css('width', '79.9%');
		progress.attr('aria-valuenow', '79.9');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 18) {
		progress.css('width', '84.6%');
		progress.attr('aria-valuenow', '84.6');
		progressMessage.text('Прогресс: 84%');
	}

	if (numValid == 19) {
		progress.css('width', '89.3%');
		progress.attr('aria-valuenow', '89.3');
		progressMessage.text('Прогресс: 89%');
	}

	if (numValid == 20) {
		progress.css('width', '95%');
		progress.attr('aria-valuenow', '95');
		progressMessage.text('Прогресс: 95%');
	}

	if (numValid == 21) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
});