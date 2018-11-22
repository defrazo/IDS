$(document).ready(function() {
	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		age = localStorage.getItem('ageinp'),
		height = localStorage.getItem('heightinp'),
		weight = localStorage.getItem('weightinp'),
		q1 = localStorage.getItem('c1inp'),
		q2 = localStorage.getItem('c2inp'),
		q3 = localStorage.getItem('c3inp'),
		q4 = localStorage.getItem('c4inp'),
		q5 = localStorage.getItem('c5inp'),
		q6 = localStorage.getItem('c6inp'),
		q7 = localStorage.getItem('c7inp'),
		q8 = localStorage.getItem('c8inp'),
		q9 = localStorage.getItem('c9inp'),
		q10 = localStorage.getItem('c10inp'),
		q11 = localStorage.getItem('c11inp'),
		q12 = localStorage.getItem('c12inp'),
		q13 = localStorage.getItem('c13inp'),
		q14 = localStorage.getItem('c14inp'),
		q15 = localStorage.getItem('c15inp'),
		q16 = localStorage.getItem('c16inp'),
		q17 = localStorage.getItem('c17inp'),
		q18 = localStorage.getItem('c18inp'),
		q19 = localStorage.getItem('c19inp'),
		q20 = localStorage.getItem('c20inp'),
		q21 = localStorage.getItem('c21inp'),
		q22 = localStorage.getItem('c22inp'),
		fac = localStorage.getItem('facinp');
	
	var imt = (weight / Math.pow((height / 100), 2)).toFixed(2);
	
	switch (true) {
		case (gender == 'Женский') : var mass = (height - 110) * 1.15; break;
		case (gender == 'Мужской') : var mass = (height - 100) * 1.15; break;
	}

	var massdiff = weight - mass;
	
	switch (true) {
		case (massdiff <= 5) : var q23 = 0; break;
		case (massdiff >= 6 && massdiff <= 10) : var q23 = -2; break;
		case (massdiff >= 11 && massdiff <= 20) : var q23 = -4; break;
		case (massdiff >= 21) : var q23 = -8; break;
	}

	switch (true) {
		case (age <= 30) : var q24 = 0; break;
		case (age >= 31 && age <= 40) : var q24 = 2; break;
		case (age >= 41 && age <= 50) : var q24 = 3; break;
		case (age >= 51 && age <= 70) : var q24 = 4; break;
		case (age >= 71) : var q24 = 5; break;
	}

	var sum = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4) + parseFloat(q5)
	 + parseFloat(q6)  + parseFloat(q7)  + parseFloat(q8) + parseFloat(q9) + parseFloat(q10)
	 + parseFloat(q11) + parseFloat(q12) + parseFloat(q13) + parseFloat(q14) + parseFloat(q15)
	 + parseFloat(q16) + parseFloat(q17) + parseFloat(q18) + parseFloat(q19) + parseFloat(q20)
	 + parseFloat(q21) + parseFloat(q22) + parseFloat(q23) + parseFloat(q24) + parseFloat(age);

	console.log(sum);

	switch (true) {
		case (gender == 'Женский') : var life = sum + 78; break;
		case (gender == 'Мужской') : var life = sum + 70; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#sum').append(life + ' лет/год');
	$('#status').append(status);
	$('#fac').append(fac);
});