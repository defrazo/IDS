$(document).ready(function() {

	var date = localStorage.getItem('dateinp');
		gender = localStorage.getItem('genderinp');
		sname = localStorage.getItem('snameinp');
		fname = localStorage.getItem('fnameinp');
		mname = localStorage.getItem('mnameinp');
		q1 = localStorage.getItem('j1inp');
		q2 = localStorage.getItem('j2inp');
		q3 = localStorage.getItem('j3inp');
		q4 = localStorage.getItem('j4inp');
		q5 = localStorage.getItem('j5inp');
		q6 = localStorage.getItem('j6inp');
		q7 = localStorage.getItem('j7inp');
		q8 = localStorage.getItem('j8inp');
		q9 = localStorage.getItem('j9inp');
		q10 = localStorage.getItem('j10inp');
		q11 = localStorage.getItem('j11inp');
		q12 = localStorage.getItem('j12inp');
		q13 = localStorage.getItem('j13inp');
		q14 = localStorage.getItem('j14inp');
		q15 = localStorage.getItem('j15inp');
		q16 = localStorage.getItem('j16inp');
		q17 = localStorage.getItem('j17inp');
		q18 = localStorage.getItem('j18inp');
		q19 = localStorage.getItem('j19inp');
		q20 = localStorage.getItem('j20inp');
		q21 = localStorage.getItem('j21inp');
		q22 = localStorage.getItem('j22inp');
		q23 = localStorage.getItem('j23inp');
		q24 = localStorage.getItem('j24inp');
		q25 = localStorage.getItem('j25inp');
		q26 = localStorage.getItem('j26inp');
		q27 = localStorage.getItem('j27inp');
		q28 = localStorage.getItem('j28inp');
		q29 = localStorage.getItem('j29inp');
		q30 = localStorage.getItem('j30inp');
		q31 = localStorage.getItem('j31inp');
		q32 = localStorage.getItem('j32inp');
		q33 = localStorage.getItem('j33inp');
		q34 = localStorage.getItem('j34inp');
		q35 = localStorage.getItem('j35inp');
		q36 = localStorage.getItem('j36inp');
		q37 = localStorage.getItem('j37inp');
		q38 = localStorage.getItem('j38inp');
		q39 = localStorage.getItem('j39inp');
		q40 = localStorage.getItem('j40inp');
		fac = localStorage.getItem('facinp');
	
	value1 = parseInt(q1) + parseInt(q2) + parseInt(q3) + parseInt(q4) + parseInt(q5) + parseInt(q6) + parseInt(q7) + parseInt(q8) + parseInt(q9) + parseInt(q10);
	value2 = parseInt(q11) + parseInt(q12) + parseInt(q13) + parseInt(q14) + parseInt(q15) + parseInt(q16) + parseInt(q17) + parseInt(q18) + parseInt(q19) + parseInt(q20);
	value3 = parseInt(q21) + parseInt(q22) + parseInt(q23) + parseInt(q24) + parseInt(q25) + parseInt(q26) + parseInt(q27) + parseInt(q28) + parseInt(q29) + parseInt(q30);
	value4 = parseInt(q31) + parseInt(q32) + parseInt(q33) + parseInt(q34) + parseInt(q35) + parseInt(q36) + parseInt(q37) + parseInt(q38) + parseInt(q39) + parseInt(q40);

	switch (true) {
		case ((value1 >= 0) && (value1 <= 7)) : anxiety = 'Тревожность низкая'; break;
		case ((value1 >= 8) && (value1 <= 14)) : anxiety = 'Тревожность средняя (допустимая)'; break;
		case ((value1 >= 15) && (value1 <= 20)) : anxiety = 'Тревожность высокая'; break;
	}

	switch (true) {
		case ((value2 >= 0) && (value2 <= 7)) : frustration = 'Высокая самооценка. (фрустрация отсутствует)'; break;
		case ((value2 >= 8) && (value2 <= 14)) : frustration = 'Средняя самооценка (фрустрация имеет место)'; break;
		case ((value2 >= 15) && (value2 <= 20)) : frustration = 'Низкая самооценка (фрустрация сильная)'; break;
	}

	switch (true) {
		case ((value3 >= 0) && (value3 <= 7)) : calm = 'Высокий уровень спокойствия'; break;
		case ((value3 >= 8) && (value3 <= 14)) : calm = 'Средний уровень спокойствия'; break;
		case ((value3 >= 15) && (value3 <= 20)) : calm = 'Низкий уровень спокойствия'; break;
	}

	switch (true) {
		case ((value4 >= 0) && (value4 <= 7)) : rigidity = 'Слабая регидность'; break;
		case ((value4 >= 8) && (value4 <= 14)) : rigidity = 'Средняя ригидность'; break;
		case ((value4 >= 15) && (value4 <= 20)) : rigidity = 'Сильная ригидность'; break;
	}

	$('#sname').append(sname);
	$('#fname').append(fname);
	$('#mname').append(mname);
	$('#date').append(date);
	$('#gender').append(gender);
	$('#anxiety').append(anxiety);
	$('#frustration').append(frustration);
	$('#calm').append(calm);
	$('#rigidity').append(rigidity);
	$('#fac').append(fac);
});