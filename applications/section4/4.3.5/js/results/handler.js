$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('u1inp'),
		q2 = localStorage.getItem('u2inp'),
		q3 = localStorage.getItem('u3inp'),
		q4 = localStorage.getItem('u4inp'),
		q5 = localStorage.getItem('u5inp'),
		q6 = localStorage.getItem('u6inp'),
		q7 = localStorage.getItem('u7inp'),
		q8 = localStorage.getItem('u8inp'),
		q9 = localStorage.getItem('u9inp'),
		q10 = localStorage.getItem('u10inp'),
		q11 = localStorage.getItem('u11inp'),
		q12 = localStorage.getItem('u12inp'),
		q13 = localStorage.getItem('u13inp'),
		q14 = localStorage.getItem('u14inp'),
		q15 = localStorage.getItem('u15inp'),
		q16 = localStorage.getItem('u16inp'),
		fac = localStorage.getItem('facinp');

	var points = 0;
	if (q1 != null) if (q1 == 7) points++;
	if (q2 != null) if (q2 == 5) points++;
	if (q3 != null) if (q3 == 3) points++;
	if (q4 != null) if (q4 == 9) points++;
	if (q5 != null) if (q5 == 2) points++;
	if (q6 != null) if (q6 == 6) points++;
	if (q7 != null) if (q7 == 1) points++;
	if (q8 != null) if (q8 == 8) points++;
	if (q9 != null) if (q9 == 4) points++;
	if (q10 != null) if (q10 == 16) points++;
	if (q11 != null) if (q11 == 11) points++;
	if (q12 != null) if (q12 == 15) points++;
	if (q13 != null) if (q13 == 13) points++;
	if (q14 != null) if (q14 == 14) points++;
	if (q15 != null) if (q15 == 12) points++;
	if (q16 != null) if (q16 == 10) points++;

	switch (true) {
		case (points <= 3) : var status = 'Низкий'; break;
		case (points >= 4 && points <= 5) : var status = 'Ниже среднего'; break;
		case (points >= 6 && points <= 7) : var status = 'Средний'; break;
		case (points >= 8 && points <= 9) : var status = 'Выше среднего'; break;
		case (points >= 10) : var status = 'Высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#status').append(status);
	$('#points').append(points);
	$('#fac').append(fac);
});