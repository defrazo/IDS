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
		progress.css('width', '8.3%');
		progress.attr('aria-valuenow', '8.3');
		progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '16.6%');
		progress.attr('aria-valuenow', '16.6');
		progressMessage.text('Прогресс: 16%');
	}
	
	if (numValid == 3) {
		progress.css('width', '24.9%');
		progress.attr('aria-valuenow', '24.9');
		progressMessage.text('Прогресс: 24%');
	}
	
	if (numValid == 4) {
		progress.css('width', '33.2%');
		progress.attr('aria-valuenow', '33.2');
		progressMessage.text('Прогресс: 33%');
	}
	
	if (numValid == 5) {
		progress.css('width', '41.5%');
		progress.attr('aria-valuenow', '41.5');
		progressMessage.text('Прогресс: 41%');
	}
	
	if (numValid == 6) {
		progress.css('width', '49.8%');
		progress.attr('aria-valuenow', '49.8');
		progressMessage.text('Прогресс: 49%');
	}
	
	if (numValid == 7) {
		progress.css('width', '58.1%');
		progress.attr('aria-valuenow', '58.1');
		progressMessage.text('Прогресс: 58%');
	}
	
	if (numValid == 8) {
		progress.css('width', '66.4%');
		progress.attr('aria-valuenow', '66.4');
		progressMessage.text('Прогресс: 66%');
	}
	
	if (numValid == 9) {
		progress.css('width', '74.7%');
		progress.attr('aria-valuenow', '74.7');
		progressMessage.text('Прогресс: 74%');
	}	
	
	if (numValid == 10) {
		progress.css('width', '83%');
		progress.attr('aria-valuenow', '83');
		progressMessage.text('Прогресс: 83%');
	}
	
	if (numValid == 11) {
		progress.css('width', '91.3%');
		progress.attr('aria-valuenow', '91.3');
		progressMessage.text('Прогресс: 91%');
	}
	if (numValid == 12) {
		progress.css('width', '100%');
		progress.attr('aria-valuenow', '100');
		progressMessage.text('Прогресс: 100%');
	}
}); 