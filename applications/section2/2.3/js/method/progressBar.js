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
		progress.css('width', '11.1%');
	    progress.attr('aria-valuenow', '11.1');
	    progressMessage.text('Прогресс: 11%');
	}
	
	if (numValid == 2) {
		progress.css('width', '22.2%');
	    progress.attr('aria-valuenow', '22.2');
	    progressMessage.text('Прогресс: 22%');
	}
	
	if (numValid == 3) {
		progress.css('width', '33.3%');
	    progress.attr('aria-valuenow', '33.3');
	    progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 4) {
		progress.css('width', '44.4%');
	    progress.attr('aria-valuenow', '44.4');
	    progressMessage.text('Прогресс: 44%');
	}
	
	if (numValid == 5) {
		progress.css('width', '55.5%');
	    progress.attr('aria-valuenow', '55.5');
	    progressMessage.text('Прогресс: 55%');
	}
	
	if (numValid == 6) {
		progress.css('width', '66.6%');
	    progress.attr('aria-valuenow', '66.6');
	    progressMessage.text('Прогресс: 66%');
	}
	
	if (numValid == 7) {
		progress.css('width', '77.7%');
	    progress.attr('aria-valuenow', '77.7');
	    progressMessage.text('Прогресс: 77%');
	}
	
	if (numValid == 8) {
		progress.css('width', '88.8%');
	    progress.attr('aria-valuenow', '88.8');
	    progressMessage.text('Прогресс: 88%');
	}

	if (numValid == 9) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
});