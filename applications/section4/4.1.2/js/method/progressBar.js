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
		progress.css('width', '2.6%');
		progress.attr('aria-valuenow', '2.6');
		progressMessage.text('2%');
	}
	
	if (numValid == 2) {
		progress.css('width', '5.2%');
		progress.attr('aria-valuenow', '5.2');
		progressMessage.text('5%');
	}
	
	if (numValid == 3) {
		progress.css('width', '7.8%');
		progress.attr('aria-valuenow', '7.8');
		progressMessage.text('7%');
	}
	
	if (numValid == 4) {
		progress.css('width', '10.4%');
		progress.attr('aria-valuenow', '10.4');
		progressMessage.text('10%');
	}
	
	if (numValid == 5) {
		progress.css('width', '13%');
		progress.attr('aria-valuenow', '13');
		progressMessage.text('Прогресс: 13%');
	}
	
	if (numValid == 6) {
		progress.css('width', '15.6%');
		progress.attr('aria-valuenow', '15.6');
		progressMessage.text('Прогресс: 15%');
	}
	
	if (numValid == 7) {
		progress.css('width', '18.2%');
		progress.attr('aria-valuenow', '18.2');
		progressMessage.text('Прогресс: 18%');
	}
	
	if (numValid == 8) {
		progress.css('width', '20.8%');
		progress.attr('aria-valuenow', '20.8');
		progressMessage.text('Прогресс: 20%');
	}

	if (numValid == 9) {
		progress.css('width', '23.4%');
		progress.attr('aria-valuenow', '23.4');
		progressMessage.text('Прогресс: 23%');
	}

	if (numValid == 10) {
		progress.css('width', '26%');
		progress.attr('aria-valuenow', '26');
		progressMessage.text('Прогресс: 26%');
	}

	if (numValid == 11) {
		progress.css('width', '28.6%');
		progress.attr('aria-valuenow', '28.6');
		progressMessage.text('Прогресс: 28%');
	}

	if (numValid == 12) {
		progress.css('width', '31.2%');
		progress.attr('aria-valuenow', '31.2');
		progressMessage.text('Прогресс: 31%');
	}

	if (numValid == 13) {
		progress.css('width', '33.8%');
		progress.attr('aria-valuenow', '33.8');
		progressMessage.text('Прогресс: 33%');
	}

	if (numValid == 14) {
		progress.css('width', '36.4%');
		progress.attr('aria-valuenow', '36.4');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 15) {
		progress.css('width', '39%');
		progress.attr('aria-valuenow', '39');
		progressMessage.text('Прогресс: 39%');
	}

	if (numValid == 16) {
		progress.css('width', '41.6%');
		progress.attr('aria-valuenow', '41.6');
		progressMessage.text('Прогресс: 41%');
	}

	if (numValid == 17) {
		progress.css('width', '44.2%');
		progress.attr('aria-valuenow', '44.2');
		progressMessage.text('Прогресс: 44%');
	}

	if (numValid == 18) {
		progress.css('width', '46.8%');
		progress.attr('aria-valuenow', '46.8');
		progressMessage.text('Прогресс: 46%');
	}

	if (numValid == 19) {
		progress.css('width', '49.4%');
		progress.attr('aria-valuenow', '49.4');
		progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 20) {
		progress.css('width', '52%');
		progress.attr('aria-valuenow', '52');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 21) {
		progress.css('width', '54.6%');
		progress.attr('aria-valuenow', '54.6');
		progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 22) {
		progress.css('width', '57.2%');
		progress.attr('aria-valuenow', '57.2');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 23) {
		progress.css('width', '59.8%');
		progress.attr('aria-valuenow', '59.8');
		progressMessage.text('Прогресс: 59%');
	}

	if (numValid == 24) {
		progress.css('width', '62.4%');
		progress.attr('aria-valuenow', '62.4');
		progressMessage.text('Прогресс: 62%');
	}

	if (numValid == 25) {
		progress.css('width', '65%');
		progress.attr('aria-valuenow', '65');
		progressMessage.text('Прогресс: 65%');
	}

	if (numValid == 26) {
		progress.css('width', '67.6%');
		progress.attr('aria-valuenow', '67.6');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 27) {
		progress.css('width', '70.2%');
		progress.attr('aria-valuenow', '70.2');
		progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 28) {
		progress.css('width', '72.8%');
		progress.attr('aria-valuenow', '72.8');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 29) {
		progress.css('width', '75.4%');
		progress.attr('aria-valuenow', '75.4');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 30) {
		progress.css('width', '78%');
		progress.attr('aria-valuenow', '78');
		progressMessage.text('Прогресс: 78%');
	}

	if (numValid == 31) {
		progress.css('width', '80.6%');
		progress.attr('aria-valuenow', '80.6');
		progressMessage.text('Прогресс: 80%');
	}

	if (numValid == 32) {
		progress.css('width', '83.2%');
		progress.attr('aria-valuenow', '83.2');
		progressMessage.text('Прогресс: 83%');
	}

	if (numValid == 33) {
		progress.css('width', '85.8%');
		progress.attr('aria-valuenow', '85.8');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 34) {
		progress.css('width', '88.4%');
		progress.attr('aria-valuenow', '88.4');
		progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 35) {
		progress.css('width', '91%');
		progress.attr('aria-valuenow', '91');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 36) {
		progress.css('width', '93.6%');
		progress.attr('aria-valuenow', '93.6');
		progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 37) {
		progress.css('width', '96.2%');
		progress.attr('aria-valuenow', '96.2');
		progressMessage.text('Прогресс: 96%');
	}

	if (numValid == 38) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 