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
		progress.css('width', '2.3%');
		progress.attr('aria-valuenow', '2.3');
		progressMessage.text('2%');
	}
	
	if (numValid == 2) {
		progress.css('width', '4.6%');
		progress.attr('aria-valuenow', '4.6');
		progressMessage.text('4%');
	}
	
	if (numValid == 3) {
		progress.css('width', '6.9%');
		progress.attr('aria-valuenow', '6.9');
		progressMessage.text('7%');
	}
	
	if (numValid == 4) {
		progress.css('width', '9.2%');
		progress.attr('aria-valuenow', '9.2');
		progressMessage.text('9%');
	}
	
	if (numValid == 5) {
		progress.css('width', '11.5%');
		progress.attr('aria-valuenow', '11.5');
		progressMessage.text('11%');
	}
	
	if (numValid == 6) {
		progress.css('width', '13.8%');
		progress.attr('aria-valuenow', '13.8');
		progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 7) {
		progress.css('width', '16.1%');
		progress.attr('aria-valuenow', '16.1');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 8) {
		progress.css('width', '18.4%');
		progress.attr('aria-valuenow', '18.4');
		progressMessage.text('Прогресс: 18%');
	}

	if (numValid == 9) {
		progress.css('width', '20.7%');
		progress.attr('aria-valuenow', '20.7');
		progressMessage.text('Прогресс: 20%');
	}

	if (numValid == 10) {
		progress.css('width', '23%');
		progress.attr('aria-valuenow', '23');
		progressMessage.text('Прогресс: 23%');
	}

	if (numValid == 11) {
		progress.css('width', '25.3%');
		progress.attr('aria-valuenow', '25.3');
		progressMessage.text('Прогресс: 25%');
	}

	if (numValid == 12) {
		progress.css('width', '27.6%');
		progress.attr('aria-valuenow', '27.6');
		progressMessage.text('Прогресс: 27%');
	}

	if (numValid == 13) {
		progress.css('width', '29.9%');
		progress.attr('aria-valuenow', '29.9');
		progressMessage.text('Прогресс: 29%');
	}

	if (numValid == 14) {
		progress.css('width', '32.2%');
		progress.attr('aria-valuenow', '32.2');
		progressMessage.text('Прогресс: 32%');
	}

	if (numValid == 15) {
		progress.css('width', '34.5%');
		progress.attr('aria-valuenow', '34.5');
		progressMessage.text('Прогресс: 34%');
	}

	if (numValid == 16) {
		progress.css('width', '36.8%');
		progress.attr('aria-valuenow', '36.8');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 17) {
		progress.css('width', '39.1%');
		progress.attr('aria-valuenow', '39.1');
		progressMessage.text('Прогресс: 39%');
	}

	if (numValid == 18) {
		progress.css('width', '41.4%');
		progress.attr('aria-valuenow', '41.4');
		progressMessage.text('Прогресс: 41%');
	}

	if (numValid == 19) {
		progress.css('width', '43.7%');
		progress.attr('aria-valuenow', '43.7');
		progressMessage.text('Прогресс: 43%');
	}

	if (numValid == 20) {
		progress.css('width', '46%');
		progress.attr('aria-valuenow', '46');
		progressMessage.text('Прогресс: 46%');
	}

	if (numValid == 21) {
		progress.css('width', '48.3%');
		progress.attr('aria-valuenow', '48.3');
		progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 22) {
		progress.css('width', '50.6%');
		progress.attr('aria-valuenow', '50.6');
		progressMessage.text('Прогресс: 50%');
	}

	if (numValid == 23) {
		progress.css('width', '52.9%');
		progress.attr('aria-valuenow', '52.9');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 24) {
		progress.css('width', '55.2%');
		progress.attr('aria-valuenow', '55.2');
		progressMessage.text('Прогресс: 55%');
	}

	if (numValid == 25) {
		progress.css('width', '57.5%');
		progress.attr('aria-valuenow', '57.5');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 26) {
		progress.css('width', '59.8%');
		progress.attr('aria-valuenow', '59.8');
		progressMessage.text('Прогресс: 59%');
	}

	if (numValid == 27) {
		progress.css('width', '62.1%');
		progress.attr('aria-valuenow', '62.1');
		progressMessage.text('Прогресс: 62%');
	}

	if (numValid == 28) {
		progress.css('width', '64.4%');
		progress.attr('aria-valuenow', '64.4');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 29) {
		progress.css('width', '66.7%');
		progress.attr('aria-valuenow', '66.7');
		progressMessage.text('Прогресс: 66%');
	}

	if (numValid == 30) {
		progress.css('width', '69%');
		progress.attr('aria-valuenow', '69');
		progressMessage.text('Прогресс: 69%');
	}

	if (numValid == 31) {
		progress.css('width', '71.3%');
		progress.attr('aria-valuenow', '71.3');
		progressMessage.text('Прогресс: 71%');
	}

	if (numValid == 32) {
		progress.css('width', '73.6%');
		progress.attr('aria-valuenow', '73.6');
		progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 33) {
		progress.css('width', '75.9%');
		progress.attr('aria-valuenow', '75.9');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 34) {
		progress.css('width', '78.2%');
		progress.attr('aria-valuenow', '78.2');
		progressMessage.text('Прогресс: 78%');
	}

	if (numValid == 35) {
		progress.css('width', '80.5%');
		progress.attr('aria-valuenow', '80.5');
		progressMessage.text('Прогресс: 80%');
	}

	if (numValid == 36) {
		progress.css('width', '82.8%');
		progress.attr('aria-valuenow', '82.8');
		progressMessage.text('Прогресс: 82%');
	}

	if (numValid == 37) {
		progress.css('width', '85.1%');
		progress.attr('aria-valuenow', '85.1');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 38) {
		progress.css('width', '87.4%');
		progress.attr('aria-valuenow', '87.4');
		progressMessage.text('Прогресс: 87%');
	}

	if (numValid == 39) {
		progress.css('width', '89.7%');
		progress.attr('aria-valuenow', '89.7');
		progressMessage.text('Прогресс: 89%');
	}

	if (numValid == 40) {
		progress.css('width', '92%');
		progress.attr('aria-valuenow', '92');
		progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 41) {
		progress.css('width', '94.3%');
		progress.attr('aria-valuenow', '94.3');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 42) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 