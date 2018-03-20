$(document).ready(function() { //Проверяет заполнение полей и заполняет ProgressBar
	$(document).on('click focuson focusout mousemove', function() {
		var numValid = 0;
		
		$('.tab input[required]').each(function() {
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
			progress.css('width', '7.5%');
		    progress.attr('aria-valuenow', '7.5');
		    progressMessage.text('');
		}
		
		if (numValid == 2) {
			progress.css('width', '15%');
		    progress.attr('aria-valuenow', '15');
		    progressMessage.text('Прогресс: 15%');
		}
		
		if (numValid == 3) {
			progress.css('width', '22.5%');
		    progress.attr('aria-valuenow', '22.5');
		    progressMessage.text('Прогресс: 22.5%');
		}
		
		if (numValid == 4) {
			progress.css('width', '30%');
		    progress.attr('aria-valuenow', '30');
		    progressMessage.text('Прогресс: 30%');
		}
		
		if (numValid == 5) {
			progress.css('width', '37.5%');
		    progress.attr('aria-valuenow', '37.5');
		    progressMessage.text('Прогресс: 37.5%');
		}
		
		if (numValid == 6) {
			progress.css('width', '45%');
		    progress.attr('aria-valuenow', '45');
		    progressMessage.text('Прогресс: 45%');
		}
		
		if (numValid == 7) {
			progress.css('width', '52.5%');
		    progress.attr('aria-valuenow', '52.5');
		    progressMessage.text('Прогресс: 52.5%');
		}
		
		if (numValid == 8) {
			progress.css('width', '60%');
		    progress.attr('aria-valuenow', '60');
		    progressMessage.text('Прогресс: 60%');
		}

		if (numValid == 9) {
			progress.css('width', '67.5%');
		    progress.attr('aria-valuenow', '67.5');
		    progressMessage.text('Прогресс: 67.5%');
		}

		if (numValid == 10) {
			progress.css('width', '75%');
		    progress.attr('aria-valuenow', '75');
		    progressMessage.text('Прогресс: 75%');
		}

		if (numValid == 11) {
			progress.css('width', '82.5%');
		    progress.attr('aria-valuenow', '82.5');
		    progressMessage.text('Прогресс: 82.5%');
		}

		if (numValid == 12) {
			progress.css('width', '90%');
		    progress.attr('aria-valuenow', '90');
		    progressMessage.text('Прогресс: 90%');
		}

		if (numValid == 13) {
			progress.css('width', '97.5%');
		    progress.attr('aria-valuenow', '97.5');
		    progressMessage.text('Прогресс: 97.5%');
		}

		if (numValid == 14) {
			progress.css('width', '100%');
		    progress.attr('aria-valuenow', '100');
		    progressMessage.text('Прогресс: 100%');
		}
	}); 
});