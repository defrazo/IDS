$(document).ready(function() {

	var	sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		date = localStorage.getItem('dateinp'),
		weight = parseInt(localStorage.getItem('weightinp')),
		height = parseInt(localStorage.getItem('heightinp')),
		pulse = parseInt(localStorage.getItem('pulseinp')),
		sist = parseInt(localStorage.getItem('sistinp')),
		gender = localStorage.getItem('genderinp'),
		rec1 = parseInt(localStorage.getItem('rec1inp')),
		rec2 = parseInt(localStorage.getItem('rec2inp')),
		lung = parseInt(localStorage.getItem('lunginp')),
		dynam = parseInt(localStorage.getItem('dynaminp')),
		fac = localStorage.getItem('facinp');
	
	imt = parseFloat(weight / Math.pow((height/100), 2));

	lindex = parseFloat(lung / weight);

	strindex = parseFloat((dynam * 100) / weight);

	robins = parseFloat((pulse * sist) / 100);

	recovery = ((parseFloat(rec1) * 60) + parseFloat(rec2)) / 60;

	var points = 0;

	if (gender == 'Мужской') {
		switch (true) {
			case (imt <= 18.9) : points = points - 2; break;
			case (imt >= 19.0 && imt <= 20.0) : points = points - 1; break;
			case (imt >= 20.1 && imt <= 25.0) : points = points + 0; break;
			case (imt >= 25.1 && imt <= 28.0) : points = points - 1; break;
			case (imt >= 28.1) : points = points - 2; break;
		}
		
		switch (true) {
			case (lindex <= 50) : points = points - 1; break;
			case (lindex >= 51 && lindex <= 55) : points = points + 0; break;
			case (lindex >= 56 && lindex <= 60) : points = points + 1; break;
			case (lindex >= 61 && lindex <= 65) : points = points + 2; break;
			case (lindex >= 66) : points = points + 3; break;
		}
		
		switch (true) {
			case (strindex <= 60) : points = points - 1; break;
			case (strindex >= 61 && strindex <= 65) : points = points + 0; break;
			case (strindex >= 66 && strindex <= 70) : points = points + 1; break;
			case (strindex >= 71 && strindex <= 80) : points = points + 2; break;
			case (strindex >= 81) : points = points + 3; break;
		}
		
		switch (true) {
			case (robins >= 111) : points = points - 2; break;
			case (robins >= 95 && robins <= 110) : points = points - 1; break;
			case (robins >= 85 && robins <= 94) : points = points + 0; break;
			case (robins >= 70 && robins <= 84) : points = points + 3; break;
			case (robins <= 69) : points = points + 5; break;
		}
		
		switch (true) {
			case (recovery >= 3.01 ) : points = points - 2; break;
			case (recovery >= 2.00 && recovery <= 3.00) : points = points + 1; break;
			case (recovery >= 1.30 && recovery <= 1.59) : points = points + 3; break;
			case (recovery >= 1.00 && recovery <= 1.29) : points = points + 5; break;
			case (recovery <= 0.59) : points = points + 7; break;
		}
	} else {
		switch (true) {
			case (imt <= 16.9) : points = points - 2; break;
			case (imt >= 17.0 && imt <= 18.0) : points = points - 1; break;
			case (imt >= 18.1 && imt <= 23.8) : points = points + 0; break;
			case (imt >= 23.9 && imt <= 26.0) : points = points - 1; break;
			case (imt >= 26.1) : points = points - 2; break;
		}

		switch (true) {
			case (lindex <= 40) : points = points - 1; break;
			case (lindex >= 41 && lindex <= 45) : points = points + 0; break;
			case (lindex >= 46 && lindex <= 50) : points = points + 1; break;
			case (lindex >= 51 && lindex <= 55) : points = points + 2; break;
			case (lindex >= 56) : points = points + 3; break;
		}

		switch (true) {
			case (strindex <= 40) : points = points - 1; break;
			case (strindex >= 41 && strindex <= 45) : points = points + 0; break;
			case (strindex >= 46 && strindex <= 50) : points = points + 1; break;
			case (strindex >= 51 && strindex <= 55) : points = points + 2; break;
			case (strindex >= 56) : points = points + 3; break;
		}

		switch (true) {
			case (robins >= 111) : points = points - 2; break;
			case (robins >= 95 && robins <= 110) : points = points - 1; break;
			case (robins >= 85 && robins <= 94) : points = points + 0; break;
			case (robins >= 70 && robins <= 84) : points = points + 3; break;
			case (robins <= 69) : points = points + 5; break;
		}

		switch (true) {
			case (recovery >= 3.01) : points = points - 2; break;
			case (recovery >= 2.00 && recovery <= 3.00) : points = points + 1; break;
			case (recovery >= 1.30 && recovery <= 1.59) : points = points + 3; break;
			case (recovery >= 1.00 && recovery <= 1.29) : points = points + 5; break;
			case (recovery <= 0.59) : points = points + 7; break;
		}
	}

	switch (true) {
		case (points >= 16) : status = 'Высокий'; break;
		case (points >= 12 && points <= 15) : status = 'Выше среднего'; break;
		case (points >= 7 && points <= 11) : status = 'Средний'; break;
		case (points >= 3 && points <= 6) : status = 'Ниже среднего'; break;
		case (points <= 2) : status = 'Низкий'; break;
	} 

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#points').append(points.toFixed(2));
	$('#status').append(status);
	$('#fac').append(fac);
});