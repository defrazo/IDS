 //Проверяет заполнение полей и заполняет ProgressBar
$(document).on('ready click focuson focusout mousemove', function() {
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
		progress.css('width', '7.7%');
	    progress.attr('aria-valuenow', '7.7');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '15.4%');
	    progress.attr('aria-valuenow', '15.4');
	    progressMessage.text('Прогресс: 15%');
	}
	
	if (numValid == 3) {
		progress.css('width', '23.1%');
	    progress.attr('aria-valuenow', '23.1');
	    progressMessage.text('Прогресс: 23%');
	}
	
	if (numValid == 4) {
		progress.css('width', '30.8%');
	    progress.attr('aria-valuenow', '30.8');
	    progressMessage.text('Прогресс: 30%');
	}
	
	if (numValid == 5) {
		progress.css('width', '38.5%');
	    progress.attr('aria-valuenow', '38.5');
	    progressMessage.text('Прогресс: 38%');
	}
	
	if (numValid == 6) {
		progress.css('width', '46.2%');
	    progress.attr('aria-valuenow', '46.2');
	    progressMessage.text('Прогресс: 46%');
	}
	
	if (numValid == 7) {
		progress.css('width', '53.9%');
	    progress.attr('aria-valuenow', '53.9');
	    progressMessage.text('Прогресс: 53%');
	}
	
	if (numValid == 8) {
		progress.css('width', '61.6%');
	    progress.attr('aria-valuenow', '61.6');
	    progressMessage.text('Прогресс: 61%');
	}
	
	if (numValid == 9) {
		progress.css('width', '69.3%');
	    progress.attr('aria-valuenow', '69.3');
	    progressMessage.text('Прогресс: 69%');
	}	

	if (numValid == 10) {
		progress.css('width', '77%');
	    progress.attr('aria-valuenow', '77');
	    progressMessage.text('Прогресс: 77%');
	}

	if (numValid == 11) {
		progress.css('width', '86%');
	    progress.attr('aria-valuenow', '86');
	    progressMessage.text('Прогресс: 86%');
	}

	if (numValid == 12) {
		progress.css('width', '92.4%');
	    progress.attr('aria-valuenow', '92.4');
	    progressMessage.text('Прогресс: 92%');
	}

	if (numValid == 13) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}		
}); 