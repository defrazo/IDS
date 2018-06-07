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
		progress.css('width', '9.1%');
	    progress.attr('aria-valuenow', '9.1');
	    progressMessage.text('');
	}
	
	if (numValid == 2) {
		progress.css('width', '18.2%');
	    progress.attr('aria-valuenow', '18.2');
	    progressMessage.text('Прогресс: 18%');
	}
	
	if (numValid == 3) {
		progress.css('width', '27.3%');
	    progress.attr('aria-valuenow', '27.3');
	    progressMessage.text('Прогресс: 27%');
	}
	
	if (numValid == 4) {
		progress.css('width', '36.4%');
	    progress.attr('aria-valuenow', '36.4');
	    progressMessage.text('Прогресс: 36%');
	}
	
	if (numValid == 5) {
		progress.css('width', '45.5%');
	    progress.attr('aria-valuenow', '45.5');
	    progressMessage.text('Прогресс: 45%');
	}
	
	if (numValid == 6) {
		progress.css('width', '54.6%');
	    progress.attr('aria-valuenow', '54.6');
	    progressMessage.text('Прогресс: 54%');
	}
	
	if (localStorage.getItem('tmr1inp') != null) {
		progress.css('width', '63.7%');
	    progress.attr('aria-valuenow', '63.7');
	    progressMessage.text('Прогресс: 63%');
	}
	
	if (localStorage.getItem('tmr2inp') != null) {
		progress.css('width', '72.8%');
	    progress.attr('aria-valuenow', '72.8');
	    progressMessage.text('Прогресс: 72%');
	}

	if (localStorage.getItem('tmr3inp') != null) {
		progress.css('width', '81.9%');
	    progress.attr('aria-valuenow', '81.9');
	    progressMessage.text('Прогресс: 81%');
	}

	if (localStorage.getItem('tmr4inp') != null) {
		progress.css('width', '91%');
	    progress.attr('aria-valuenow', '91');
	    progressMessage.text('Прогресс: 91%');
	}

	if (localStorage.getItem('tmr5inp') != null) {
		progress.css('width', '100%');
	    progress.attr('aria-valuenow', '100');
	    progressMessage.text('Прогресс: 100%');
	}
}); 