$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	age = localStorage.getItem('ageinp');
	height = localStorage.getItem('heightinp');
	weight = localStorage.getItem('weightinp');
	q1 = localStorage.getItem('q1');
	q2 = localStorage.getItem('q2');
	q3 = localStorage.getItem('q3');
	q4 = localStorage.getItem('q4');
	q5 = localStorage.getItem('q5');
	q6 = localStorage.getItem('q6');
	fac = localStorage.getItem('facinp');
	
	var imt = (weight / Math.pow((height / 100), 2)).toFixed(2);
	
	switch (true) {
		case (gender == 'Женский') : genderp = 1; break;
		case (gender == 'Мужской') : genderp = 2; break;
	}

	switch (true) {
		case (imt > 18.5) && (imt < 24.9) : imtp = 0; break;
		case (imt > 25) && (imt < 29.9) : imtp = 2; break;
		case (imt > 30) && (imt < 34.9) : imtp = 3; break;
		case (imt > 35) && (imt < 39.9) : imtp = 4; break;
		case (imt > 40) : imtp = 5; break;
	}

	switch (true) {
		case (age < 20) : var agep = 0; break;
		case (age > 20) && (age < 29) : var agep = 1; break;
		case (age > 30) && (age < 39) : var agep = 2; break;
		case (age > 40) && (age < 49) : var agep = 3; break;
		case (age > 50) && (age < 59) : var agep = 4; break;
		case (age > 60) : var agep = 5; break;
	}

	var sum = parseFloat(agep) + parseFloat(genderp) + parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4) + parseFloat(q5) + parseFloat(q6) + parseFloat(imtp);

	switch (true) {
		case (sum <= 13) : var status = 'Отсутствует'; break;
		case (sum >= 14) && (sum <= 21) : var status = 'Минимальный'; break;
		case (sum >= 22) && (sum <= 28) : var status = 'Явный'; break;
		case (sum >= 29) && (sum <= 35) : var status = 'Выраженный'; break;
		case (sum >= 36) : var status = 'Максимальный'; break;
	}


	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#sum').append(sum);
	$('#status').append(status);
	$('#fac').append(fac);
});