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
		progress.css('width', '6.6%');
		progress.attr('aria-valuenow', '6.6');
		progressMessage.text('6%');
	}
	
	if (numValid == 2) {
		progress.css('width', '13.2%');
		progress.attr('aria-valuenow', '13.2');
		progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 3) {
		progress.css('width', '19.8%');
		progress.attr('aria-valuenow', '19.8');
		progressMessage.text('Прогресс: 19%');
	}

	if (numValid == 4) {
		progress.css('width', '26.4%');
		progress.attr('aria-valuenow', '26.4');
		progressMessage.text('Прогресс: 26%');
	}
	
	if (numValid == 5) {
		progress.css('width', '33%');
		progress.attr('aria-valuenow', '33');
		progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 6) {
		progress.css('width', '39.6%');
		progress.attr('aria-valuenow', '39.6');
		progressMessage.text('Прогресс: 39%');
	}
	
	if (numValid == 7) {
		progress.css('width', '46.2%');
		progress.attr('aria-valuenow', '46.2');
		progressMessage.text('Прогресс: 46%');
	}
	
	if (numValid == 8) {
		progress.css('width', '52.8%');
		progress.attr('aria-valuenow', '52.8');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 9) {
		progress.css('width', '59.4%');
		progress.attr('aria-valuenow', '59.4');
		progressMessage.text('Прогресс: 59%');
	}

	if (numValid == 10) {
		progress.css('width', '66%');
		progress.attr('aria-valuenow', '66');
		progressMessage.text('Прогресс: 66%');
	}

	if (numValid == 11) {
		progress.css('width', '72.6%');
		progress.attr('aria-valuenow', '72.6');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 12) {
		progress.css('width', '79.2%');
		progress.attr('aria-valuenow', '79.2');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 13) {
		progress.css('width', '85.8%');
		progress.attr('aria-valuenow', '85.8');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 14) {
		progress.css('width', '92.4%');
		progress.attr('aria-valuenow', '92.4');
		progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 15) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 