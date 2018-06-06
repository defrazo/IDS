$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('e1inp'),
		q2 = localStorage.getItem('e2inp'),
		q3 = localStorage.getItem('e3inp'),
		q4 = localStorage.getItem('e4inp'),
		q5 = localStorage.getItem('e5inp'),
		q6 = localStorage.getItem('e6inp'),
		q7 = localStorage.getItem('e7inp'),
		q8 = localStorage.getItem('e8inp'),
		q9 = localStorage.getItem('e9inp'),
		q10 = localStorage.getItem('e10inp'),
		q11 = localStorage.getItem('e11inp'),
		q12 = localStorage.getItem('e12inp'),
		q13 = localStorage.getItem('e13inp'),
		q14 = localStorage.getItem('e14inp'),
		q15 = localStorage.getItem('e15inp'),
		q16 = localStorage.getItem('e16inp'),
		fac = localStorage.getItem('facinp');

	var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) 
		+ parseInt(q6)  + parseInt(q7)  + parseInt(q8) + parseInt(q9) + parseInt(q10) 
		+ parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16);

	switch (true) {
		case (sum >= 60) && (sum <= 64) : var status = 'Деятельно-творческий (высокий)'; break;
		case (sum >= 48) && (sum <= 59) : var status = 'Деятельный (средний)'; break;
		case (sum >= 32) && (sum <= 47) : var status = 'Слабо заинтересованный (низкий)'; break;
		case (sum >= 16) && (sum <= 31) : var status = 'Индифферентный (крайне низкий)'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#sum').append(sum);
	$('#level').append(status);
	$('#fac').append(fac);
});