$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('ae1inp');
	q2 = localStorage.getItem('ae2inp');
	q3 = localStorage.getItem('ae3inp');
	q4 = localStorage.getItem('ae4inp');
	q5 = localStorage.getItem('ae5inp');
	q6 = localStorage.getItem('ae6inp');
	q7 = localStorage.getItem('ae7inp');
	q8 = localStorage.getItem('ae8inp');
	q9 = localStorage.getItem('ae9inp');
	q10 = localStorage.getItem('ae10inp');
	q11 = localStorage.getItem('ae11inp');
	q12 = localStorage.getItem('ae12inp');
	q13 = localStorage.getItem('ae13inp');
	q14 = localStorage.getItem('ae14inp');
	q15 = localStorage.getItem('ae15inp');
	q16 = localStorage.getItem('ae16inp');
	q17 = localStorage.getItem('ae17inp');
	q18 = localStorage.getItem('ae18inp');
	q19 = localStorage.getItem('ae19inp');
	q20 = localStorage.getItem('ae20inp');
	q21 = localStorage.getItem('ae21inp');
	fac = localStorage.getItem('facinp');
	
	value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20) + parseInt(q21);

	switch (true) {
		case ((value >= 21) && (value <= 28)) : status = '1-й (очень низкий)'; break;
		case ((value >= 29) && (value <= 32)) : status = '2-й (низкий)'; break;
		case ((value >= 33) && (value <= 36)) : status = '3-й (ниже среднего)'; break;
		case ((value >= 37) && (value <= 40)) : status = '4-й (несколько ниже среднего)'; break;
		case ((value >= 41) && (value <= 44)) : status = '5-й (средний)'; break;
		case ((value >= 45) && (value <= 48)) : status = '6-й (несколько выше среднего)'; break;
		case ((value >= 49) && (value <= 52)) : status = '7-й (высше среднего)'; break;
		case ((value >= 53) && (value <= 56)) : status = '8-й (высокий)'; break;
		case ((value >= 57) && (value <= 63)) : status = '9-й (низкий)'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});