$(document).on('ready click focuson focusout mousemove', function() {
	
	var numValid = 0;
	
	$('.tab input[required]').each(function() {
		if (this.validity.valid) numValid++;
	});

	$('.select input[required]').each(function() {
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
		progress.css('width', '7.1%');
		progress.attr('aria-valuenow', '7.1');
		progressMessage.text('7%');
	}
	
	if (numValid == 2) {
		progress.css('width', '14.2%');
		progress.attr('aria-valuenow', '14.2');
		progressMessage.text('Прогресс: 14%');
	}
	
	if (numValid == 3) {
		progress.css('width', '21.3%');
		progress.attr('aria-valuenow', '21.3');
		progressMessage.text('Прогресс: 21%');
	}
	
	if (numValid == 4) {
		progress.css('width', '28.4%');
		progress.attr('aria-valuenow', '28.4');
		progressMessage.text('Прогресс: 28%');
	}
	
	if (numValid == 5) {
		progress.css('width', '35.5%');
		progress.attr('aria-valuenow', '35.5');
		progressMessage.text('Прогресс: 35%');
	}
	
	if (numValid == 6) {
		progress.css('width', '46.2%');
		progress.attr('aria-valuenow', '46.2');
		progressMessage.text('Прогресс: 46%');
	}
	
	if (numValid == 7) {
		progress.css('width', '49.7%');
		progress.attr('aria-valuenow', '49.7');
		progressMessage.text('Прогресс: 49%');
	}
	
	if (numValid == 8) {
		progress.css('width', '56.8%');
		progress.attr('aria-valuenow', '56.8');
		progressMessage.text('Прогресс: 56%');
	}	

	if (numValid == 9) {
		progress.css('width', '63.9%');
		progress.attr('aria-valuenow', '63.9');
		progressMessage.text('Прогресс: 63%');
	}

	if (numValid == 10) {
		progress.css('width', '71%');
		progress.attr('aria-valuenow', '71');
		progressMessage.text('Прогресс: 71%');
	}

	if (numValid == 11) {
		progress.css('width', '78.1%');
		progress.attr('aria-valuenow', '78.1');
		progressMessage.text('Прогресс: 78%');
	}

	if (numValid == 12) {
		progress.css('width', '85.2%');
		progress.attr('aria-valuenow', '85.2');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 13) {
		progress.css('width', '92.3%');
		progress.attr('aria-valuenow', '92.3');
		progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 13) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}		
}); 