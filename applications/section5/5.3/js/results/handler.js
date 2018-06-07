$(document).ready(function() {

	var	date = localStorage.getItem('dateinp'),
		gender = localStorage.getItem('genderinp'),
		sname = localStorage.getItem('snameinp'),
		fname = localStorage.getItem('fnameinp'),
		mname = localStorage.getItem('mnameinp'),
		q1 = localStorage.getItem('aa1inp'),
		q2 = localStorage.getItem('aa2inp'),
		q3 = localStorage.getItem('aa3inp'),
		q4 = localStorage.getItem('aa4inp'),
		q5 = localStorage.getItem('aa5inp'),
		q6 = localStorage.getItem('aa6inp'),
		q7 = localStorage.getItem('aa7inp'),
		q8 = localStorage.getItem('aa8inp'),
		q9 = localStorage.getItem('aa9inp'),
		q10 = localStorage.getItem('aa10inp'),
		q11 = localStorage.getItem('aa11inp'),
		q12 = localStorage.getItem('aa12inp'),
		fac = localStorage.getItem('facinp');
	
	var value = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10) + parseInt(q11) + parseInt(q12);

	switch (true) {
		case (value <= 17) : var status = 'Вы достигли эмоционального благополучия. Вы уважаете свою индивидуальность и умеете радоваться жизни.'; break;
		case ((value >= 18) && (value <= 21)) : var status = 'Вас, вероятно, в какой-то степени можно назвать счастливым, но, по-видимуму, вы не совсем довольны собой и недооцениваете себя как личность.'; break;
		case ((value >= 22) && (value <= 24)) : var status = 'Вы могли бы получать от жизни намного больше радости, чем теперь.'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#status').append(status);
	$('#fac').append(fac);
});