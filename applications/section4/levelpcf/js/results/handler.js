$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('q4111');
	q2 = localStorage.getItem('q4112');
	q3 = localStorage.getItem('q4113');
	q4 = localStorage.getItem('q4114');
	q5 = localStorage.getItem('q4115');
	q6 = localStorage.getItem('q4116');
	q7 = localStorage.getItem('q4117');
	q8 = localStorage.getItem('q4118');
	q9 = localStorage.getItem('q4119');
	q10 = localStorage.getItem('q41110');
	q11 = localStorage.getItem('q41111');
	q12 = localStorage.getItem('q41112');
	q13 = localStorage.getItem('q41113');
	q14 = localStorage.getItem('q41114');
	q15 = localStorage.getItem('q41115');
	q16 = localStorage.getItem('q41116');
	fac = localStorage.getItem('facinp');

	var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5)
	 + parseInt(q6)  + parseInt(q7)  + parseInt(q8) + parseInt(q9);

	switch (true) {
		case (sum >= 60) && (sum <= 64) : status = 'Деятельно-творческий (высокий)'; break;
		case (sum >= 48) && (sum <= 59) : status = 'Деятельный (средний)'; break;
		case (sum >= 32) && (sum <= 47) : status = 'Слабо заинтересованный (низкий)'; break;
		case (sum >= 16) && (sum <= 31) : status = 'Индифферентный (крайне низкий)'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#level').append(sum).append(' ' + status);
	$('#status').append(status);
	$('#fac').append(fac);
});