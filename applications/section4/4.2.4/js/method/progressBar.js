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
		progress.css('width', '1.2%');
		progress.attr('aria-valuenow', '1.2');
		progressMessage.text('1%');
	}
	
	if (numValid == 2) {
		progress.css('width', '2.4%');
		progress.attr('aria-valuenow', '2.4');
		progressMessage.text('2%');
	}
	
	if (numValid == 3) {
		progress.css('width', '3.6%');
		progress.attr('aria-valuenow', '3.6');
		progressMessage.text('3%');
	}
	
	if (numValid == 4) {
		progress.css('width', '4.8%');
		progress.attr('aria-valuenow', '4.8');
		progressMessage.text('4%');
	}
	
	if (numValid == 5) {
		progress.css('width', '6%');
		progress.attr('aria-valuenow', '6');
		progressMessage.text('6%');
	}
	
	if (numValid == 6) {
		progress.css('width', '7.2%');
		progress.attr('aria-valuenow', '7.2');
		progressMessage.text('7%');
	}
	
	if (numValid == 7) {
		progress.css('width', '8.4%');
		progress.attr('aria-valuenow', '8.4');
		progressMessage.text('8%');
	}
	
	if (numValid == 8) {
		progress.css('width', '9.6%');
		progress.attr('aria-valuenow', '9.6');
		progressMessage.text('9%');
	}

	if (numValid == 9) {
		progress.css('width', '10.8%');
		progress.attr('aria-valuenow', '10.8');
		progressMessage.text('10%');
	}

	if (numValid == 10) {
		progress.css('width', '12%');
		progress.attr('aria-valuenow', '12');
		progressMessage.text('Прогресс: 12%');
	}

	if (numValid == 11) {
		progress.css('width', '13.2%');
		progress.attr('aria-valuenow', '13.2');
		progressMessage.text('Прогресс: 13%');
	}

	if (numValid == 12) {
		progress.css('width', '14.4%');
		progress.attr('aria-valuenow', '14.4');
		progressMessage.text('Прогресс: 14%');
	}

	if (numValid == 13) {
		progress.css('width', '15.6%');
		progress.attr('aria-valuenow', '15.6');
		progressMessage.text('Прогресс: 15%');
	}

	if (numValid == 14) {
		progress.css('width', '16.8%');
		progress.attr('aria-valuenow', '16.8');
		progressMessage.text('Прогресс: 16%');
	}

	if (numValid == 15) {
		progress.css('width', '18%');
		progress.attr('aria-valuenow', '18');
		progressMessage.text('Прогресс: 18%');
	}

	if (numValid == 16) {
		progress.css('width', '19.2%');
		progress.attr('aria-valuenow', '19.2');
		progressMessage.text('Прогресс: 19%');
	}

	if (numValid == 17) {
		progress.css('width', '20.4%');
		progress.attr('aria-valuenow', '20.4');
		progressMessage.text('Прогресс: 20%');
	}

	if (numValid == 18) {
		progress.css('width', '21.6%');
		progress.attr('aria-valuenow', '21.6');
		progressMessage.text('Прогресс: 21%');
	}

	if (numValid == 19) {
		progress.css('width', '22.8%');
		progress.attr('aria-valuenow', '22.8');
		progressMessage.text('Прогресс: 22%');
	}

	if (numValid == 20) {
		progress.css('width', '24%');
		progress.attr('aria-valuenow', '24');
		progressMessage.text('Прогресс: 24%');
	}

	if (numValid == 21) {
		progress.css('width', '25.2%');
		progress.attr('aria-valuenow', '25.2');
		progressMessage.text('Прогресс: 25%');
	}

	if (numValid == 22) {
		progress.css('width', '26.4%');
		progress.attr('aria-valuenow', '26.4');
		progressMessage.text('Прогресс: 26%');
	}

	if (numValid == 23) {
		progress.css('width', '27.6%');
		progress.attr('aria-valuenow', '27.6');
		progressMessage.text('Прогресс: 27%');
	}

	if (numValid == 24) {
		progress.css('width', '28.8%');
		progress.attr('aria-valuenow', '28.8');
		progressMessage.text('Прогресс: 28%');
	}

	if (numValid == 25) {
		progress.css('width', '30%');
		progress.attr('aria-valuenow', '30');
		progressMessage.text('Прогресс: 30%');
	}

	if (numValid == 26) {
		progress.css('width', '31.2%');
		progress.attr('aria-valuenow', '31.2');
		progressMessage.text('Прогресс: 31%');
	}

	if (numValid == 27) {
		progress.css('width', '32.4%');
		progress.attr('aria-valuenow', '32.4');
		progressMessage.text('Прогресс: 32%');
	}

	if (numValid == 28) {
		progress.css('width', '33.6%');
		progress.attr('aria-valuenow', '33.6');
		progressMessage.text('Прогресс: 33%');
	}

	if (numValid == 29) {
		progress.css('width', '34.8%');
		progress.attr('aria-valuenow', '34.8');
		progressMessage.text('Прогресс: 34%');
	}

	if (numValid == 30) {
		progress.css('width', '36%');
		progress.attr('aria-valuenow', '36');
		progressMessage.text('Прогресс: 36%');
	}

	if (numValid == 31) {
		progress.css('width', '37.2%');
		progress.attr('aria-valuenow', '37.2');
		progressMessage.text('Прогресс: 37%');
	}

	if (numValid == 32) {
		progress.css('width', '38.4%');
		progress.attr('aria-valuenow', '38.4');
		progressMessage.text('Прогресс: 38%');
	}

	if (numValid == 33) {
		progress.css('width', '39.6%');
		progress.attr('aria-valuenow', '39.6');
		progressMessage.text('Прогресс: 39%');
	}

	if (numValid == 34) {
		progress.css('width', '40.8%');
		progress.attr('aria-valuenow', '40.8');
		progressMessage.text('Прогресс: 40%');
	}

	if (numValid == 35) {
		progress.css('width', '42%');
		progress.attr('aria-valuenow', '42');
		progressMessage.text('Прогресс: 42%');
	}

	if (numValid == 36) {
		progress.css('width', '43.2%');
		progress.attr('aria-valuenow', '43.2');
		progressMessage.text('Прогресс: 43%');
	}

	if (numValid == 37) {
		progress.css('width', '44.4%');
		progress.attr('aria-valuenow', '44.4');
		progressMessage.text('Прогресс: 44%');
	}

	if (numValid == 38) {
		progress.css('width', '45.6%');
		progress.attr('aria-valuenow', '45.6');
		progressMessage.text('Прогресс: 45%');
	}

	if (numValid == 39) {
		progress.css('width', '46.8%');
		progress.attr('aria-valuenow', '46.8');
		progressMessage.text('Прогресс: 46%');
	}

	if (numValid == 40) {
		progress.css('width', '48%');
		progress.attr('aria-valuenow', '48');
		progressMessage.text('Прогресс: 48%');
	}

	if (numValid == 41) {
		progress.css('width', '49.2%');
		progress.attr('aria-valuenow', '49.2');
		progressMessage.text('Прогресс: 49%');
	}

	if (numValid == 42) {
		progress.css('width', '50.4%');
		progress.attr('aria-valuenow', '50.4');
		progressMessage.text('Прогресс: 50%');
	}

	if (numValid == 43) {
		progress.css('width', '51.6%');
		progress.attr('aria-valuenow', '51.6');
		progressMessage.text('Прогресс: 51%');
	}

	if (numValid == 44) {
		progress.css('width', '52.8%');
		progress.attr('aria-valuenow', '52.8');
		progressMessage.text('Прогресс: 52%');
	}

	if (numValid == 45) {
		progress.css('width', '54%');
		progress.attr('aria-valuenow', '54');
		progressMessage.text('Прогресс: 54%');
	}

	if (numValid == 46) {
		progress.css('width', '55.2%');
		progress.attr('aria-valuenow', '55.2');
		progressMessage.text('Прогресс: 55%');
	}

	if (numValid == 47) {
		progress.css('width', '56.4%');
		progress.attr('aria-valuenow', '56.4');
		progressMessage.text('Прогресс: 56%');
	}

	if (numValid == 48) {
		progress.css('width', '57.6%');
		progress.attr('aria-valuenow', '57.6');
		progressMessage.text('Прогресс: 57%');
	}

	if (numValid == 49) {
		progress.css('width', '58.8%');
		progress.attr('aria-valuenow', '58.8');
		progressMessage.text('Прогресс: 58%');
	}

	if (numValid == 50) {
		progress.css('width', '60%');
		progress.attr('aria-valuenow', '60');
		progressMessage.text('Прогресс: 60%');
	}

	if (numValid == 51) {
		progress.css('width', '61.2%');
		progress.attr('aria-valuenow', '61.2');
		progressMessage.text('Прогресс: 61%');
	}

	if (numValid == 52) {
		progress.css('width', '62.4%');
		progress.attr('aria-valuenow', '62.4');
		progressMessage.text('Прогресс: 62%');
	}

	if (numValid == 53) {
		progress.css('width', '63.6%');
		progress.attr('aria-valuenow', '63.6');
		progressMessage.text('Прогресс: 63%');
	}

	if (numValid == 54) {
		progress.css('width', '64.8%');
		progress.attr('aria-valuenow', '64.8');
		progressMessage.text('Прогресс: 64%');
	}

	if (numValid == 55) {
		progress.css('width', '66%');
		progress.attr('aria-valuenow', '66');
		progressMessage.text('Прогресс: 66%');
	}

	if (numValid == 56) {
		progress.css('width', '67.2%');
		progress.attr('aria-valuenow', '67.2');
		progressMessage.text('Прогресс: 67%');
	}

	if (numValid == 57) {
		progress.css('width', '68.4%');
		progress.attr('aria-valuenow', '68.4');
		progressMessage.text('Прогресс: 68%');
	}

	if (numValid == 58) {
		progress.css('width', '69.6%');
		progress.attr('aria-valuenow', '69.6');
		progressMessage.text('Прогресс: 69%');
	}

	if (numValid == 59) {
		progress.css('width', '70.8%');
		progress.attr('aria-valuenow', '70.8');
		progressMessage.text('Прогресс: 70%');
	}

	if (numValid == 60) {
		progress.css('width', '72%');
		progress.attr('aria-valuenow', '72');
		progressMessage.text('Прогресс: 72%');
	}

	if (numValid == 61) {
		progress.css('width', '73.2%');
		progress.attr('aria-valuenow', '73.2');
		progressMessage.text('Прогресс: 73%');
	}

	if (numValid == 62) {
		progress.css('width', '74.4%');
		progress.attr('aria-valuenow', '74.4');
		progressMessage.text('Прогресс: 74%');
	}

	if (numValid == 63) {
		progress.css('width', '75.6%');
		progress.attr('aria-valuenow', '75.6');
		progressMessage.text('Прогресс: 75%');
	}

	if (numValid == 64) {
		progress.css('width', '76.8%');
		progress.attr('aria-valuenow', '76.8');
		progressMessage.text('Прогресс: 76%');
	}

	if (numValid == 65) {
		progress.css('width', '78%');
		progress.attr('aria-valuenow', '78');
		progressMessage.text('Прогресс: 78%');
	}

	if (numValid == 66) {
		progress.css('width', '79.2%');
		progress.attr('aria-valuenow', '79.2');
		progressMessage.text('Прогресс: 79%');
	}

	if (numValid == 67) {
		progress.css('width', '80.4%');
		progress.attr('aria-valuenow', '80.4');
		progressMessage.text('Прогресс: 80%');
	}

	if (numValid == 68) {
		progress.css('width', '81.6%');
		progress.attr('aria-valuenow', '81.6');
		progressMessage.text('Прогресс: 81%');
	}

	if (numValid == 69) {
		progress.css('width', '82.8%');
		progress.attr('aria-valuenow', '82.8');
		progressMessage.text('Прогресс: 82%');
	}

	if (numValid == 70) {
		progress.css('width', '84%');
		progress.attr('aria-valuenow', '84');
		progressMessage.text('Прогресс: 84%');
	}

	if (numValid == 71) {
		progress.css('width', '85.2%');
		progress.attr('aria-valuenow', '85.2');
		progressMessage.text('Прогресс: 85%');
	}

	if (numValid == 72) {
		progress.css('width', '86.4%');
		progress.attr('aria-valuenow', '86.4');
		progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 73) {
		progress.css('width', '87.6%');
		progress.attr('aria-valuenow', '87.6');
		progressMessage.text('Прогресс: 87%');
	}

	if (numValid == 74) {
		progress.css('width', '88.8%');
		progress.attr('aria-valuenow', '88.8');
		progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 75) {
		progress.css('width', '90%');
		progress.attr('aria-valuenow', '90');
		progressMessage.text('Прогресс: 90%');
	}

	if (numValid == 76) {
		progress.css('width', '91.2%');
		progress.attr('aria-valuenow', '91.2');
		progressMessage.text('Прогресс: 91%');
	}

	if (numValid == 77) {
		progress.css('width', '92.4%');
		progress.attr('aria-valuenow', '92.4');
		progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 78) {
		progress.css('width', '93.6%');
		progress.attr('aria-valuenow', '93.6');
		progressMessage.text('Прогресс: 93%');
	}

	if (numValid == 79) {
		progress.css('width', '94.8%');
		progress.attr('aria-valuenow', '94.8');
		progressMessage.text('Прогресс: 94%');
	}

	if (numValid == 80) {
		progress.css('width', '96%');
		progress.attr('aria-valuenow', '96');
		progressMessage.text('Прогресс: 96%');
	}

	if (numValid == 81) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
});