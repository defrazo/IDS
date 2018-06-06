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
		progress.css('width', '3.8%');
		progress.attr('aria-valuenow', '3.8');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '7.6%');
		progress.attr('aria-valuenow', '7.6');
		progressMessage.text('Прогресс: 7%');
	}
	
	if (numValid == 3) {
		progress.css('width', '11.4%');
		progress.attr('aria-valuenow', '11.4');
		progressMessage.text('Прогресс: 11%');
	}
	
	if (numValid == 4) {
		progress.css('width', '15.2%');
		progress.attr('aria-valuenow', '15.2');
		progressMessage.text('Прогресс: 15%');
	}
	
	if (numValid == 5) {
		progress.css('width', '19%');
		progress.attr('aria-valuenow', '19');
		progressMessage.text('Прогресс: 19%');
	}
	
	if (numValid == 6) {
		progress.css('width', '22.8%');
		progress.attr('aria-valuenow', '22.8');
		progressMessage.text('Прогресс: 22%');
	}
	
	if (numValid == 7) {
		progress.css('width', '26.6%');
		progress.attr('aria-valuenow', '26.6');
		progressMessage.text('Прогресс: 26%');
	}
	
	if (numValid == 8) {
		progress.css('width', '30.4%');
		progress.attr('aria-valuenow', '30.4');
		progressMessage.text('Прогресс: 30%');
	}

	if (numValid == 9) {
		progress.css('width', '34.2%');
		progress.attr('aria-valuenow', '34.2');
		progressMessage.text('Прогресс: 34%');
	}

	if (numValid == 10) {
		progress.css('width', '38%');
		progress.attr('aria-valuenow', '38');
		progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 11) {
		progress.css('width', '41.8%');
		progress.attr('aria-valuenow', '41.8');
		progressMessage.text('Прогресс: 41%');
	}

	if (numValid == 12) {
		progress.css('width', '45.6%');
		progress.attr('aria-valuenow', '45.6');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 13) {
		progress.css('width', '49.4%');
		progress.attr('aria-valuenow', '49.4');
		progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 14) {
		progress.css('width', '53.2%');
		progress.attr('aria-valuenow', '53.2');
		progressMessage.text('Прогресс: 53%');
	}

	if (numValid == 15) {
		progress.css('width', '57%');
		progress.attr('aria-valuenow', '57');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 16) {
		progress.css('width', '60.8%');
		progress.attr('aria-valuenow', '60.8');
		progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 17) {
		progress.css('width', '64.6%');
		progress.attr('aria-valuenow', '64.6');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 18) {
		progress.css('width', '68.4%');
		progress.attr('aria-valuenow', '68.4');
		progressMessage.text('Прогресс: 68%');
	}

	if (numValid == 19) {
		progress.css('width', '72.2%');
		progress.attr('aria-valuenow', '72.2');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 20) {
		progress.css('width', '76%');
		progress.attr('aria-valuenow', '76');
		progressMessage.text('Прогресс: 76%');
	}

	if (numValid == 21) {
		progress.css('width', '79.8%');
		progress.attr('aria-valuenow', '79.8');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 22) {
		progress.css('width', '83.6%');
		progress.attr('aria-valuenow', '83.6');
		progressMessage.text('Прогресс: 83%');
	}

	if (numValid == 23) {
		progress.css('width', '87.4%');
		progress.attr('aria-valuenow', '87.4');
		progressMessage.text('Прогресс: 87%');
	}

	if (numValid == 24) {
		progress.css('width', '91.2%');
		progress.attr('aria-valuenow', '91.2');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 25) {
		progress.css('width', '95%');
		progress.attr('aria-valuenow', '95');
		progressMessage.text('Прогресс: 95%');
	}

	if (numValid == 26) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
});