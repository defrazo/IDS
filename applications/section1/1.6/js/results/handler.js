$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('dd1inp');
		q2 = localStorage.getItem('dd2inp');
		q3 = localStorage.getItem('dd3inp');
		q4 = localStorage.getItem('dd4inp');
		q5 = localStorage.getItem('dd5inp');
		q6 = localStorage.getItem('dd6inp');
		q7 = localStorage.getItem('dd7inp');
		q8 = localStorage.getItem('dd8inp');
		q9 = localStorage.getItem('dd9inp');
		q10 = localStorage.getItem('dd10inp');
		q11 = localStorage.getItem('dd11inp');
		q12 = localStorage.getItem('dd12inp');
		q13 = localStorage.getItem('dd13inp');
		q14 = localStorage.getItem('dd14inp');
		q15 = localStorage.getItem('dd15inp');
		q16 = localStorage.getItem('dd16inp');
		q17 = localStorage.getItem('dd17inp');
		q18 = localStorage.getItem('dd18inp');
		q19 = localStorage.getItem('dd19inp');
		q20 = localStorage.getItem('dd20inp');
		q21 = localStorage.getItem('dd21inp');
		q22 = localStorage.getItem('dd22inp');
		q23 = localStorage.getItem('dd23inp');
		fac = localStorage.getItem('facinp');

	var sum = parseFloat(q1) + parseFloat(q2) + parseFloat(q3) + parseFloat(q4) + parseFloat(q5)
	 + parseFloat(q6)  + parseFloat(q7)  + parseFloat(q8) + parseFloat(q9) + parseFloat(q10)
	 + parseFloat(q11) + parseFloat(q12) + parseFloat(q13) + parseFloat(q14) + parseFloat(q15)
	 + parseFloat(q16) + parseFloat(q17) + parseFloat(q18) + parseFloat(q19) + parseFloat(q20)
	 + parseFloat(q21) + parseFloat(q22) + parseFloat(q23);

	switch (true) {
		case (sum <= 41) : var status = 'Четко выраженный вечерний тип'; break;
		case (sum >= 42 && sum <= 58) : var status = 'Слабо выраженный вечерний тип'; break;
		case (sum >= 59 && sum <= 76) : var status = 'Аритмичный тип'; break;
		case (sum >= 77 && sum <= 91) : var status = 'Слабо выраженный утренний тип'; break;
		case (sum >= 92) : var status = 'Четко выраженный утренний тип'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#status').append(status);
	$('#fac').append(fac);
});