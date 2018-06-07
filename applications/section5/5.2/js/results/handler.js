$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('z1inp'),
		q2 = localStorage.getItem('z2inp'),
		q3 = localStorage.getItem('z3inp'),
		q4 = localStorage.getItem('z4inp'),
		q5 = localStorage.getItem('z5inp'),
		q6 = localStorage.getItem('z6inp'),
		q7 = localStorage.getItem('z7inp'),
		q8 = localStorage.getItem('z8inp'),
		q9 = localStorage.getItem('z9inp'),
		q10 = localStorage.getItem('z10inp'),
		q11 = localStorage.getItem('z11inp'),
		q12 = localStorage.getItem('z12inp'),
		q13 = localStorage.getItem('z13inp'),
		q14 = localStorage.getItem('z14inp'),
		q15 = localStorage.getItem('z15inp'),
		q16 = localStorage.getItem('z16inp'),
		q17 = localStorage.getItem('z17inp'),
		q18 = localStorage.getItem('z18inp'),
		q19 = localStorage.getItem('z19inp'),
		q20 = localStorage.getItem('z20inp'),
		q21 = localStorage.getItem('z21inp'),
		q22 = localStorage.getItem('z22inp'),
		fac = localStorage.getItem('facinp');
	
	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20) + parseInt(q21) + parseInt(q22);

	switch (true) {
		case (value >= 60) : var status = 'Высокий'; break;
		case ((value >= 40) && (value <= 59)) : var status = 'Средний'; break;
		case ((value >= 20) && (value <= 39)) : var status = 'Низкий'; break;
		case (value <= 19) : var status = 'Очень низкий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});