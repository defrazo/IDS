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
		progress.css('width', '8.3%');
		progress.attr('aria-valuenow', '8.3');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '16.6%');
		progress.attr('aria-valuenow', '16.6');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 3) {
		progress.css('width', '25%');
		progress.attr('aria-valuenow', '25');
		progressMessage.text('Прогресс: 25%');
	}
	
	if (numValid == 4) {
		progress.css('width', '33.3%');
		progress.attr('aria-valuenow', '33.3');
		progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 5) {
		progress.css('width', '41.6%');
		progress.attr('aria-valuenow', '41.6');
		progressMessage.text('Прогресс: 41%');
	}
	
	if (numValid == 6) {
		progress.css('width', '49.9%');
		progress.attr('aria-valuenow', '49.9');
		progressMessage.text('Прогресс: 49%');
	}
	
	if (numValid == 7) {
		progress.css('width', '58.3%');
		progress.attr('aria-valuenow', '58.3');
		progressMessage.text('Прогресс: 58%');
	}
	
	if (numValid == 8) {
		progress.css('width', '66.6%');
		progress.attr('aria-valuenow', '66.6');
		progressMessage.text('Прогресс: 66%');
	}	

	if (numValid == 9) {
		progress.css('width', '74.9%');
		progress.attr('aria-valuenow', '74.9');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 10) {
		progress.css('width', '83.3%');
		progress.attr('aria-valuenow', '83.3');
		progressMessage.text('Прогресс: 83%');
	}

	if (numValid == 11) {
		progress.css('width', '91.6%');
		progress.attr('aria-valuenow', '91.6');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 12) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}	
}); 