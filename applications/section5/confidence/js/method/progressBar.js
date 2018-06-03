//Проверяет заполнение полей и заполняет ProgressBar
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
			progress.css('width', '3.5%');
		    progress.attr('aria-valuenow', '3.5');
		    progressMessage.text('');
		}
		
		if (numValid == 2) {
			progress.css('width', '7.1%');
		    progress.attr('aria-valuenow', '7.1');
		    progressMessage.text('Прогресс: 7%');
		}
		
		if (numValid == 3) {
			progress.css('width', '10.7%');
		    progress.attr('aria-valuenow', '10.7');
		    progressMessage.text('Прогресс: 10%');
		}
		
		if (numValid == 4) {
			progress.css('width', '14.2%');
		    progress.attr('aria-valuenow', '14.2');
		    progressMessage.text('Прогресс: 14%');
		}
		
		if (numValid == 5) {
			progress.css('width', '17.8%');
		    progress.attr('aria-valuenow', '17.8');
		    progressMessage.text('Прогресс: 17%');
		}
		
		if (numValid == 6) {
			progress.css('width', '21.4%');
		    progress.attr('aria-valuenow', '21.4');
		    progressMessage.text('Прогресс: 21%');
		}
		
		if (numValid == 7) {
			progress.css('width', '24.9%');
		    progress.attr('aria-valuenow', '24.9');
		    progressMessage.text('Прогресс: 24%');
		}
		
		if (numValid == 8) {
			progress.css('width', '28.5%');
		    progress.attr('aria-valuenow', '28.5');
		    progressMessage.text('Прогресс: 28%');
		}

		if (numValid == 9) {
			progress.css('width', '32.1%');
		    progress.attr('aria-valuenow', '32.1');
		    progressMessage.text('Прогресс: 32%');
		}

		if (numValid == 10) {
			progress.css('width', '35.7%');
		    progress.attr('aria-valuenow', '35.7');
		    progressMessage.text('Прогресс: 35%');
		}

		if (numValid == 11) {
			progress.css('width', '39.2%');
		    progress.attr('aria-valuenow', '39.2');
		    progressMessage.text('Прогресс: 39%');
		}

		if (numValid == 12) {
			progress.css('width', '42.8%');
		    progress.attr('aria-valuenow', '42.8');
		    progressMessage.text('Прогресс: 42%');
		}

		if (numValid == 13) {
			progress.css('width', '46.4%');
		    progress.attr('aria-valuenow', '46.4');
		    progressMessage.text('Прогресс: 46%');
		}

		if (numValid == 14) {
			progress.css('width', '49.9%');
		    progress.attr('aria-valuenow', '49.9');
		    progressMessage.text('Прогресс: 49%');
		}

		if (numValid == 15) {
			progress.css('width', '53.5%');
		    progress.attr('aria-valuenow', '53.5');
		    progressMessage.text('Прогресс: 53%');
		}

		if (numValid == 16) {
			progress.css('width', '57.1%');
		    progress.attr('aria-valuenow', '57.1');
		    progressMessage.text('Прогресс: 57%');
		}

		if (numValid == 17) {
			progress.css('width', '60.6%');
		    progress.attr('aria-valuenow', '60.6');
		    progressMessage.text('Прогресс: 60%');
		}

		if (numValid == 18) {
			progress.css('width', '64.2%');
		    progress.attr('aria-valuenow', '64.2');
		    progressMessage.text('Прогресс: 64%');
		}

		if (numValid == 19) {
			progress.css('width', '67.8%');
		    progress.attr('aria-valuenow', '67.8');
		    progressMessage.text('Прогресс: 67%');
		}

		if (numValid == 20) {
			progress.css('width', '71.4%');
		    progress.attr('aria-valuenow', '71.4');
		    progressMessage.text('Прогресс: 71%');
		}

		if (numValid == 21) {
			progress.css('width', '74.9%');
		    progress.attr('aria-valuenow', '74.9');
		    progressMessage.text('Прогресс: 74%');
		}

		if (numValid == 22) {
			progress.css('width', '78.5%');
		    progress.attr('aria-valuenow', '78.5');
		    progressMessage.text('Прогресс: 78%');
		}

		if (numValid == 23) {
			progress.css('width', '82.1%');
		    progress.attr('aria-valuenow', '82.1');
		    progressMessage.text('Прогресс: 82%');
		}

		if (numValid == 24) {
			progress.css('width', '85.6%');
		    progress.attr('aria-valuenow', '85.6');
		    progressMessage.text('Прогресс: 85%');
		}

		if (numValid == 25) {
			progress.css('width', '89.2%');
		    progress.attr('aria-valuenow', '89.2');
		    progressMessage.text('Прогресс: 89%');
		}

		if (numValid == 26) {
			progress.css('width', '92.8%');
		    progress.attr('aria-valuenow', '92.8');
		    progressMessage.text('Прогресс: 92%');
		}

		if (numValid == 27) {
			progress.css('width', '96.3%');
		    progress.attr('aria-valuenow', '96.3');
		    progressMessage.text('Прогресс: 96%');
		}

		if (numValid == 28) {
			progress.css('width', '100%');
		    progress.attr('aria-valuenow', '100');
		    progressMessage.text('Прогресс: 100%');
		}
	});