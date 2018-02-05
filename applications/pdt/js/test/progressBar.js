$(document).ready(function() { //Заполняет шкалу ProgressBar

	$(document).on('click focuson focusout mousemove', function() {

		var numValid = 0;
		$('.tab input[required]').each(function() {
		    if (this.validity.valid) numValid++;
		});

		var progress = $('.progress-bar'),
		    progressMessage = $('.progress-message');

		if (numValid == 1) {
			progress.css('width', '1%');
		    progress.attr('aria-valuenow', '0.57');
		    progressMessage.text('');
		}

		if (numValid == 2) {
			progress.css('width', '1%');
		    progress.attr('aria-valuenow', '1.14');
		    progressMessage.text('');
		}

		if (numValid == 3) {
			progress.css('width', '2%');
		    progress.attr('aria-valuenow', '1.71');
		    progressMessage.text('');
		}

		if (numValid == 4) {
			progress.css('width', '2%');
		    progress.attr('aria-valuenow', '2.28');
		    progressMessage.text('');
		}

		if (numValid == 5) {
			progress.css('width', '3%');
		    progress.attr('aria-valuenow', '2.85');
		    progressMessage.text('3%');
		}

		if (numValid == 6) {
			progress.css('width', '3%');
		    progress.attr('aria-valuenow', '3.42');
		    progressMessage.text('3%');
		}

		if (numValid == 7) {
			progress.css('width', '4%');
		    progress.attr('aria-valuenow', '3.99');
		    progressMessage.text('4%');
		}

		if (numValid == 8) {
			progress.css('width', '5%');
		    progress.attr('aria-valuenow', '4.56');
		    progressMessage.text('5%');
		}

		if (numValid == 9) {
			progress.css('width', '5%');
		    progress.attr('aria-valuenow', '5.13');
		    progressMessage.text('5%');
		}

		if (numValid == 10) {
			progress.css('width', '6%');
		    progress.attr('aria-valuenow', '5.7');
		    progressMessage.text('6%');
		}

		if (numValid == 11) {
			progress.css('width', '6%');
		    progress.attr('aria-valuenow', '6.27');
		    progressMessage.text('6%');
		}

		if (numValid == 12) {
			progress.css('width', '6%');
		    progress.attr('aria-valuenow', '6.84');
		    progressMessage.text('6%');
		}

		if (numValid == 13) {
			progress.css('width', '7%');
		    progress.attr('aria-valuenow', '7.41');
		    progressMessage.text('7%');
		}

		if (numValid == 14) {
			progress.css('width', '8%');
		    progress.attr('aria-valuenow', '7.98');
		    progressMessage.text('8%');
		}

		if (numValid == 15) {
			progress.css('width', '9%');
		    progress.attr('aria-valuenow', '8.55');
		    progressMessage.text('9%');
		}

		if (numValid == 16) {
			progress.css('width', '9%');
		    progress.attr('aria-valuenow', '9.12');
		    progressMessage.text('9%');
		}	
		if (numValid == 17) {
			progress.css('width', '10%');
		    progress.attr('aria-valuenow', '9.69');
		    progressMessage.text('10%');
		}	
		if (numValid == 18) {
			progress.css('width', '10%');
		    progress.attr('aria-valuenow', '10.26');
		    progressMessage.text('10%');
		}	
		if (numValid == 19) {
			progress.css('width', '11%');
		    progress.attr('aria-valuenow', '10.83');
		    progressMessage.text('11%');
		}	
		if (numValid == 20) {
			progress.css('width', '11%');
		    progress.attr('aria-valuenow', '11.4');
		    progressMessage.text('11%');
		}	
		if (numValid == 21) {
			progress.css('width', '12%');
		    progress.attr('aria-valuenow', '11.97');
		    progressMessage.text('12%');
		}	
		if (numValid == 22) {
			progress.css('width', '13%');
		    progress.attr('aria-valuenow', '12.54');
		    progressMessage.text('13%');
		}	
		if (numValid == 23) {
			progress.css('width', '13%');
		    progress.attr('aria-valuenow', '13.11');
		    progressMessage.text('13%');
		}	
		if (numValid == 24) {
			progress.css('width', '14%');
		    progress.attr('aria-valuenow', '13.68');
		    progressMessage.text('14%');
		}	
		if (numValid == 25) {
			progress.css('width', '14%');
		    progress.attr('aria-valuenow', '14.25');
		    progressMessage.text('14%');
		}	
		if (numValid == 26) {
			progress.css('width', '15%');
		    progress.attr('aria-valuenow', '14.82');
		    progressMessage.text('15%');
		}	
		if (numValid == 27) {
			progress.css('width', '15%');
		    progress.attr('aria-valuenow', '15.39');
		    progressMessage.text('15%');
		}	
		if (numValid == 28) {
			progress.css('width', '16%');
		    progress.attr('aria-valuenow', '15.96');
		    progressMessage.text('16%');
		}	
		if (numValid == 29) {
			progress.css('width', '17%');
		    progress.attr('aria-valuenow', '16.53');
		    progressMessage.text('17%');
		}

		if (numValid == 30) {
			progress.css('width', '17%');
		    progress.attr('aria-valuenow', '17.1');
		    progressMessage.text('17%');
		}

		if (numValid == 31) {
			progress.css('width', '18%');
		    progress.attr('aria-valuenow', '17.67');
		    progressMessage.text('18%');
		}

		if (numValid == 32) {
			progress.css('width', '18%');
		    progress.attr('aria-valuenow', '18.24');
		    progressMessage.text('18%');
		}

		if (numValid == 33) {
			progress.css('width', '19%');
		    progress.attr('aria-valuenow', '18.81');
		    progressMessage.text('19%');
		}

		if (numValid == 34) {
			progress.css('width', '19%');
		    progress.attr('aria-valuenow', '19.38');
		    progressMessage.text('19%');
		}

		if (numValid == 35) {
			progress.css('width', '20%');
		    progress.attr('aria-valuenow', '19.95');
		    progressMessage.text('20%');
		}

		if (numValid == 36) {
			progress.css('width', '21%');
		    progress.attr('aria-valuenow', '20.52');
		    progressMessage.text('Прогресс: 21%');
		}

		if (numValid == 37) {
			progress.css('width', '21%');
		    progress.attr('aria-valuenow', '21.09');
		    progressMessage.text('Прогресс: 21%');
		}

		if (numValid == 38) {
			progress.css('width', '22%');
		    progress.attr('aria-valuenow', '21.66');
		    progressMessage.text('Прогресс: 22%');
		}

		if (numValid == 39) {
			progress.css('width', '22%');
		    progress.attr('aria-valuenow', '22.23');
		    progressMessage.text('Прогресс: 22%');
		}

		if (numValid == 40) {
			progress.css('width', '23%');
		    progress.attr('aria-valuenow', '22.8');
		    progressMessage.text('Прогресс: 23%');
		}

		if (numValid == 41) {
			progress.css('width', '23%');
		    progress.attr('aria-valuenow', '23.37');
		    progressMessage.text('Прогресс: 23%');
		}

		if (numValid == 42) {
			progress.css('width', '24%');
		    progress.attr('aria-valuenow', '23.94');
		    progressMessage.text('Прогресс: 24%');
		}

		if (numValid == 43) {
			progress.css('width', '25%');
		    progress.attr('aria-valuenow', '24.51');
		    progressMessage.text('Прогресс: 25%');
		}

		if (numValid == 44) {
			progress.css('width', '25%');
		    progress.attr('aria-valuenow', '25.08');
		    progressMessage.text('Прогресс: 25%');
		}

		if (numValid == 45) {
			progress.css('width', '26%');
		    progress.attr('aria-valuenow', '25.65');
		    progressMessage.text('Прогресс: 26%');
		}

		if (numValid == 46) {
			progress.css('width', '26%');
		    progress.attr('aria-valuenow', '26.22');
		    progressMessage.text('Прогресс: 26%');
		}

		if (numValid == 47) {
			progress.css('width', '27%');
		    progress.attr('aria-valuenow', '26.79');
		    progressMessage.text('Прогресс: 27%');
		}

		if (numValid == 48) {
			progress.css('width', '27%');
		    progress.attr('aria-valuenow', '27.36');
		    progressMessage.text('Прогресс: 27%');
		}

		if (numValid == 49) {
			progress.css('width', '28%');
		    progress.attr('aria-valuenow', '27.93');
		    progressMessage.text('Прогресс: 28%');
		}

		if (numValid == 50) {
			progress.css('width', '28%');
		    progress.attr('aria-valuenow', '28.5');
		    progressMessage.text('Прогресс: 28%');
		}

		if (numValid == 51) {
			progress.css('width', '29%');
		    progress.attr('aria-valuenow', '29.07');
		    progressMessage.text('Прогресс: 29%');
		}

		if (numValid == 52) {
			progress.css('width', '30%');
		    progress.attr('aria-valuenow', '29.64');
		    progressMessage.text('Прогресс: 30%');
		}

		if (numValid == 53) {
			progress.css('width', '30%');
		    progress.attr('aria-valuenow', '30.21');
		    progressMessage.text('Прогресс: 30%');
		}

		if (numValid == 54) {
			progress.css('width', '31%');
		    progress.attr('aria-valuenow', '30.78');
		    progressMessage.text('Прогресс: 31%');
		}

		if (numValid == 55) {
			progress.css('width', '31%');
		    progress.attr('aria-valuenow', '31.35');
		    progressMessage.text('Прогресс: 31%');
		}

		if (numValid == 56) {
			progress.css('width', '32%');
		    progress.attr('aria-valuenow', '31.92');
		    progressMessage.text('Прогресс: 32%');
		}

		if (numValid == 57) {
			progress.css('width', '32%');
		    progress.attr('aria-valuenow', '32.49');
		    progressMessage.text('Прогресс: 32%');
		}

		if (numValid == 58) {
			progress.css('width', '33%');
		    progress.attr('aria-valuenow', '33.06');
		    progressMessage.text('Прогресс: 33%');
		}

		if (numValid == 59) {
			progress.css('width', '34%');
		    progress.attr('aria-valuenow', '33.63');
		    progressMessage.text('Прогресс: 34%');
		}

		if (numValid == 60) {
			progress.css('width', '34%');
		    progress.attr('aria-valuenow', '34.2');
		    progressMessage.text('Прогресс: 34%');
		}

		if (numValid == 61) {
			progress.css('width', '35%');
		    progress.attr('aria-valuenow', '34.77');
		    progressMessage.text('Прогресс: 35%');
		}

		if (numValid == 62) {
			progress.css('width', '35%');
		    progress.attr('aria-valuenow', '35.34');
		    progressMessage.text('Прогресс: 35%');
		}

		if (numValid == 63) {
			progress.css('width', '36%');
		    progress.attr('aria-valuenow', '36.48');
		    progressMessage.text('Прогресс: 36%');
		}

		if (numValid == 64) {
			progress.css('width', '37%');
		    progress.attr('aria-valuenow', '37.05');
		    progressMessage.text('Прогресс: 37%');
		}

		if (numValid == 65) {
			progress.css('width', '38%');
		    progress.attr('aria-valuenow', '37.62');
		    progressMessage.text('Прогресс: 38%');
		}

		if (numValid == 66) {
			progress.css('width', '38%');
		    progress.attr('aria-valuenow', '38.19');
		    progressMessage.text('Прогресс: 38%');
		}

		if (numValid == 67) {
			progress.css('width', '39%');
		    progress.attr('aria-valuenow', '38.76');
		    progressMessage.text('Прогресс: 39%');
		}

		if (numValid == 68) {
			progress.css('width', '39%');
		    progress.attr('aria-valuenow', '39.33');
		    progressMessage.text('Прогресс: 39%');
		}

		if (numValid == 69) {
			progress.css('width', '40%');
		    progress.attr('aria-valuenow', '39.9');
		    progressMessage.text('Прогресс: 40%');
		}

		if (numValid == 70) {
			progress.css('width', '40%');
		    progress.attr('aria-valuenow', '40.47');
		    progressMessage.text('Прогресс: 40%');
		}

		if (numValid == 71) {
			progress.css('width', '41%');
		    progress.attr('aria-valuenow', '41.04');
		    progressMessage.text('Прогресс: 41%');
		}

		if (numValid == 72) {
			progress.css('width', '42%');
		    progress.attr('aria-valuenow', '41.61');
		    progressMessage.text('Прогресс: 42%');
		}

		if (numValid == 73) {
			progress.css('width', '42%');
		    progress.attr('aria-valuenow', '42.18');
		    progressMessage.text('Прогресс: 42%');
		}

		if (numValid == 74) {
			progress.css('width', '43%');
		    progress.attr('aria-valuenow', '42.75');
		    progressMessage.text('Прогресс: 43%');
		}

		if (numValid == 75) {
			progress.css('width', '43%');
		    progress.attr('aria-valuenow', '43.32');
		    progressMessage.text('Прогресс: 43%');
		}

		if (numValid == 76) {
			progress.css('width', '44%');
		    progress.attr('aria-valuenow', '43.89');
		    progressMessage.text('Прогресс: 44%');
		}

		if (numValid == 77) {
			progress.css('width', '44%');
		    progress.attr('aria-valuenow', '44.46');
		    progressMessage.text('Прогресс: 44%');
		}

		if (numValid == 78) {
			progress.css('width', '45%');
		    progress.attr('aria-valuenow', '45.03');
		    progressMessage.text('Прогресс: 45%');
		}

		if (numValid == 79) {
			progress.css('width', '46%');
		    progress.attr('aria-valuenow', '45.6');
		    progressMessage.text('Прогресс: 46%');
		}

		if (numValid == 80) {
			progress.css('width', '46%');
		    progress.attr('aria-valuenow', '46.17');
		    progressMessage.text('Прогресс: 46%');
		}

		if (numValid == 81) {
			progress.css('width', '47%');
		    progress.attr('aria-valuenow', '46.74');
		    progressMessage.text('Прогресс: 47%');
		}

		if (numValid == 82) {
			progress.css('width', '47%');
		    progress.attr('aria-valuenow', '47.31');
		    progressMessage.text('Прогресс: 47%');
		}

		if (numValid == 83) {
			progress.css('width', '48%');
		    progress.attr('aria-valuenow', '47.88');
		    progressMessage.text('Прогресс: 48%');
		}

		if (numValid == 84) {
			progress.css('width', '48%');
		    progress.attr('aria-valuenow', '48.45');
		    progressMessage.text('Прогресс: 48%');
		}

		if (numValid == 85) {
			progress.css('width', '49%');
		    progress.attr('aria-valuenow', '49.02');
		    progressMessage.text('Прогресс: 49%');
		}

		if (numValid == 86) {
			progress.css('width', '50%');
		    progress.attr('aria-valuenow', '49.59');
		    progressMessage.text('Прогресс: 50%');
		}

		if (numValid == 87) {
			progress.css('width', '50%');
		    progress.attr('aria-valuenow', '50.16');
		    progressMessage.text('Прогресс: 50%');
		}

		if (numValid == 89) {
			progress.css('width', '51%');
		    progress.attr('aria-valuenow', '50.73');
		    progressMessage.text('Прогресс: 51%');
		}

		if (numValid == 90) {
			progress.css('width', '51%');
		    progress.attr('aria-valuenow', '51.3');
		    progressMessage.text('Прогресс: 51%');
		}

		if (numValid == 91) {
			progress.css('width', '52%');
		    progress.attr('aria-valuenow', '51.87');
		    progressMessage.text('Прогресс: 52%');
		}

		if (numValid == 92) {
			progress.css('width', '52%');
		    progress.attr('aria-valuenow', '52.44');
		    progressMessage.text('Прогресс: 52%');
		}

		if (numValid == 93) {
			progress.css('width', '53%');
		    progress.attr('aria-valuenow', '53.01');
		    progressMessage.text('Прогресс: 53%');
		}

		if (numValid == 94) {
			progress.css('width', '54%');
		    progress.attr('aria-valuenow', '53.58');
		    progressMessage.text('Прогресс: 54%');
		}

		if (numValid == 95) {
			progress.css('width', '54%');
		    progress.attr('aria-valuenow', '54.15');
		    progressMessage.text('Прогресс: 54%');
		}

		if (numValid == 96) {
			progress.css('width', '55%');
		    progress.attr('aria-valuenow', '54.72');
		    progressMessage.text('Прогресс: 55%');
		}

		if (numValid == 97) {
			progress.css('width', '55%');
		    progress.attr('aria-valuenow', '55.29');
		    progressMessage.text('Прогресс: 55%');
		}

		if (numValid == 98) {
			progress.css('width', '56%');
		    progress.attr('aria-valuenow', '55.86');
		    progressMessage.text('Прогресс: 56%');
		}

		if (numValid == 99) {
			progress.css('width', '56%');
		    progress.attr('aria-valuenow', '56.43');
		    progressMessage.text('Прогресс: 56%');
		}

		if (numValid == 100) {
			progress.css('width', '57%');
		    progress.attr('aria-valuenow', '57');
		    progressMessage.text('Прогресс: 57%');
		}

		if (numValid == 101) {
			progress.css('width', '58%');
		    progress.attr('aria-valuenow', '57.57');
		    progressMessage.text('Прогресс: 58%');
		}

		if (numValid == 102) {
			progress.css('width', '58%');
		    progress.attr('aria-valuenow', '58.14');
		    progressMessage.text('Прогресс: 58%');
		}

		if (numValid == 103) {
			progress.css('width', '59%');
		    progress.attr('aria-valuenow', '58.71');
		    progressMessage.text('Прогресс: 59%');
		}

		if (numValid == 104) {
			progress.css('width', '59%');
		    progress.attr('aria-valuenow', '59.28');
		    progressMessage.text('Прогресс: 59%');
		}

		if (numValid == 105) {
			progress.css('width', '60%');
		    progress.attr('aria-valuenow', '59.85');
		    progressMessage.text('Прогресс: 60%');
		}

		if (numValid == 106) {
			progress.css('width', '60%');
		    progress.attr('aria-valuenow', '60.42');
		    progressMessage.text('Прогресс: 60%');
		}

		if (numValid == 107) {
			progress.css('width', '61%');
		    progress.attr('aria-valuenow', '60.99');
		    progressMessage.text('Прогресс: 61%');
		}

		if (numValid == 108) {
			progress.css('width', '62%');
		    progress.attr('aria-valuenow', '61.56');
		    progressMessage.text('Прогресс: 62%');
		}

		if (numValid == 109) {
			progress.css('width', '62%');
		    progress.attr('aria-valuenow', '62.13');
		    progressMessage.text('Прогресс: 62%');
		}

		if (numValid == 110) {
			progress.css('width', '63%');
		    progress.attr('aria-valuenow', '62.7');
		    progressMessage.text('Прогресс: 63%');
		}

		if (numValid == 111) {
			progress.css('width', '63%');
		    progress.attr('aria-valuenow', '63.27');
		    progressMessage.text('Прогресс: 63%');
		}

		if (numValid == 112) {
			progress.css('width', '64%');
		    progress.attr('aria-valuenow', '63.84');
		    progressMessage.text('Прогресс: 64%');
		}

		if (numValid == 113) {
			progress.css('width', '64%');
		    progress.attr('aria-valuenow', '64.41');
		    progressMessage.text('Прогресс: 64%');
		}

		if (numValid == 114) {
			progress.css('width', '65%');
		    progress.attr('aria-valuenow', '64.98');
		    progressMessage.text('Прогресс: 65%');
		}

		if (numValid == 115) {
			progress.css('width', '66%');
		    progress.attr('aria-valuenow', '65.55');
		    progressMessage.text('Прогресс: 66%');
		}

		if (numValid == 116) {
			progress.css('width', '66%');
		    progress.attr('aria-valuenow', '66.12');
		    progressMessage.text('Прогресс: 66%');
		}

		if (numValid == 117) {
			progress.css('width', '67%');
		    progress.attr('aria-valuenow', '66.69');
		    progressMessage.text('Прогресс: 67%');
		}

		if (numValid == 118) {
			progress.css('width', '67%');
		    progress.attr('aria-valuenow', '67.26');
		    progressMessage.text('Прогресс: 67%');
		}

		if (numValid == 119) {
			progress.css('width', '68%');
		    progress.attr('aria-valuenow', '67.83');
		    progressMessage.text('Прогресс: 68%');
		}

		if (numValid == 120) {
			progress.css('width', '68%');
		    progress.attr('aria-valuenow', '68.4');
		    progressMessage.text('Прогресс: 68%');
		}

		if (numValid == 121) {
			progress.css('width', '69%');
		    progress.attr('aria-valuenow', '68.97');
		    progressMessage.text('Прогресс: 69%');
		}

		if (numValid == 122) {
			progress.css('width', '70%');
		    progress.attr('aria-valuenow', '69.54');
		    progressMessage.text('Прогресс: 70%');
		}

		if (numValid == 123) {
			progress.css('width', '70%');
		    progress.attr('aria-valuenow', '70.11');
		    progressMessage.text('Прогресс: 70%');
		}

		if (numValid == 124) {
			progress.css('width', '71%');
		    progress.attr('aria-valuenow', '70.68');
		    progressMessage.text('Прогресс: 71%');
		}

		if (numValid == 125) {
			progress.css('width', '71%');
		    progress.attr('aria-valuenow', '71.25');
		    progressMessage.text('Прогресс: 71%');
		}

		if (numValid == 126) {
			progress.css('width', '72%');
		    progress.attr('aria-valuenow', '71.82');
		    progressMessage.text('Прогресс: 72%');
		}

		if (numValid == 127) {
			progress.css('width', '72%');
		    progress.attr('aria-valuenow', '72.39');
		    progressMessage.text('Прогресс: 72%');
		}

		if (numValid == 128) {
			progress.css('width', '73%');
		    progress.attr('aria-valuenow', '72.96');
		    progressMessage.text('Прогресс: 73%');
		}

		if (numValid == 129) {
			progress.css('width', '74%');
		    progress.attr('aria-valuenow', '73.53');
		    progressMessage.text('Прогресс: 74%');
		}

		if (numValid == 130) {
			progress.css('width', '74%');
		    progress.attr('aria-valuenow', '74.1');
		    progressMessage.text('Прогресс: 74%');
		}

		if (numValid == 131) {
			progress.css('width', '75%');
		    progress.attr('aria-valuenow', '74.67');
		    progressMessage.text('Прогресс: 75%');
		}

		if (numValid == 132) {
			progress.css('width', '75%');
		    progress.attr('aria-valuenow', '75.24');
		    progressMessage.text('Прогресс: 75%');
		}

		if (numValid == 133) {
			progress.css('width', '76%');
		    progress.attr('aria-valuenow', '75.81');
		    progressMessage.text('Прогресс: 76%');
		}

		if (numValid == 134) {
			progress.css('width', '76%');
		    progress.attr('aria-valuenow', '76.38');
		    progressMessage.text('Прогресс: 76%');
		}

		if (numValid == 135) {
			progress.css('width', '77%');
		    progress.attr('aria-valuenow', '76.95');
		    progressMessage.text('Прогресс: 77%');
		}

		if (numValid == 136) {
			progress.css('width', '77%');
		    progress.attr('aria-valuenow', '77.52');
		    progressMessage.text('Прогресс: 77%');
		}

		if (numValid == 137) {
			progress.css('width', '78%');
		    progress.attr('aria-valuenow', '78.09');
		    progressMessage.text('Прогресс: 78%');
		}

		if (numValid == 138) {
			progress.css('width', '79%');
		    progress.attr('aria-valuenow', '78.66');
		    progressMessage.text('Прогресс: 79%');
		}

		if (numValid == 139) {
			progress.css('width', '79%');
		    progress.attr('aria-valuenow', '79.23');
		    progressMessage.text('Прогресс: 79%');
		}

		if (numValid == 140) {
			progress.css('width', '80%');
		    progress.attr('aria-valuenow', '79.8');
		    progressMessage.text('Прогресс: 80%');
		}

		if (numValid == 141) {
			progress.css('width', '80%');
		    progress.attr('aria-valuenow', '80.37');
		    progressMessage.text('Прогресс: 80%');
		}

		if (numValid == 142) {
			progress.css('width', '81%');
		    progress.attr('aria-valuenow', '80.94');
		    progressMessage.text('Прогресс: 81%');
		}

		if (numValid == 143) {
			progress.css('width', '82%');
		    progress.attr('aria-valuenow', '81.51');
		    progressMessage.text('Прогресс: 82%');
		}

		if (numValid == 144) {
			progress.css('width', '82%');
		    progress.attr('aria-valuenow', '82.08');
		    progressMessage.text('Прогресс: 82%');
		}

		if (numValid == 145) {
			progress.css('width', '83%');
		    progress.attr('aria-valuenow', '82.65');
		    progressMessage.text('Прогресс: 83%');
		}

		if (numValid == 146) {
			progress.css('width', '83%');
		    progress.attr('aria-valuenow', '83.22');
		    progressMessage.text('Прогресс: 83%');
		}

		if (numValid == 147) {
			progress.css('width', '84%');
		    progress.attr('aria-valuenow', '83.79');
		    progressMessage.text('Прогресс: 84%');
		}

		if (numValid == 148) {
			progress.css('width', '84%');
		    progress.attr('aria-valuenow', '84.36');
		    progressMessage.text('Прогресс: 84%');
		}

		if (numValid == 149) {
			progress.css('width', '85%');
		    progress.attr('aria-valuenow', '84.93');
		    progressMessage.text('Прогресс: 85%');
		}

		if (numValid == 150) {
			progress.css('width', '85%');
		    progress.attr('aria-valuenow', '85.5');
		    progressMessage.text('Прогресс: 85%');
		}

		if (numValid == 151) {
			progress.css('width', '86%');
		    progress.attr('aria-valuenow', '86.07');
		    progressMessage.text('Прогресс: 86%');
		}

		if (numValid == 152) {
			progress.css('width', '87%');
		    progress.attr('aria-valuenow', '86.64');
		    progressMessage.text('Прогресс: 87%');
		}

		if (numValid == 153) {
			progress.css('width', '87%');
		    progress.attr('aria-valuenow', '87.21');
		    progressMessage.text('Прогресс: 87%');
		}

		if (numValid == 154) {
			progress.css('width', '88%');
		    progress.attr('aria-valuenow', '87.78');
		    progressMessage.text('Прогресс: 88%');
		}

		if (numValid == 155) {
			progress.css('width', '88%');
		    progress.attr('aria-valuenow', '88.35');
		    progressMessage.text('Прогресс: 88%');
		}

		if (numValid == 156) {
			progress.css('width', '89%');
		    progress.attr('aria-valuenow', '88.92');
		    progressMessage.text('Прогресс: 89%');
		}

		if (numValid == 157) {
			progress.css('width', '89%');
		    progress.attr('aria-valuenow', '89.49');
		    progressMessage.text('Прогресс: 89%');
		}

		if (numValid == 158) {
			progress.css('width', '90%');
		    progress.attr('aria-valuenow', '90.06');
		    progressMessage.text('Прогресс: 90%');
		}

		if (numValid == 159) {
			progress.css('width', '91%');
		    progress.attr('aria-valuenow', '90.63');
		    progressMessage.text('Прогресс: 91%');
		}

		if (numValid == 160) {
			progress.css('width', '91%');
		    progress.attr('aria-valuenow', '91.2');
		    progressMessage.text('Прогресс: 91%');
		}

		if (numValid == 161) {
			progress.css('width', '92%');
		    progress.attr('aria-valuenow', '91.77');
		    progressMessage.text('Прогресс: 92%');
		}

		if (numValid == 162) {
			progress.css('width', '92%');
		    progress.attr('aria-valuenow', '92.34');
		    progressMessage.text('Прогресс: 92%');
		}

		if (numValid == 163) {
			progress.css('width', '93%');
		    progress.attr('aria-valuenow', '92.91');
		    progressMessage.text('Прогресс: 93%');
		}

		if (numValid == 164) {
			progress.css('width', '93%');
		    progress.attr('aria-valuenow', '93.48');
		    progressMessage.text('Прогресс: 93%');
		}

		if (numValid == 165) {
			progress.css('width', '94%');
		    progress.attr('aria-valuenow', '94.05');
		    progressMessage.text('Прогресс: 94%');
		}

		if (numValid == 166) {
			progress.css('width', '95%');
		    progress.attr('aria-valuenow', '94.62');
		    progressMessage.text('Прогресс: 95%');
		}

		if (numValid == 167) {
			progress.css('width', '95%');
		    progress.attr('aria-valuenow', '95.19');
		    progressMessage.text('Прогресс: 95%');
		}

		if (numValid == 168) {
			progress.css('width', '96%');
		    progress.attr('aria-valuenow', '95.76');
		    progressMessage.text('Прогресс: 96%');
		}

		if (numValid == 169) {
			progress.css('width', '96%');
		    progress.attr('aria-valuenow', '96.33');
		    progressMessage.text('Прогресс: 96%');
		}

		if (numValid == 170) {
			progress.css('width', '97%');
		    progress.attr('aria-valuenow', '96.9');
		    progressMessage.text('Прогресс: 97%');
		}

		if (numValid == 171) {
			progress.css('width', '97%');
		    progress.attr('aria-valuenow', '97.47');
		    progressMessage.text('Прогресс: 97%');
		}

		if (numValid == 172) {
			progress.css('width', '98%');
		    progress.attr('aria-valuenow', '98.04');
		    progressMessage.text('Прогресс: 98%');
		}

		if (numValid == 173) {
			progress.css('width', '99%');
		    progress.attr('aria-valuenow', '98.61');
		    progressMessage.text('Прогресс: 99%');
		}

		if (numValid == 174) {
			progress.css('width', '100%');
		    progress.attr('aria-valuenow', '100');
		    progressMessage.text('Прогресс: 100%');
		}
	}); 
});