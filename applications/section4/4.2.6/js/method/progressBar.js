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
		progress.css('width', '2.4%');
		progress.attr('aria-valuenow', '2.4');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '4.8%');
		progress.attr('aria-valuenow', '4.8');
		progressMessage.text('Прогресс: 4%');
	}
	
	if (numValid == 3) {
		progress.css('width', '7.2%');
		progress.attr('aria-valuenow', '7.2');
		progressMessage.text('Прогресс: 7%');
	}
	
	if (numValid == 4) {
		progress.css('width', '9.6%');
		progress.attr('aria-valuenow', '9.6');
		progressMessage.text('Прогресс: 9%');
	}
	
	if (numValid == 5) {
		progress.css('width', '12%');
		progress.attr('aria-valuenow', '12');
		progressMessage.text('Прогресс: 12%');
	}
	
	if (numValid == 6) {
		progress.css('width', '14.4%');
		progress.attr('aria-valuenow', '14.4');
		progressMessage.text('Прогресс: 14%');
	}
	
	if (numValid == 7) {
		progress.css('width', '16.8%');
		progress.attr('aria-valuenow', '16.8');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 8) {
		progress.css('width', '19.2%');
		progress.attr('aria-valuenow', '19.2');
		progressMessage.text('Прогресс: 19%');
	}

	if (numValid == 9) {
		progress.css('width', '21.6%');
		progress.attr('aria-valuenow', '21.6');
		progressMessage.text('Прогресс: 21%');
	}

	if (numValid == 10) {
		progress.css('width', '24%');
		progress.attr('aria-valuenow', '24');
		progressMessage.text('Прогресс: 24%');
	}

	if (numValid == 11) {
		progress.css('width', '26.4%');
		progress.attr('aria-valuenow', '26.4');
		progressMessage.text('Прогресс: 26%');
	}

	if (numValid == 12) {
		progress.css('width', '28.8%');
		progress.attr('aria-valuenow', '28.8');
		progressMessage.text('Прогресс: 28%');
	}

	if (numValid == 13) {
		progress.css('width', '31.2%');
		progress.attr('aria-valuenow', '31.2');
		progressMessage.text('Прогресс: 31%');
	}

	if (numValid == 14) {
		progress.css('width', '33.6%');
		progress.attr('aria-valuenow', '33.6');
		progressMessage.text('Прогресс: 33%');
	}

	if (numValid == 15) {
		progress.css('width', '36%');
		progress.attr('aria-valuenow', '36');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 16) {
		progress.css('width', '38.4%');
		progress.attr('aria-valuenow', '38.4');
		progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 17) {
		progress.css('width', '40.8%');
		progress.attr('aria-valuenow', '40.8');
		progressMessage.text('Прогресс: 40%');
	}

	if (numValid == 18) {
		progress.css('width', '43.2%');
		progress.attr('aria-valuenow', '43.2');
		progressMessage.text('Прогресс: 43%');
	}

	if (numValid == 19) {
		progress.css('width', '45.6%');
		progress.attr('aria-valuenow', '45.6');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 20) {
		progress.css('width', '48%');
		progress.attr('aria-valuenow', '48');
		progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 21) {
		progress.css('width', '50.4%');
		progress.attr('aria-valuenow', '50.4');
		progressMessage.text('Прогресс: 50%');
	}

	if (numValid == 22) {
		progress.css('width', '52.8%');
		progress.attr('aria-valuenow', '52.8');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 23) {
		progress.css('width', '55.2%');
		progress.attr('aria-valuenow', '55.2');
		progressMessage.text('Прогресс: 55%');
	}

	if (numValid == 24) {
		progress.css('width', '57.6%');
		progress.attr('aria-valuenow', '57.6');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 25) {
		progress.css('width', '60%');
		progress.attr('aria-valuenow', '60');
		progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 26) {
		progress.css('width', '62.4%');
		progress.attr('aria-valuenow', '62.4');
		progressMessage.text('Прогресс: 62%');
	}

	if (numValid == 27) {
		progress.css('width', '64.8%');
		progress.attr('aria-valuenow', '64.8');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 28) {
		progress.css('width', '67.2%');
		progress.attr('aria-valuenow', '67.2');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 29) {
		progress.css('width', '69.6%');
		progress.attr('aria-valuenow', '69.6');
		progressMessage.text('Прогресс: 69%');
	}

	if (numValid == 30) {
		progress.css('width', '72%');
		progress.attr('aria-valuenow', '72');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 31) {
		progress.css('width', '74.4%');
		progress.attr('aria-valuenow', '74.4');
		progressMessage.text('Прогресс: 74%');
	}

	if (numValid == 32) {
		progress.css('width', '76.8%');
		progress.attr('aria-valuenow', '76.8');
		progressMessage.text('Прогресс: 76%');
	}

	if (numValid == 33) {
		progress.css('width', '79.2%');
		progress.attr('aria-valuenow', '79.2');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 34) {
		progress.css('width', '81.6%');
		progress.attr('aria-valuenow', '81.6');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 35) {
		progress.css('width', '84%');
		progress.attr('aria-valuenow', '84');
		progressMessage.text('Прогресс: 84%');
	}

	if (numValid == 36) {
		progress.css('width', '86.4%');
		progress.attr('aria-valuenow', '86.4');
		progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 37) {
		progress.css('width', '88.8%');
		progress.attr('aria-valuenow', '88.8');
		progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 38) {
		progress.css('width', '91.2%');
		progress.attr('aria-valuenow', '91.2');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 39) {
		progress.css('width', '93.6%');
		progress.attr('aria-valuenow', '93.6');
		progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 40) {
		progress.css('width', '96%');
		progress.attr('aria-valuenow', '96');
		progressMessage.text('Прогресс: 96%');
	}

	if (numValid == 41) {
		progress.css('width', '98.4%');
		progress.attr('aria-valuenow', '98.4');
		progressMessage.text('Прогресс: 98%');
	}

	if (numValid == 42) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 