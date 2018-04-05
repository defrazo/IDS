$(document).ready(function() {
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	date = localStorage.getItem('dateinp');
	cold = localStorage.getItem('coldinp');
	weight = localStorage.getItem('weightinp');
	height = localStorage.getItem('heightinp');
	pulse = localStorage.getItem('pulseinp');
	sist = localStorage.getItem('sistinp');
	dia = localStorage.getItem('diainp');
	gender = localStorage.getItem('genderinp');
	rec1 = localStorage.getItem('rec1inp');
	rec2 = localStorage.getItem('rec2inp');
	exercval = localStorage.getItem('exercvalinp');
	lift = localStorage.getItem('liftinp');
	jump = localStorage.getItem('jumpinp');
	group = localStorage.getItem('groupinp');
	recovery = localStorage.getItem('recoveryinp');
	exercise = localStorage.getItem('exerciseinp');
	lung = localStorage.getItem('lunginp');
	training = localStorage.getItem('traininginp');
	fac = localStorage.getItem('facinp');
	
	imt = height - weight;
	cap = lung / weight;
	var points = 0;
	if (group == 'Основная') {

		switch (true) {
			case (pulse >= 90) : points = points + 1; break;
			case ((pulse > 76) && (pulse < 90)) : points = points + 2; break;
			case ((pulse > 68) && (pulse < 75)) : points = points + 3; break;
			case ((pulse > 60) && (pulse < 67)) : points = points + 4; break;
			case ((pulse > 51) && (pulse < 59)) : points = points + 5; break;
			case (pulse <= 50) : points = points + 6; break;
		}

		switch (true) {
			case (imt <= 90) : points = points + 1; break;
			case ((imt >= 91) && (imt <= 95)) : points = points + 2; break;
			case ((imt >= 96) && (imt <= 100)) : points = points + 3; break;
			case ((imt >= 101) && (imt <= 105)) : points = points + 4; break;
			case ((imt >= 106) && (imt <= 110)) : points = points + 6; break;
			case (imt > 110) : points = points + 8; break;
		}

		if (gender == 'Мужской') {

			if (recovery == 'Бег') {

				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 12) : points = points + 1; break;
					case ((rec >= 11.01) && (rec <= 12.00)) : points = points + 2; break;
					case ((rec >= 10.01) && (rec <= 11.00)) : points = points + 3; break;
					case ((rec >= 9.01) && (rec <= 10.00)) : points = points + 4; break;
					case ((rec >= 8.01) && (rec <= 9.00)) : points = points + 5; break;
					case ((rec >= 7.30) && (rec <= 8.00)) : points = points + 7; break;
					case (rec < 7.30) : points = points + 9; break;
				} 
			} else {

				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 3) : points = points + 1; break;
					case ((rec >= 2.01) && (rec <= 3.00)) : points = points + 3; break;
					case ((rec >= 1.00) && (rec <= 2.00)) : points = points + 5; break;
					case (rec < 1.00) : points = points + 7; break;
				}	
			}

			if (exercise == 'push') {

				switch (true) {
					case (exercval < 2) : points = points + 1; break;
					case ((exercval >= 2) && (exercval <= 3)) : points = points + 2; break;
					case ((exercval >= 4) && (exercval <= 6)) : points = points + 3; break;
					case ((exercval >= 7) && (exercval <= 10)) : points = points + 4; break;
					case ((exercval >= 11) && (exercval <= 14)) : points = points + 5; break;
					case (exercval > 15) : points = points + 6; break;
				}
			} else {

				switch (true) {
					case (exercval < 4) : points = points + 1; break;
					case ((exercval >= 4) && (exercval <= 9)) : points = points + 2; break;
					case ((exercval >= 10) && (exercval <= 19)) : points = points + 3; break;
					case ((exercval >= 20) && (exercval <= 29)) : points = points + 4; break;
					case ((exercval >= 30) && (exercval <= 39)) : points = points + 5; break;
					case (exercval > 40) : points = points + 6; break;
				}
			}

			switch (true) {
				case (jump < 200) : points = points + 1; break;
				case ((jump >= 200) && (jump <= 209)) : points = points + 2; break;
				case ((jump >= 210) && (jump <= 219)) : points = points + 3; break;
				case ((jump >= 220) && (jump <= 229)) : points = points + 4; break;
				case ((jump >= 230) && (jump <= 239)) : points = points + 5; break;
				case (jump > 240) : points = points + 6; break;
			}
		} else {

			if (recovery == 'Бег') {

				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 14) : points = points + 1; break;
					case ((rec >= 13.01) && (rec <= 14.00)) : points = points + 2; break;
					case ((rec >= 12.01) && (rec <= 13.00)) : points = points + 3; break;
					case ((rec >= 11.01) && (rec <= 12.00)) : points = points + 4; break;
					case ((rec >= 10.01) && (rec <= 11.00)) : points = points + 5; break;
					case ((rec >= 9.30) && (rec <= 10.00)) : points = points + 7; break;
					case (rec < 10) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 3) : points = points + 1; break;
					case ((rec >= 2.01) && (rec <= 3.00)) : points = points + 3; break;
					case ((rec >= 1.00) && (rec <= 2.00)) : points = points + 5; break;
					case (rec < 1.00) : points = points + 7; break;
				}	
			}

			switch (true) {
				case (lift < 10) : points = points + 1; break;
				case ((lift >= 10) && (lift <= 19)) : points = points + 2; break;
				case ((lift >= 20) && (lift <= 29)) : points = points + 3; break;
				case ((lift >= 30) && (lift <= 39)) : points = points + 4; break;
				case ((lift >= 40) && (lift <= 49)) : points = points + 5; break;
				case (lift > 50) : points = points + 6; break;
			}

			switch (true) {
				case (jump < 140) : points = points + 1; break;
				case ((jump >= 140) && (jump <= 149)) : points = points + 2; break;
				case ((jump >= 150) && (jump <= 159)) : points = points + 3; break;
				case ((jump >= 160) && (jump <= 169)) : points = points + 4; break;
				case ((jump >= 170) && (jump <= 179)) : points = points + 5; break;
				case (jump > 180) : points = points + 6; break;
			}
		}
		
		switch (true) {
			case (cold > 5) : points = points + 1; break;
			case ((cold >= 4) && (cold <= 5)) : points = points + 2; break;
			case ((cold >= 2) && (cold <= 3)) : points = points + 3; break;
		}
	} else {
		
		switch (true) {
			case (pulse >= 90) : points = points + 1; break;
			case ((pulse > 76) && (pulse < 90)) : points = points + 2; break;
			case ((pulse > 68) && (pulse < 75)) : points = points + 3; break;
			case ((pulse > 60) && (pulse < 67)) : points = points + 4; break;
			case ((pulse > 51) && (pulse < 59)) : points = points + 5; break;
			case (pulse <= 50) : points = points + 6; break;
		}

		if (gender == 'Мужской') {

			switch (true) {
				case ((sist > 140) && (dia > 90)) : points = points + 1; break;
				case ((sist >= 131) && (sist <= 140) && (dia >= 81) && (dia <= 90)) : points = points + 2.5; break;
				case ((sist >= 121) && (sist <= 130) && (dia >= 76) && (dia <= 78)) : points = points + 4.5; break;
				case ((sist >= 111) && (sist <= 120) && (dia >= 71) && (dia <= 75)) : points = points + 6.5; break;
				case ((sist >= 106) && (sist <= 110) && (dia >= 60) && (dia <= 70)) : points = points + 8.5; break;
			}
			
			switch (true) {
				case (lung <= 50) : points = points + 1; break;
				case (lung >= 50) && (lung <= 55) : points = points + 2; break;
				case (lung >= 56) && (lung <= 60) : points = points + 3; break;
				case (lung >= 61) && (lung <= 65) : points = points + 4.5; break;
				case (lung >= 66) && (lung <= 70) : points = points + 6.5; break;
				case (lung > 70) : points = points + 8.5; break;
			}

			if (recovery == 'Бег') {

				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 12) : points = points + 1; break;
					case ((rec >= 11.01) && (rec <= 12.00)) : points = points + 2; break;
					case ((rec >= 10.01) && (rec <= 11.00)) : points = points + 3; break;
					case ((rec >= 9.01) && (rec <= 10.00)) : points = points + 4; break;
					case ((rec >= 8.01) && (rec <= 9.00)) : points = points + 5; break;
					case ((rec >= 7.30) && (rec <= 8.00)) : points = points + 7; break;
					case (rec < 7.30) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 3) : points = points + 1; break;
					case ((rec >= 2.01) && (rec <= 3.00)) : points = points + 3; break;
					case ((rec >= 1.00) && (rec <= 2.00)) : points = points + 5; break;
					case (rec < 1.00) : points = points + 7; break;
				}	
			}

			if (exercise == 'push') {

				switch (true) {
					case (exercval < 2) : points = points + 1; break;
					case ((exercval >= 2) && (exercval <= 3)) : points = points + 2; break;
					case ((exercval >= 4) && (exercval <= 6)) : points = points + 3; break;
					case ((exercval >= 7) && (exercval <= 10)) : points = points + 4; break;
					case ((exercval >= 11) && (exercval <= 14)) : points = points + 5; break;
					case (exercval > 15) : points = points + 6; break;
				}
			} else {
				
				switch (true) {
					case (exercval < 4) : points = points + 1; break;
					case ((exercval >= 4) && (exercval <= 9)) : points = points + 2; break;
					case ((exercval >= 10) && (exercval <= 19)) : points = points + 3; break;
					case ((exercval >= 20) && (exercval <= 29)) : points = points + 4; break;
					case ((exercval >= 30) && (exercval <= 39)) : points = points + 5; break;
					case (exercval > 40) : points = points + 6; break;
				}
			}

			switch (true) {
				case (jump < 200) : points = points + 1; break;
				case ((jump >= 200) && (jump <= 209)) : points = points + 2; break;
				case ((jump >= 210) && (jump <= 219)) : points = points + 3; break;
				case ((jump >= 220) && (jump <= 229)) : points = points + 4; break;
				case ((jump >= 230) && (jump <= 239)) : points = points + 5; break;
				case (jump > 240) : points = points + 6; break;
			}
		} else { 
			
			switch (true) {
				case ((sist > 80) && (dia > 50)) : points = points + 1; break;
				case ((sist >= 80) && (sist <= 89) && (dia >= 50) && (dia <= 54)) : points = points + 2.5; break;
				case ((sist >= 90) && (sist <= 99) && (dia >= 55) && (dia <= 59)) : points = points + 4.5; break;
				case ((sist >= 100) && (sist <= 109) && (dia >= 76) && (dia <= 80)) : points = points + 7.5; break;
			}

			switch (true) {
				case (lung <= 40) : points = points + 1; break;
				case (lung >= 40) && (lung <= 45) : points = points + 2; break;
				case (lung >= 46) && (lung <= 50) : points = points + 3; break;
				case (lung >= 51) && (lung <= 55) : points = points + 4.5; break;
				case (lung >= 56) && (lung <= 60) : points = points + 6.5; break;
				case (lung > 60) : points = points + 8.5; break;
			}

			if (recovery == 'Бег') {

				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 14) : points = points + 1; break;
					case ((rec >= 13.01) && (rec <= 14.00)) : points = points + 2; break;
					case ((rec >= 12.01) && (rec <= 13.00)) : points = points + 3; break;
					case ((rec >= 11.01) && (rec <= 12.00)) : points = points + 4; break;
					case ((rec >= 10.01) && (rec <= 11.00)) : points = points + 5; break;
					case ((rec >= 9.30) && (rec <= 10.00)) : points = points + 7; break;
					case (rec < 10) : points = points + 9; break;
				} 
			} else {
				
				rec = ((parseInt(rec1) * 60) + parseInt(rec2)) / 60;

				switch (true) {
					case (rec > 3) : points = points + 1; break;
					case ((rec >= 2.01) && (rec <= 3.00)) : points = points + 3; break;
					case ((rec >= 1.00) && (rec <= 2.00)) : points = points + 5; break;
					case (rec < 1.00) : points = points + 7; break;
				}	
			}

			switch (true) {
				case (lift < 10) : points = points + 1; break;
				case ((lift >= 10) && (lift <= 19)) : points = points + 2; break;
				case ((lift >= 20) && (lift <= 29)) : points = points + 3; break;
				case ((lift >= 30) && (lift <= 39)) : points = points + 4; break;
				case ((lift >= 40) && (lift <= 49)) : points = points + 5; break;
				case (lift > 50) : points = points + 6; break;
			}

			switch (true) {
				case (jump < 140) : points = points + 1; break;
				case ((jump >= 140) && (jump <= 149)) : points = points + 2; break;
				case ((jump >= 150) && (jump <= 159)) : points = points + 3; break;
				case ((jump >= 160) && (jump <= 169)) : points = points + 4; break;
				case ((jump >= 170) && (jump <= 179)) : points = points + 5; break;
				case (jump > 180) : points = points + 6; break;
			}
		}
		
		switch (true) {
			case (training <= 1) : points = points + 1.5; break;
			case ((training >= 1) && (training <= 2)) : points = points + 2.5; break;
			case ((training >= 3) && (training <= 4)) : points = points + 5.5; break;
			case ((training >= 5) && (training <= 7)) : points = points + 7; break;
			case ((training >= 8) && (training <= 10)) : points = points + 8; break;
			case (training > 10) : points = points + 9; break;
		}

		switch (true) {
			case (cold > 5) : points = points + 1; break;
			case ((cold >= 4) && (cold <= 5)) : points = points + 2; break;
			case ((cold >= 2) && (cold <= 3)) : points = points + 3; break;
			case (cold <= 1): points = points + 7.5; break;
		}
	}

	var groupout = localStorage.getItem('groupinp');

	if (groupout == 'Основная') {

		avg = points / 6;

		switch (true) {
			case (avg >= 6.0) : status = 'Супервысокий'; break;
			case (avg >= 4.9) && (avg <= 5.0) : status = 'Очень высокий'; break;
			case (avg >= 4.0) && (avg <= 4.9) : status = 'Высокий'; break;
			case (avg >= 3.0) && (avg <= 3.9) : status = 'Средний'; break;
			case (avg >= 2.0) && (avg <= 2.9) : status = 'Низкий'; break;
			case (avg <= 1.9) : status = 'Очень низкий'; break;
		} 
	} else { 
		
		avg = points / 8;

		switch (true) {
			case (avg >= 6.0) : status = 'Супервысокий'; break;
			case (avg >= 4.9) && (avg <= 5.0) : status = 'Очень высокий'; break;
			case (avg >= 4.0) && (avg <= 4.9) : status = 'Высокий'; break;
			case (avg >= 3.0) && (avg <= 3.9) : status = 'Средний'; break;
			case (avg >= 2.0) && (avg <= 2.9) : status = 'Низкий'; break;
			case (avg <= 1.9) : status = 'Очень низкий'; break;
		}
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#points').append(avg.toFixed(2));
	$('#status').append(status);
	$('#group').append(group);
	$('#fac').append(fac);
});