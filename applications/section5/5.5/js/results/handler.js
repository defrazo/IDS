$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('ac1inp'),
		q2 = localStorage.getItem('ac2inp'),
		q3 = localStorage.getItem('ac3inp'),
		q4 = localStorage.getItem('ac4inp'),
		q5 = localStorage.getItem('ac5inp'),
		q6 = localStorage.getItem('ac6inp'),
		q7 = localStorage.getItem('ac7inp'),
		q8 = localStorage.getItem('ac8inp'),
		q9 = localStorage.getItem('ac9inp'),
		q10 = localStorage.getItem('ac10inp'),
		q11 = localStorage.getItem('ac11inp'),
		q12 = localStorage.getItem('ac12inp'),
		q13 = localStorage.getItem('ac13inp'),
		q14 = localStorage.getItem('ac14inp'),
		q15 = localStorage.getItem('ac15inp'),
		q16 = localStorage.getItem('ac16inp'),
		fac = localStorage.getItem('facinp');
	
	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16);

	switch (true) {
		case ((value >= 30) && (value <= 31)) : var status = 'Низкий'; break;
		case ((value >= 25) && (value <= 29)) : var status = 'Ниже среднего'; break;
		case ((value >= 19) && (value <= 24)) : var status = 'Средний'; break;
		case ((value >= 14) && (value <= 18)) : var status = 'Идеальный'; break;
		case ((value >= 9) && (value <= 13)) : var status = 'Выше среднего (нежелательно)'; break;
		case ((value >= 4) && (value <= 8)) : var status = 'Высокий (плохо)'; break;
		case (value <= 3) : var status = 'Очень высокий (очень плохо)'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});