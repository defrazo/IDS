$(document).ready(function() {

	var date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('g1inp'),
		q2 = localStorage.getItem('g2inp'),
		q3 = localStorage.getItem('g3inp'),
		q4 = localStorage.getItem('g4inp'),
		q5 = localStorage.getItem('g5inp'),
		q6 = localStorage.getItem('g6inp'),
		q7 = localStorage.getItem('g7inp'),
		q8 = localStorage.getItem('g8inp'),
		q9 = localStorage.getItem('g9inp'),
		q10 = localStorage.getItem('g10inp'),
		q11 = localStorage.getItem('g11inp'),
		q12 = localStorage.getItem('g12inp'),
		q13 = localStorage.getItem('g13inp'),
		q14 = localStorage.getItem('g14inp'),
		q15 = localStorage.getItem('g15inp'),
		q16 = localStorage.getItem('g16inp'),
		q17 = localStorage.getItem('g17inp'),
		q18 = localStorage.getItem('g18inp'),
		q19 = localStorage.getItem('g19inp'),
		q20 = localStorage.getItem('g20inp'),
		fac = localStorage.getItem('facinp');
	
	var sum = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5)
		+ parseInt(q6)  + parseInt(q7)  + parseInt(q8) + parseInt(q9) + parseInt(q10)
		+ parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15)
		+ parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20);

	var alt = 100 / 20 * sum;

	var ego = 100 - alt;

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#alt').append(alt + '%');
	$('#ego').append(ego + '%');
	$('#fac').append(fac);
});