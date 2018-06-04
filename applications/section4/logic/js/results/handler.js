$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('w1inp');
	q2 = localStorage.getItem('w2inp');
	q3 = localStorage.getItem('w3inp');
	q4 = localStorage.getItem('w4inp');
	q5 = localStorage.getItem('w5inp');
	q6 = localStorage.getItem('w6inp');
	q7 = localStorage.getItem('w7inp');
	q8 = localStorage.getItem('w8inp');
	q9 = localStorage.getItem('w9inp');
	q10 = localStorage.getItem('w10inp');
	q11 = localStorage.getItem('w11inp');
	q12 = localStorage.getItem('w12inp');
	q13 = localStorage.getItem('w13inp');
	q14 = localStorage.getItem('w14inp');
	q15 = localStorage.getItem('w15inp');
	q16 = localStorage.getItem('w16inp');
	q17 = localStorage.getItem('w17inp');
	q18 = localStorage.getItem('w18inp');
	fac = localStorage.getItem('facinp');

	value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18);
	
	switch (true) {
		case (value <= 5) : status = 'Очень низкий'; break;
		case ((value >= 6) && (value <= 9)) : status = 'Низкий'; break;
		case ((value >= 10) && (value <= 11)) : status = 'Ниже среднего'; break;
		case ((value >= 12) && (value <= 13)) : status = 'Средний'; break;
		case ((value >= 14) && (value <= 15)) : status = 'Выше среднего'; break;
		case ((value >= 16) && (value <= 17)) : status = 'Высокий'; break;
		case (value >= 18) : status = 'Очень высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#value').append(value);
	$('#fac').append(fac);
});