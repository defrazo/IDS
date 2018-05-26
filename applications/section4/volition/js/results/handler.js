$(document).ready(function() {
	date = localStorage.getItem('dateinp');
	gender = localStorage.getItem('genderinp');
	sname = localStorage.getItem('snameinp');
	fname = localStorage.getItem('fnameinp');
	mname = localStorage.getItem('mnameinp');
	q1 = localStorage.getItem('k1inp');
	q2 = localStorage.getItem('k2inp');
	q3 = localStorage.getItem('k3inp');
	q4 = localStorage.getItem('k4inp');
	q5 = localStorage.getItem('k5inp');
	q6 = localStorage.getItem('k6inp');
	q7 = localStorage.getItem('k7inp');
	q8 = localStorage.getItem('k8inp');
	q9 = localStorage.getItem('k9inp');
	q10 = localStorage.getItem('k10inp');
	q11 = localStorage.getItem('k11inp');
	q12 = localStorage.getItem('k12inp');
	q13 = localStorage.getItem('k13inp');
	q14 = localStorage.getItem('k14inp');
	q15 = localStorage.getItem('k15inp');
	q16 = localStorage.getItem('k16inp');
	q17 = localStorage.getItem('k17inp');
	q18 = localStorage.getItem('k18inp');
	q19 = localStorage.getItem('k19inp');
	q20 = localStorage.getItem('k20inp');
	fac = localStorage.getItem('facinp');
	
	value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20);

	switch (true) {
		case (value <= 14) : status = 'Воля развита слабо'; break;
		case ((value >= 15) && (value <= 25)) : status = 'Воля достаточно тверда, а поступки взвешенные'; break;
		case ((value >= 26) && (value <= 38)) : status = 'Твердая воля, ответственное поведение'; break;
		case (value >= 39) : status = 'Воля развита идеально'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});