$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('o1inp');
		q2 = localStorage.getItem('o2inp');
		q3 = localStorage.getItem('o3inp');
		q4 = localStorage.getItem('o4inp');
		q5 = localStorage.getItem('o5inp');
		q6 = localStorage.getItem('o6inp');
		q7 = localStorage.getItem('o7inp');
		q8 = localStorage.getItem('o8inp');
		q9 = localStorage.getItem('o9inp');
		q10 = localStorage.getItem('o10inp');
		q11 = localStorage.getItem('o11inp');
		q12 = localStorage.getItem('o12inp');
		q13 = localStorage.getItem('o13inp');
		q14 = localStorage.getItem('o14inp');
		q15 = localStorage.getItem('o15inp');
		q16 = localStorage.getItem('o16inp');
		q17 = localStorage.getItem('o17inp');
		q18 = localStorage.getItem('o18inp');
		q19 = localStorage.getItem('o19inp');
		q20 = localStorage.getItem('o20inp');
		q21 = localStorage.getItem('o21inp');
		q22 = localStorage.getItem('o22inp');
		q23 = localStorage.getItem('o23inp');
		q24 = localStorage.getItem('o24inp');
		q25 = localStorage.getItem('o25inp');
		q26 = localStorage.getItem('o26inp');
		q27 = localStorage.getItem('o27inp');
		q28 = localStorage.getItem('o28inp');
		q29 = localStorage.getItem('o29inp');
		q30 = localStorage.getItem('o30inp');
		q31 = localStorage.getItem('o31inp');
		q32 = localStorage.getItem('o32inp');
		q33 = localStorage.getItem('o33inp');
		q34 = localStorage.getItem('o34inp');
		q35 = localStorage.getItem('o35inp');
		q36 = localStorage.getItem('o36inp');
		fac = localStorage.getItem('facinp');
	
	var value1 = parseInt(q1) + parseInt(q7) + parseInt(q13) + parseInt(q19) + parseInt(q25) + parseInt(q31);
	var value2 = parseInt(q2) + parseInt(q8) + parseInt(q14) + parseInt(q20) + parseInt(q26) + parseInt(q32);
	var value3 = parseInt(q3) + parseInt(q9) + parseInt(q15) + parseInt(q21) + parseInt(q27) + parseInt(q33);
	var value4 = parseInt(q4) + parseInt(q10) + parseInt(q16) + parseInt(q22) + parseInt(q28) + parseInt(q34);
	var value5 = parseInt(q5) + parseInt(q11) + parseInt(q17) + parseInt(q23) + parseInt(q29) + parseInt(q35);
	var value6 = parseInt(q6) + parseInt(q12) + parseInt(q18) + parseInt(q24) + parseInt(q30) + parseInt(q36);

	var valpercent1 = (16.66 * value1).toFixed();
	var valpercent2 = (16.66 * value2).toFixed();
	var valpercent3 = (16.66 * value3).toFixed();
	var valpercent5 = (16.66 * value5).toFixed();
	var valpercent6 = (16.66 * value6).toFixed();

	var sum = value1 + value2 + value3 + value4 + value5 + value6;

	switch (true) {
		case (sum <= 14) : var status = 'Очень низкий'; break;
		case ((sum >= 15) && (sum <= 21)) : var status = 'Заниженный'; break;
		case ((sum >= 22) && (sum <= 29)) : var status = 'Средний'; break;
		case (sum >= 30): var status = 'Высокий'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#value1').append(valpercent1 + '%');
	$('#value2').append(valpercent2 + '%');
	$('#value3').append(valpercent3 + '%');
	$('#value5').append(valpercent5 + '%');
	$('#value6').append(valpercent6 + '%');
	$('#sum').append(sum);
	$('#fac').append(fac);
});