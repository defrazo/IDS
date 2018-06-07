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
		progress.css('width', '4.3%');
		progress.attr('aria-valuenow', '4.3');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '8.6%');
		progress.attr('aria-valuenow', '8.6');
		progressMessage.text('');
	}
	
	if (numValid == 3) {
		progress.css('width', '12.9%');
		progress.attr('aria-valuenow', '12.9');
		progressMessage.text('Прогресс: 12%');
	}
	
	if (numValid == 4) {
		progress.css('width', '17.2%');
		progress.attr('aria-valuenow', '17.2');
		progressMessage.text('Прогресс: 17%');
	}
	
	if (numValid == 5) {
		progress.css('width', '21.5%');
		progress.attr('aria-valuenow', '21.5');
		progressMessage.text('Прогресс: 21%');
	}
	
	if (numValid == 6) {
		progress.css('width', '25.8%');
		progress.attr('aria-valuenow', '25.8');
		progressMessage.text('Прогресс: 25%');
	}
	
	if (numValid == 7) {
		progress.css('width', '30.1%');
		progress.attr('aria-valuenow', '30.1');
		progressMessage.text('Прогресс: 30%');
	}
	
	if (numValid == 8) {
		progress.css('width', '34.4%');
		progress.attr('aria-valuenow', '34.4');
		progressMessage.text('Прогресс: 34%');
	}

	if (numValid == 9) {
		progress.css('width', '38.7%');
		progress.attr('aria-valuenow', '38.7');
		progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 10) {
		progress.css('width', '43%');
		progress.attr('aria-valuenow', '43');
		progressMessage.text('Прогресс: 43%');
	}

	if (numValid == 11) {
		progress.css('width', '47.3%');
		progress.attr('aria-valuenow', '47.3');
		progressMessage.text('Прогресс: 47%');
	}

	if (numValid == 12) {
		progress.css('width', '51.6%');
		progress.attr('aria-valuenow', '51.6');
		progressMessage.text('Прогресс: 51%');
	}

	if (numValid == 13) {
		progress.css('width', '55.9%');
		progress.attr('aria-valuenow', '55.9');
		progressMessage.text('Прогресс: 55%');
	}

	if (numValid == 14) {
		progress.css('width', '60.2%');
		progress.attr('aria-valuenow', '60.2');
		progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 15) {
		progress.css('width', '64.5%');
		progress.attr('aria-valuenow', '64.5');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 16) {
		progress.css('width', '68.8%');
		progress.attr('aria-valuenow', '68.8');
		progressMessage.text('Прогресс: 68%');
	}

	if (numValid == 17) {
		progress.css('width', '73.1%');
		progress.attr('aria-valuenow', '73.1');
		progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 18) {
		progress.css('width', '77.4%');
		progress.attr('aria-valuenow', '77.4');
		progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 19) {
		progress.css('width', '81.7%');
		progress.attr('aria-valuenow', '81.7');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 20) {
		progress.css('width', '86%');
		progress.attr('aria-valuenow', '86');
		progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 21) {
		progress.css('width', '90.3%');
		progress.attr('aria-valuenow', '90.3');
		progressMessage.text('Прогресс: 90%');
	}

	if (numValid == 22) {
		progress.css('width', '94.6%');
		progress.attr('aria-valuenow', '94.6');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 23) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 