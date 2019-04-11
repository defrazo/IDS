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
	var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5)
	 + parseInt(q6)  + parseInt(q7)  + parseInt(q8) + parseInt(q9) + parseInt(q10)
	 + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15)
	 + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20)
	 + parseInt(q21) + parseInt(q22) + parseInt(q23) + parseInt(q24) + parseInt(age);

	switch (true) {
		case (gender == 'Женский') : var life = sum + 78; break;
		case (gender == 'Мужской') : var life = sum + 70; break;
	}
	var c1 = parseInt(q1) + parseInt(q2) + parseInt(q3);
	var c2 = parseInt(q4) + parseInt(q5);
	var c3 = parseInt(q11) + parseInt(q12);
	var c4 = parseInt(q15) + parseInt(q16);
	var c5 = parseInt(q17) + parseInt(q18);
	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#sum').append(life + ' год(а)/лет');
	$('#c1').append(c1 + ' год(а)/лет');
	$('#c2').append(c2 + ' год(а)/лет');
	$('#c3').append(c3 + ' год(а)/лет');
	$('#c4').append(q14 + ' год(а)/лет');
	$('#c5').append(c4 + ' год(а)/лет');
	$('#c6').append(q7 + ' год(а)/лет');
	$('#c7').append(q19 + ' год(а)/лет');
	$('#c8').append(q20 + ' год(а)/лет');
	$('#c9').append(q21 + ' год(а)/лет');
	$('#c10').append(q23 + ' год(а)/лет');
	$('#c11').append(c5 + ' год(а)/лет');
	$('#status').append(status);
	$('#fac').append(fac);
});