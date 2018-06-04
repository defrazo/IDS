$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('t1inp');
	q2 = localStorage.getItem('t2inp');
	q3 = localStorage.getItem('t3inp');
	q4 = localStorage.getItem('t4inp');
	q5 = localStorage.getItem('t5inp');
	q6 = localStorage.getItem('t6inp');
	q7 = localStorage.getItem('t7inp');
	q8 = localStorage.getItem('t8inp');
	q9 = localStorage.getItem('t9inp');
	q10 = localStorage.getItem('t10inp');
	q11 = localStorage.getItem('t11inp');
	q12 = localStorage.getItem('t12inp');
	fac = localStorage.getItem('facinp');

	points = 0;
	if (q1 == 15) points++;
	if (q2 == 39) points++;
	if (q3 == 87) points++;
	if (q4 == 23) points++;
	if (q5 == 94) points++;
	if (q6 == 65) points++;
	if (q7 == 79) points++;
	if (q8 == 46) points++;
	if (q9 == 83) points++;
	if (q10 == 19) points++;
	if (q11 == 94) points++;
	if (q12 == 52) points++;
	console.log(points);
	

	switch (true) {
		case (points <= 3) : status = 'Низкий'; break;
		case ((points >= 4) && (points <= 5)) : status = 'Ниже среднего'; break;
		case ((points >= 6) && (points <= 7)) : status = 'Средний'; break;
		case ((points >= 8) && (points <= 9)) : status = 'Выше среднего'; break;
		case (points >= 10) : status = 'Высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#status').append(status);
	$('#points').append(points);
	$('#fac').append(fac);
});