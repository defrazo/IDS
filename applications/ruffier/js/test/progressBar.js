$(document).ready(function() { //Проверяет заполнение полей и заполняет ProgressBar
	
	$(document).on('click focuson focusout mousemove', function() {

		var numValid = 0;
		$('.tab input[required]').each(function() {
		    if (this.validity.valid) numValid++;
		});

		var progress = $('.progress-bar'),
		    progressMessage = $('.progress-message');

		if (numValid == 0) {
			progress.css('width', '0');
		    progress.attr('aria-valuenow', '0');
		    progressMessage.text('Прогресс: 0%');
		}
		
		if (numValid == 1) {
			progress.css('width', '3%');
		    progress.attr('aria-valuenow', '3.45');
		    progressMessage.text('3%');
		}
		
		if (numValid == 2) {
			progress.css('width', '6%');
		    progress.attr('aria-valuenow', '6.9');
		    progressMessage.text('6%');
		}
		
		if (numValid == 3) {
			progress.css('width', '10%');
		    progress.attr('aria-valuenow', '10.35');
		    progressMessage.text('Прогресс: 10%');
		}
		
		if (numValid == 4) {
			progress.css('width', '13%');
		    progress.attr('aria-valuenow', '13.8');
		    progressMessage.text('Прогресс: 13%');
		}
		
		if (numValid == 5) {
			progress.css('width', '17%');
		    progress.attr('aria-valuenow', '17.25');
		    progressMessage.text('Прогресс: 17%');
		}
		
		if (numValid == 6) {
			progress.css('width', '20%');
		    progress.attr('aria-valuenow', '20.7');
		    progressMessage.text('Прогресс: 20%');
		}
		
		if (numValid == 7) {
			progress.css('width', '24%');
		    progress.attr('aria-valuenow', '24.15');
		    progressMessage.text('Прогресс: 24%');
		}
		
		if (numValid == 8) {
			progress.css('width', '27%');
		    progress.attr('aria-valuenow', '27.6');
		    progressMessage.text('Прогресс: 27%');
		}
		
		if (numValid == 9) {
			progress.css('width', '31%');
		    progress.attr('aria-valuenow', '31.05');
		    progressMessage.text('Прогресс: 31%');
		}
		
		if (numValid == 10) {
			progress.css('width', '34%');
		    progress.attr('aria-valuenow', '34.5');
		    progressMessage.text('Прогресс: 34%');
		}
		
		if (numValid == 11) {
			progress.css('width', '37%');
		    progress.attr('aria-valuenow', '37.95');
		    progressMessage.text('Прогресс: 37%');
		}
		
		if (numValid == 12) {
			progress.css('width', '41%');
		    progress.attr('aria-valuenow', '41.4');
		    progressMessage.text('Прогресс: 41%');
		}
		
		if (numValid == 13) {
			progress.css('width', '44%');
		    progress.attr('aria-valuenow', '44.85');
		    progressMessage.text('Прогресс: 44%');
		}
		
		if (numValid == 14) {
			progress.css('width', '48%');
		    progress.attr('aria-valuenow', '48.3');
		    progressMessage.text('Прогресс: 48%');
		}
		
		if (numValid == 15) {
			progress.css('width', '51%');
		    progress.attr('aria-valuenow', '51.75');
		    progressMessage.text('Прогресс: 51%');
		}
		
		if (numValid == 16) {
			progress.css('width', '55%');
		    progress.attr('aria-valuenow', '55.2');
		    progressMessage.text('Прогресс: 55%');
		}	
		
		if (numValid == 17) {
			progress.css('width', '58%');
		    progress.attr('aria-valuenow', '58.65');
		    progressMessage.text('Прогресс: 58%');
		}	
		
		if (numValid == 18) {
			progress.css('width', '62%');
		    progress.attr('aria-valuenow', '62.1');
		    progressMessage.text('Прогресс: 62%');
		}	
		
		if (numValid == 19) {
			progress.css('width', '65%');
		    progress.attr('aria-valuenow', '65.55');
		    progressMessage.text('Прогресс: 65%');
		}	
		
		if (numValid == 20) {
			progress.css('width', '69%');
		    progress.attr('aria-valuenow', '69');
		    progressMessage.text('Прогресс: 69%');
		}	
		
		if (numValid == 21) {
			progress.css('width', '72%');
		    progress.attr('aria-valuenow', '72.45');
		    progressMessage.text('Прогресс: 72%');
		}	
		
		if (numValid == 22) {
			progress.css('width', '75%');
		    progress.attr('aria-valuenow', '75.9');
		    progressMessage.text('Прогресс: 75%');
		}	
		
		if (numValid == 23) {
			progress.css('width', '79%');
		    progress.attr('aria-valuenow', '79.35');
		    progressMessage.text('Прогресс: 79%');
		}	
		
		if (numValid == 24) {
			progress.css('width', '82%');
		    progress.attr('aria-valuenow', '82.8');
		    progressMessage.text('Прогресс: 82%');
		}	
		
		if (numValid == 25) {
			progress.css('width', '86%');
		    progress.attr('aria-valuenow', '86.25');
		    progressMessage.text('Прогресс: 86%');
		}	
		
		if (numValid == 26) {
			progress.css('width', '89%');
		    progress.attr('aria-valuenow', '89.7');
		    progressMessage.text('Прогресс: 89%');
		}	
		
		if (numValid == 27) {
			progress.css('width', '93%');
		    progress.attr('aria-valuenow', '93.15');
		    progressMessage.text('Прогресс: 93%');
		}	
		
		if (numValid == 28) {
			progress.css('width', '96%');
		    progress.attr('aria-valuenow', '96.6');
		    progressMessage.text('Прогресс: 96%');
		}	
		
		if (numValid == 29) {
			progress.css('width', '100%');
		    progress.attr('aria-valuenow', '100');
		    progressMessage.text('Прогресс: 100%');
		}	
	}); 
});