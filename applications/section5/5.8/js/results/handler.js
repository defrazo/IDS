$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('af1inp'),
		q2 = localStorage.getItem('af2inp'),
		q3 = localStorage.getItem('af3inp'),
		q4 = localStorage.getItem('af4inp'),
		q5 = localStorage.getItem('af5inp'),
		q6 = localStorage.getItem('af6inp'),
		q7 = localStorage.getItem('af7inp'),
		q8 = localStorage.getItem('af8inp'),
		q9 = localStorage.getItem('af9inp'),
		q10 = localStorage.getItem('af10inp'),
		q11 = localStorage.getItem('af11inp'),
		q12 = localStorage.getItem('af12inp'),
		q13 = localStorage.getItem('af13inp'),
		q14 = localStorage.getItem('af14inp'),
		q15 = localStorage.getItem('af15inp'),
		q16 = localStorage.getItem('af16inp'),
		q17 = localStorage.getItem('af17inp'),
		q18 = localStorage.getItem('af18inp'),
		q19 = localStorage.getItem('af19inp'),
		q20 = localStorage.getItem('af20inp'),
		q21 = localStorage.getItem('af21inp'),
		q22 = localStorage.getItem('af22inp'),
		q23 = localStorage.getItem('af23inp'),
		q24 = localStorage.getItem('af24inp'),
		q25 = localStorage.getItem('af25inp'),
		q26 = localStorage.getItem('af26inp'),
		q27 = localStorage.getItem('af27inp'),
		q28 = localStorage.getItem('af28inp'),
		q29 = localStorage.getItem('af29inp'),
		q30 = localStorage.getItem('af30inp'),
		q31 = localStorage.getItem('af31inp'),
		q32 = localStorage.getItem('af32inp'),
		q33 = localStorage.getItem('af33inp'),
		q34 = localStorage.getItem('af34inp'),
		q35 = localStorage.getItem('af35inp'),
		q36 = localStorage.getItem('af36inp'),
		fac = localStorage.getItem('facinp');
	
	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20) + parseInt(q21) + parseInt(q22) + parseInt(q23) + parseInt(q24) + parseInt(q25) + parseInt(q26) + parseInt(q27) + parseInt(q28) + parseInt(q29) + parseInt(q30) + parseInt(q31) + parseInt(q32) + parseInt(q33) + parseInt(q34) + parseInt(q35) + parseInt(q36);

	switch (true) {
		case (value >= 37 && value <= 44) : status = 'Очень низкий'; break;
		case (value >= 45 && value <= 52) : status = 'Низкий'; break;
		case (value >= 53 && value <= 60) : status = 'Ниже среднего'; break;
		case (value >= 61 && value <= 68) : status = 'Чуть ниже среднего'; break;
		case (value >= 69 && value <= 76) : status = 'Средний'; break;
		case (value >= 77 && value <= 84) : status = 'Чуть выше среднего'; break;
		case (value >= 85 && value <= 92) : status = 'Выше среднего'; break;
		case (value >= 93 && value <= 100) : status = 'Высокий'; break;
		case (value >= 101 && value <= 108) : status = 'Очень высокий'; break;
	}
	
	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});