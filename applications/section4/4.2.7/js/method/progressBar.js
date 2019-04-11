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
		progress.css('width', '2.1%');
		progress.attr('aria-valuenow', '2.1');
		progressMessage.text('2%');
	}
	
	if (numValid == 2) {
		progress.css('width', '4.2%');
		progress.attr('aria-valuenow', '4.2');
		progressMessage.text('4%');
	}
	
	if (numValid == 3) {
		progress.css('width', '6.3%');
		progress.attr('aria-valuenow', '6.3');
		progressMessage.text('6%');
	}
	
	if (numValid == 4) {
		progress.css('width', '8.4%');
		progress.attr('aria-valuenow', '8.4');
		progressMessage.text('8%');
	}
	
	if (numValid == 5) {
		progress.css('width', '10.5%');
		progress.attr('aria-valuenow', '10.5');
		progressMessage.text('10%');
	}
	
	if (numValid == 6) {
		progress.css('width', '12.6%');
		progress.attr('aria-valuenow', '12.6');
		progressMessage.text('Прогресс: 12%');
	}
	
	if (numValid == 7) {
		progress.css('width', '14.7%');
		progress.attr('aria-valuenow', '14.7');
		progressMessage.text('Прогресс: 14%');
	}
	
	if (numValid == 8) {
		progress.css('width', '16.8%');
		progress.attr('aria-valuenow', '16.8');
		progressMessage.text('Прогресс: 16%');
	}

	if (numValid == 9) {
		progress.css('width', '18.9%');
		progress.attr('aria-valuenow', '18.9');
		progressMessage.text('Прогресс: 18%');
	}

	if (numValid == 10) {
		progress.css('width', '21%');
		progress.attr('aria-valuenow', '21');
		progressMessage.text('Прогресс: 21%');
	}

	if (numValid == 11) {
		progress.css('width', '23.1%');
		progress.attr('aria-valuenow', '23.1');
		progressMessage.text('Прогресс: 23%');
	}

	if (numValid == 12) {
		progress.css('width', '25.2%');
		progress.attr('aria-valuenow', '25.2');
		progressMessage.text('Прогресс: 25%');
	}

	if (numValid == 13) {
		progress.css('width', '27.3%');
		progress.attr('aria-valuenow', '27.3');
		progressMessage.text('Прогресс: 27%');
	}

	if (numValid == 14) {
		progress.css('width', '29.4%');
		progress.attr('aria-valuenow', '29.4');
		progressMessage.text('Прогресс: 29%');
	}

	if (numValid == 15) {
		progress.css('width', '31.5%');
		progress.attr('aria-valuenow', '31.5');
		progressMessage.text('Прогресс: 31%');
	}

	if (numValid == 16) {
		progress.css('width', '33.6%');
		progress.attr('aria-valuenow', '33.6');
		progressMessage.text('Прогресс: 33%');
	}

	if (numValid == 17) {
		progress.css('width', '35.7%');
		progress.attr('aria-valuenow', '35.7');
		progressMessage.text('Прогресс: 35%');
	}

	if (numValid == 18) {
		progress.css('width', '37.8%');
		progress.attr('aria-valuenow', '37.8');
		progressMessage.text('Прогресс: 37%');
	}

	if (numValid == 19) {
		progress.css('width', '39.9%');
		progress.attr('aria-valuenow', '39.9');
		progressMessage.text('Прогресс: 39%');
	}

	if (numValid == 20) {
		progress.css('width', '42%');
		progress.attr('aria-valuenow', '42');
		progressMessage.text('Прогресс: 42%');
	}

	if (numValid == 21) {
		progress.css('width', '44.1%');
		progress.attr('aria-valuenow', '44.1');
		progressMessage.text('Прогресс: 44%');
	}

	if (numValid == 22) {
		progress.css('width', '46.2%');
		progress.attr('aria-valuenow', '46.2');
		progressMessage.text('Прогресс: 46%');
	}

	if (numValid == 23) {
		progress.css('width', '48.3%');
		progress.attr('aria-valuenow', '48.3');
		progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 24) {
		progress.css('width', '50.4%');
		progress.attr('aria-valuenow', '50.4');
		progressMessage.text('Прогресс: 50%');
	}

	if (numValid == 25) {
		progress.css('width', '52.5%');
		progress.attr('aria-valuenow', '52.5');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 26) {
		progress.css('width', '54.6%');
		progress.attr('aria-valuenow', '54.6');
		progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 27) {
		progress.css('width', '56.7%');
		progress.attr('aria-valuenow', '56.7');
		progressMessage.text('Прогресс: 56%');
	}

	if (numValid == 28) {
		progress.css('width', '58.8%');
		progress.attr('aria-valuenow', '58.8');
		progressMessage.text('Прогресс: 58%');
	}

	if (numValid == 29) {
		progress.css('width', '60.9%');
		progress.attr('aria-valuenow', '60.9');
		progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 30) {
		progress.css('width', '63%');
		progress.attr('aria-valuenow', '63');
		progressMessage.text('Прогресс: 63%');
	}

	if (numValid == 31) {
		progress.css('width', '65.1%');
		progress.attr('aria-valuenow', '65.1');
		progressMessage.text('Прогресс: 65%');
	}

	if (numValid == 32) {
		progress.css('width', '67.2%');
		progress.attr('aria-valuenow', '67.2');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 33) {
		progress.css('width', '69.3%');
		progress.attr('aria-valuenow', '69.3');
		progressMessage.text('Прогресс: 69%');
	}

	if (numValid == 34) {
		progress.css('width', '71.4%');
		progress.attr('aria-valuenow', '71.4');
		progressMessage.text('Прогресс: 71%');
	}

	if (numValid == 35) {
		progress.css('width', '73.5%');
		progress.attr('aria-valuenow', '73.5');
		progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 36) {
		progress.css('width', '75.6%');
		progress.attr('aria-valuenow', '75.6');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 37) {
		progress.css('width', '77.7%');
		progress.attr('aria-valuenow', '77.7');
		progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 38) {
		progress.css('width', '79.8%');
		progress.attr('aria-valuenow', '79.8');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 39) {
		progress.css('width', '81.9%');
		progress.attr('aria-valuenow', '81.9');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 40) {
		progress.css('width', '84%');
		progress.attr('aria-valuenow', '84');
		progressMessage.text('Прогресс: 84%');
	}

	if (numValid == 41) {
		progress.css('width', '86.1%');
		progress.attr('aria-valuenow', '86.1');
		progressMessage.text('Прогресс: 86.1%');
	}

	if (numValid == 42) {
		progress.css('width', '88.2%');
		progress.attr('aria-valuenow', '88.2');
		progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 43) {
		progress.css('width', '90.3%');
		progress.attr('aria-valuenow', '90.3');
		progressMessage.text('Прогресс: 90%');
	}

	if (numValid == 44) {
		progress.css('width', '92.4%');
		progress.attr('aria-valuenow', '92.4');
		progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 45) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 