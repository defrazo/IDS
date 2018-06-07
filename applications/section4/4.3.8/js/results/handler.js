$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('x1inp'),
		q2 = localStorage.getItem('x2inp'),
		q3 = localStorage.getItem('x3inp'),
		q4 = localStorage.getItem('x4inp'),
		q5 = localStorage.getItem('x5inp'),
		q6 = localStorage.getItem('x6inp'),
		q7 = localStorage.getItem('x7inp'),
		q8 = localStorage.getItem('x8inp'),
		q9 = localStorage.getItem('x9inp'),
		q10 = localStorage.getItem('x10inp'),
		q11 = localStorage.getItem('x11inp'),
		q12 = localStorage.getItem('x12inp'),
		q13 = localStorage.getItem('x13inp'),
		q14 = localStorage.getItem('x14inp'),
		q15 = localStorage.getItem('x15inp'),
		q16 = localStorage.getItem('x16inp'),
		q17 = localStorage.getItem('x17inp'),
		fac = localStorage.getItem('facinp');

	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17);

	switch (true) {
		case (value <= 8) : var status = 'Очень низкий'; break;
		case ((value >= 9) && (value <= 10)) : var status = 'Низкий'; break;
		case ((value >= 11) && (value <= 13)) : var status = 'Средний'; break;
		case ((value >= 14) && (value <= 15)) : var status = 'Высокий'; break;
		case (value >= 16) : var status = 'Очень высокий'; break;
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