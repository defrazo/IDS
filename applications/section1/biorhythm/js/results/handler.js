$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('q1');
	q2 = localStorage.getItem('q2');
	q3 = localStorage.getItem('q3');
	q4 = localStorage.getItem('q4');
	q5 = localStorage.getItem('q5');
	q6 = localStorage.getItem('q6');
	q7 = localStorage.getItem('q7');
	q8 = localStorage.getItem('q8');
	q9 = localStorage.getItem('q9');
	q10 = localStorage.getItem('q10');
	q11 = localStorage.getItem('q11');
	q12 = localStorage.getItem('q12');
	q13 = localStorage.getItem('q13');
	q14 = localStorage.getItem('q14');
	q15 = localStorage.getItem('q15');
	q16 = localStorage.getItem('q16');
	q17 = localStorage.getItem('q17');
	q18 = localStorage.getItem('q18');
	q19 = localStorage.getItem('q19');
	q20 = localStorage.getItem('q20');
	q21 = localStorage.getItem('q21');
	q22 = localStorage.getItem('q22');
	q23 = localStorage.getItem('q23');
	fac = localStorage.getItem('facinp');

	var sum = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4) + parseFloat(q5)
	 + parseFloat(q6)  + parseFloat(q7)  + parseFloat(q8) + parseFloat(q9) + parseFloat(q10)
	 + parseFloat(q11) + parseFloat(q12) + parseFloat(q13) + parseFloat(q14) + parseFloat(q15)
	 + parseFloat(q16) + parseFloat(q17) + parseFloat(q18) + parseFloat(q19) + parseFloat(q20)
	 + parseFloat(q21) + parseFloat(q22) + parseFloat(q23);

	switch (true) {
		case (sum <= 41) : status = 'Четко выраженный вечерний тип'; break;
		case ((sum >= 42) && (sum <= 57)) : status = 'Слабо выраженный вечерний тип'; break;
		case ((sum >= 59) && (sum <= 76)) : status = 'Аритмичный тип'; break;
		case ((sum >= 77) && (sum <= 91)) : status = 'Слабо выраженный утренний тип'; break;
		case (sum >= 92) : status = 'Четко выраженный утренний тип'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#status').append(status);
	$('#fac').append(fac);
});